import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { DateTime } from "luxon";
import SideNavBar from '../../components/global/SideNavBar'
import { RecipeCard } from '../../components/Recipes/RecipeCard'
// import { RecipeModal } from '../../components/Recipes/RecipeModal'

let SingleMealPlan = ({ apiClient, logOutFunc }) => {
    const [mealPlanData, setMealPlanData] = useState({})
    // array of recipes from server for the specific meal plan
    const [recipesToBuild, setRecipesToBuild] = useState([])
    
    let { id } = useParams()
    const startDate = DateTime.fromISO(mealPlanData.start_date);
    const endDate = DateTime.fromISO(mealPlanData.end_date);
    
    useEffect(() => {
        getMealPlanData(id)
    }, [])

    // takes array of recipes
    let getRecipes = (recipes) => {
        const recipePromises = recipes.map(recipe => {
            return apiClient.getSingleRecipe(recipe.recipe[0])
                .then(({ data }) => data, console.error)
        })
        Promise.all(recipePromises).then((data) => {
            setRecipesToBuild(data)
        })
    }
        
    let getMealPlanData = (id) => {
        apiClient.getSingleMealPlan(id)
        .then(({ data }) => {
            setMealPlanData(data)
            getRecipes(data.recipes)
        })
        .catch(console.error)
    }


    const buildMealPlanFeed = () => {
        console.log("recipes 2 build", recipesToBuild)
        return recipesToBuild.length ? (
            recipesToBuild.map((recipe, index) => {
                return (
                    <Row key={recipe._id}>
                        <Col>
                            <h3 className="mt-5">Day {index + 1 }</h3>
                            <RecipeCard
                                recipe={recipe}
                            />
                        </Col>
                    </Row>
                );
        })
        ) : (
        <Row>
            <p>No recipes available</p>
        </Row>
        );
    };

    return (
        <>
            <SideNavBar logOut={logOutFunc} />
            <Container className="mt-5">
                <h1>{mealPlanData.title}</h1>
                <h5>{`${mealPlanData.duration} Days | From ${startDate.toLocaleString()} to ${endDate.toLocaleString()}`} </h5>
                {/* {buildMealPlanFeed()} */}
                {recipesToBuild.map((recipe, index) => {
                return (
                    <div key={recipe._id}>
                            <h3 className="mt-5">Day {index + 1 }</h3>
                            <RecipeCard
                                recipe={recipe}
                            />
                    </div>
                );
        })}
            </Container>
        </>
    )
}
export default SingleMealPlan


// duration: "2"
// end_date: "2021-03-26T20:48:00.563+00:00"
// recipes: Array(2)
// 0: {recipe: Array(1), _id: "605ba596d1987f61d4eb845e", day: 1}
// 1: {recipe: Array(1), _id: "605ba596d1987f61d4eb845f", day: 2}
// length: 2
// __proto__: Array(0)
// start_date: "2021-03-24T20:48:00.563Z"
// title: "Test Meal Plan"
// user: ["60492992bab77c41a862e786"]
// __v: 0
// _id: "605ba596d1987f61d4eb845d"


// duration: "2"
// end_date: "2021-03-26T20:48:00.563+00:00"
// recipes: Array(2)
// 0: {recipe: Array(1), _id: "605ba596d1987f61d4eb845e", day: 1}
// 1: {recipe: Array(1), _id: "605ba596d1987f61d4eb845f", day: 2}
// length: 2
// __proto__: Array(0)
// start_date: "2021-03-24T20:48:00.563Z"
// title: "Test Meal Plan"
// user: ["60492992bab77c41a862e786"]
// __v: 0
// _id: "605ba596d1987f61d4e