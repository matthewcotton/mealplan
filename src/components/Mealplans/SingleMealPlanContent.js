import React from 'react'


let SingleMealPlanContent = ({ recipes, apiClient }) => {

    let buildMealPlanFeed = () => {
        recipes.map(recipe => {
            const {day} = recipe
            // make api call to get single recipe data for each recipe
            // make recipe card feed with response data
        })
    }
    
    return (
        <>
            {/* {buildMealPlanFeed()} */}
        </>
    )
}
export default SingleMealPlanContent


// duration: "2"
// end_date: "2021-03-26T20:48:00.563+00:00"
// recipes: (2) [{…}, {…}]
// start_date: "2021-03-24T20:48:00.563Z"
// title: "Test Meal Plan"
// user: ["60492992bab77c41a862e786"]
// __v: 0
// _id: "605ba596d1987f61d4eb845d"