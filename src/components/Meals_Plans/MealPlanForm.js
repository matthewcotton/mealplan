let MealPlanForm = () => {
    return (
        <section className="meal-plan-form">
            <div className="meal-plan-form-title">
                <h1>Create a Meal Plan</h1>
            </div>
            <section className="meal-plan-form-main">
                <article>
                    <div className="meal-plan-form-number">
                        <h1>1</h1>
                    </div>
                    <div>
                        <input type="text" name="title" id="title" placeholder="Meal Plan Title" autoFocus/>
                    </div>
                </article>
                <article>
                    <div className="meal-plan-form-number">
                        <h1>2</h1>
                    </div>
                    <div>
                        <h4>How long would you like your meal plan to last?</h4>
                        <form className="meal-plan-form-duration-picker">
                            <div className="mr-5">
                                <label for="1 week">1 Week</label>
                                <input type="radio" name="duration" value="7" />
                            </div>
                            <div>
                                <label for="2 week">2 Weeks</label>
                                <input type="radio" name="duration" value="14" />
                            </div>
                        </form>
                    </div>
                </article>
                <article>
                    <div className="meal-plan-form-number">
                        <h1>3</h1>
                    </div>
                    <div>
                        <h4>When would you like your meal plan to start?</h4>
                        <form>
                            <input type="date" name="start_date" />
                        </form>
                    </div>
                </article>
            </section>
        </section>
    )
}
export default MealPlanForm