import { Link } from 'react-router-dom'
let MealPlanSuccessModal = ({ showModal, closeModal }) => {
    return (
        <section style={showModal ? { display: "flex" } : { display: "none" }} className="meal-plan-success-bg">
            <section className="p-5 meal-plan-success-modal">
                <svg onClick={closeModal} height="20px" width="20px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" className="close-icon svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="#000" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
                <svg height="4rem" width="4rem" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" className="svg-inline--fa fa-check-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#32CD32" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                <h3 className="my-4">Meal Plan Created</h3>
                <Link to="/user/meal-plans">
                    <button className="button-main">View Meal Plans</button>
                </Link>
            </section>
        </section>
    )
}
export default MealPlanSuccessModal