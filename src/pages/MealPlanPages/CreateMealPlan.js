// CreateMealPlan can be found at /user/create-meal-plan
// this page features the create meal plan form
import SideNavBar from '../../components/global/SideNavBar';
import {Container} from 'react-bootstrap'
import MealPlanForm from '../../components/Meals_Plans/MealPlanForm';

let CreateMealPlan = (props) => {
    return (
        <>
            <SideNavBar logOut={props.logOutFunc} />
            <Container>
                <MealPlanForm apiClient={ props.apiClient}/>
            </Container>
        </>
    )
}

export default CreateMealPlan