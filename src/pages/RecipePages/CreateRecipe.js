// CreateRecipe is found at /user/create-recipe
// this page has the form to create a recipe
import SideNavBar from '../../components/global/SideNavBar'

let CreateRecipe = (props) => {
    return (
        <>
            <SideNavBar logOut={props.logOutFunc}/>
            <h1>Create Recipe (Recipe Form)</h1>
        </>
    )
}
export default CreateRecipe