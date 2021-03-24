// SingleRecipe is found at /user/recipes/:id
// this page will show a single recipe
import SideNavBar from '../../components/global/SideNavBar'
let SingleRecipe = (props) => {
    return (
        <>
            <SideNavBar logOut={props.logOutFunc} />
            <h1>Single Recipe Page</h1>
        </>
    )
}
export default SingleRecipe