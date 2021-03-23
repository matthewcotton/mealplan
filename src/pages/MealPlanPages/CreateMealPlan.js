// CreateMealPlan can be found at /user/create-meal-plan
// this page features the create meal plan form
import SideNavBar from '../../components/global/SideNavBar'

let CreateMealPlan = (props) => {
    return (
        <>
            <SideNavBar logOut={props.logOutFunc} />
            <h1>Create a Meal Plan (Meal Plan Form)</h1>
        </>
    )
}

export default CreateMealPlan