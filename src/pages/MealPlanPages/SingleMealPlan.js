// SingleMealPlan is found at /user/meal-plans/:id
// this page will show all the recipes in a meal plan by day with links to each individual recipe page
import SideNavBar from '../../components/global/SideNavBar'
let SingleMealPlan = (props) => {
    return (
        <>
            <SideNavBar logOut={props.logOutFunc} />
            <h1>Single Meal Plan</h1>
        </>
    )
}
export default SingleMealPlan