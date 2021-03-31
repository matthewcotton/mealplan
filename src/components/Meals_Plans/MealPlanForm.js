import React, { useState } from 'react'
import Loader from '../../assets/images/loading-gif.gif'

let MealPlanForm = ({ apiClient, openModal }) => {
    const [mealPlan, setMealPlan] = useState({
        title: "",
        duration: 7,
        start_date: ""
    })
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [formError, setFormError] = useState("")
    // duration should be a number
    let handleFormSubmit = (e) => {
        e.preventDefault()
        setButtonDisabled(true)
        apiClient.createMealPlan(mealPlan)
            .then(() => {
                openModal()
                setButtonDisabled(false)
            })
            .catch(err => {
                setButtonDisabled(false)
                setFormError("Unable to create your meal plan. Please try again later")
                console.error(err.response)
            })
            .finally(() => {
                e.target.title.value = "";
                e.target.duration.value = "";
                e.target.start_date.value = ""
            })
    }

    let handleFormChange = (e) => {
        setMealPlan({
            title: e.currentTarget.title.value,
            duration: parseInt(e.currentTarget.duration.value),
            start_date: e.currentTarget.start_date.value
        })
    }

    return (
        <>
            <section className="meal-plan-form">
                <div className="meal-plan-form-title">
                    <h1>Create a Meal Plan</h1>
                </div>
                <form className="meal-plan-form-main" onChange={(e) => handleFormChange(e)} onSubmit={(e) => handleFormSubmit(e)}>
                    <article className="mb-5">
                        <div className="mb-3 meal-plan-form-number">
                            <h1>1</h1>
                        </div>
                        <div>
                            <input required type="text" name="title" id="title" placeholder="Meal Plan Title" autoFocus />
                        </div>
                    </article>
                    <article className="mb-5">
                        <div className="mb-3 meal-plan-form-number">
                            <h1>2</h1>
                        </div>
                        <div>
                            <h4>How long would you like your meal plan to last?</h4>
                            <div className="meal-plan-form-duration-picker mt-3">
                                <div className="mr-5">
                                    <label htmlFor="7">1 Week</label>
                                    <input defaultChecked type="radio" auto="true" name="duration" value="7" />
                                </div>
                                <div>
                                    <label htmlFor="14">2 Weeks</label>
                                    <input type="radio" name="duration" value="14" />
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="mb-5">
                        <div className="mb-3 meal-plan-form-number">
                            <h1>3</h1>
                        </div>
                        <div>
                            <h4>When would you like your meal plan to start?</h4>
                            <input required type="date" name="start_date" className="mt-3" />
                        </div>
                    </article>
                    <button disabled={buttonDisabled} type="submit" className="button-main button-orange">{buttonDisabled ? <img style={{ height: "2rem" }} src={Loader} alt="...creating" /> : "Create Meal Plan"}</button>
                    <small className="mt-4 d-block text-danger">{formError}</small>
                </form>
            </section>
        </>
    )
}
export default MealPlanForm