// CreateRecipe is found at /user/create-recipe
// this page has the form to create a recipe
 Add-Recipe
import React from 'react';
import AddRecipe from '../../components/AddRecipe';

import SideNavBar from '../../components/global/SideNavBar'
 main

let CreateRecipe = (props) => {
    return (
        <>
 Add-Recipe
            <AddRecipe />

            <SideNavBar logOut={props.logOutFunc}/>
            <h1>Create Recipe (Recipe Form)</h1>
 main
        </>
    )
}
export default CreateRecipe