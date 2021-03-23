// MealPlanFeed can be found at /user/meal-plans
// this page will show a list of meal plans that have been created
import SideNavBar from '../../components/global/SideNavBar'

let MealPlanFeed = (props) => {
    return (
        <>  <SideNavBar logOut={props.logOutFunc} />
            <h1>Meal Plan Feed</h1>
        </>
    )
}
export default MealPlanFeed