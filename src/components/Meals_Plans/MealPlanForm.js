import React, { useState } from 'react'

let MealPlanForm = ({ apiClient }) => {

    const [mealPlan, setMealPlan] = useState({
        title: "",
        duration: undefined,
        start_date: ""
    })
    // duration should be a number
    let handleFormSubmit = (e) => {
        e.preventDefault()
        apiClient.createMealPlan(mealPlan)
            .then((response) => {
                console.log(response)
            })
            .catch(err => {
                console.log(err.response)
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
        <section className="meal-plan-form">
            <div className="meal-plan-form-title">
                <h1>Create a Meal Plan</h1>
            </div>
            <form className="meal-plan-form-main" onChange={(e) => handleFormChange(e)} onSubmit={(e) => handleFormSubmit(e)}>
                <article>
                    <div className="meal-plan-form-number">
                        <h1>1</h1>
                    </div>
                    <div>
                        <input required type="text" name="title" id="title" placeholder="Meal Plan Title" autoFocus />
                    </div>
                </article>
                <article>
                    <div className="meal-plan-form-number">
                        <h1>2</h1>
                    </div>
                    <div>
                        <h4>How long would you like your meal plan to last?</h4>
                        <div className="meal-plan-form-duration-picker mt-3">
                            <div className="mr-5">
                                <label htmlFor="7">1 Week</label>
                                <input type="radio" auto="true" name="duration" value="7" />
                            </div>
                            <div>
                                <label htmlFor="14">2 Weeks</label>
                                <input type="radio" name="duration" value="14" />
                            </div>
                        </div>
                    </div>
                </article>
                <article>
                    <div className="meal-plan-form-number">
                        <h1>3</h1>
                    </div>
                    <div>
                        <h4>When would you like your meal plan to start?</h4>
                        <input required type="date" name="start_date" className="mt-3" />
                    </div>
                </article>
                <button type="submit" className="button-main">Create Meal Plan</button>
            </form>
        </section>
    )
}
export default MealPlanForm