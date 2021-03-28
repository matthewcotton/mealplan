import React, {useEffect} from 'react'
import SideNavBar from '../../components/global/SideNavBar'
import {useParams} from 'react-router-dom'
import {Container} from 'react-bootstrap'

let SingleMealPlan = ({apiClient, logOutFunc}) => {
    let {id} = useParams()
    

    return (
        <>
            <SideNavBar logOut={logOutFunc} />
            <Container>
                <h1>Single Meal Plan</h1>
            </Container>
        </>
    )
}
export default SingleMealPlan