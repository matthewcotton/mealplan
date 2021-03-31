import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { DateTime } from "luxon";
import SideNavBar from '../../components/global/SideNavBar'
import { RecipeCard } from '../../components/Recipes/RecipeCard'
import { RecipeModal } from '../../components/Recipes/RecipeModal'

let SingleMealPlan = ({ apiClient, logOutFunc }) => {
    const [mealPlanData, setMealPlanData] = useState({})
    // array of recipes from server for the specific meal plan
    const [recipesToBuild, setRecipesToBuild] = useState([])
    const [modalState, setModalState] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState({
    title: "",
    prep_time: "",
    cook_time: "",
    serves: "",
    ingredients: [{ measurement: "", unit: "", ingredient: "" }],
    steps: [{ step: "", instruction: "" }],
  });
    
    let { id } = useParams()
    const startDate = DateTime.fromISO(mealPlanData.start_date);
    const endDate = DateTime.fromISO(mealPlanData.end_date);
    
    useEffect(() => {
        getMealPlanData(id)
    }, [])

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
                                setModalState={setModalState}
                                setSelectedRecipe={setSelectedRecipe}
                            />
                        </Col>
                        <RecipeModal
                            show={modalState}
                            setModalState={setModalState}
                            recipe={selectedRecipe}
                            setSelectedRecipe={setSelectedRecipe}
                        />
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
                {buildMealPlanFeed()}
            </Container>
        </>
    )
}
export default SingleMealPlan