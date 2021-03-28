import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { DateTime } from "luxon";
import SideNavBar from '../../components/global/SideNavBar'
import SingleMealPlanContent from '../../components/Mealplans/SingleMealPlanContent'

let SingleMealPlan = ({ apiClient, logOutFunc }) => {
    const [mealPlanData, setMealPlanData] = useState({})
    let { id } = useParams()
    
    const startDate = DateTime.fromISO(mealPlanData.start_date);
    const endDate = DateTime.fromISO(mealPlanData.end_date);
    
    useEffect(() => {
        apiClient.getSingleMealPlan(id)
            .then(({ data }) => {
                console.log(data)
                setMealPlanData(data)
            })
        .catch(console.error)
        
    }, [id, apiClient, setMealPlanData])

    return (
        <>
            <SideNavBar logOut={logOutFunc} />
            <Container className="mt-5">
                <h1>{mealPlanData.title}</h1>
                <h5>{`${mealPlanData.duration} Days | From ${startDate.toLocaleString()} to ${endDate.toLocaleString()}`} </h5>
                <SingleMealPlanContent recipes={ mealPlanData.recipes} apiClient={apiClient}/>
            </Container>
        </>
    )
}
export default SingleMealPlan