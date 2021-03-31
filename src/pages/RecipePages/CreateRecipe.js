// CreateRecipe is found at /user/create-recipe
// this page has the form to create a recipe
import React from 'react';
import AddRecipe from '../../components/AddRecipe';
import SideNavBar from '../../components/global/SideNavBar';
import { useHistory } from "react-router-dom";

let CreateRecipe = (props) => {
    let history = useHistory()

const changePage = () =>{
    history.push("/user/create-recipe")}
    
    
    return (
        <>
            <AddRecipe apiClient={props.apiClient} changePage={changePage} />
            <SideNavBar logOut={props.logOutFunc}/>
        </>
    )
}
export default CreateRecipe