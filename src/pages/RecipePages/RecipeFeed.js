// RecipeFeed can be found at /user/recipes
// this page will show a list of recipes that have been created
import SideNavBar from '../../components/global/SideNavBar'
let RecipeFeed = (props) => {
    return (
        <>
            <SideNavBar logOut={props.logOutFunc} />
            <h1>Recipe Feed</h1>
        </>
    )
}
export default RecipeFeed