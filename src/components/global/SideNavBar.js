import LogoWhite from '../../assets/images/logo-white.png'


let SideNavBar = () => {
    return (
        <section className="side-nav-bar">

            <img src={LogoWhite} alt="recipe planner logo" />
            <nav>
                <article>
                    <div className="d-flex justify-content-between align-items-center">
                        <p>RECIPES</p>
                        <svg width="19" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z" fill="#ffffff" fill-rule="nonzero" /></svg>
                    </div>
                    <section className="nav-menu">
                        <p>Add Recipe</p>
                        <p className="mt-2">View Recipes</p>
                    </section>
                </article>
                <article>
                    <div className="d-flex justify-content-between align-items-center">
                        <p>MEAL PLANS</p>
                        <svg width="19" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z" fill="#ffffff" fill-rule="nonzero" /></svg>
                    </div>
                </article>
                <article>
                    <p>RECIPES</p>
                </article>
            </nav>
            <button className="button-main button-side-nav">Logout</button>
        </section>
    )
}
export default SideNavBar