import Cross from '../../assets/icons/times-solid.svg';

let InfoModal = ({ show, close }) => {
    return (
        <section style={show ? { display: "block" } : { display: "none" }} className="entry-info-modal">
            <img onClick={close} alt="close" src={Cross} />
            <h3>How Recipe Planner Works</h3>
            <section>
                <div className="mt-3">
                    <h1>01</h1>
                    <h4>Create Account</h4>
                    <p>Sign up with a username and password to create your account</p>
                </div>
                <div className="mt-3">
                    <h1>02</h1>
                    <h4>Add Recipes</h4>
                    <p>Add your favourite recipes to your account to include in your meal plans</p>
                </div>
                <div className="mt-3">
                    <h1>03</h1>
                    <h4>Create Meal Plans</h4>
                    <p>Create meals plans for up to two weeks with some of your favourite recipes</p>
                </div>
            </section>
        </section>

    )
}
export default InfoModal