// CreateMealPlan can be found at /user/create-meal-plan
// this page features the create meal plan form
import React, { useState } from 'react'
import SideNavBar from '../../components/global/SideNavBar';
import { Container } from 'react-bootstrap'
import MealPlanForm from '../../components/Meals_Plans/MealPlanForm';
import MealPlanSuccessModal from '../../components/Meals_Plans/MealPlanSuccessModal'

let CreateMealPlan = (props) => {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <SideNavBar logOut={props.logOutFunc} />
            <MealPlanSuccessModal showModal={showModal} closeModal={() => setShowModal(false)} />
            <Container>
                <MealPlanForm apiClient={props.apiClient} openModal={() => setShowModal(true)} />
            </Container>
        </>
    )
}

export default CreateMealPlan