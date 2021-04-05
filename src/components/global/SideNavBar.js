import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import LogoWhite from '../../assets/images/logo-white.png'
import UserIcon from '../../assets/icons/user-icon.svg'
import { useLoggedInUser } from '../../assets/loggedInUser.context'

let SideNavBar = (props) => {
    const [navStatus, setNavStatus] = useState({ recipes: false, meal_plans: false })
    const [showNav, setShowNav] = useState(false)
    const user = useLoggedInUser();

    return (
        <>
            {/* toggle hamburger element to close and open side navbar */}
            <div onClick={() => setShowNav(true)} id="side-nav-toggle" className="d-flex align-items-center justify-content-center">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
            </div>
            {/* side bar navigation */}
            <section style={showNav ? { left: "0" } : { left: "-100%" }} className="side-nav-bar">
                <svg onClick={() => setShowNav(false)} id="nav-close" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" className="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="#fff" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
                <Link to="/user"><img id="nav-logo" src={LogoWhite} alt="recipe planner logo" /></Link>
                <div className="nav-user-tag my-4 d-flex align-items-center">
                    <img src={UserIcon} alt="Profile Icon" />
                    <p>{user.username}</p>
                </div>
                <nav>
                    <article className="mb-4">
                        <div onClick={() => setNavStatus({ recipes: !navStatus.recipes })} className="d-flex justify-content-between align-items-center">
                            <p>Recipes</p>
                            <svg style={navStatus.recipes ? { transform: "scaleY(-1)" } : { transform: "scaleY(1)" }} width="19" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z" fill="#ffffff" fillRule="nonzero" /></svg>
                        </div>
                        <section style={navStatus.recipes ? { display: "block" } : { display: "none" }} className="nav-menu">
                            <Link style={{ textDecoration: 'none' }} to="/user/create-recipe"><p>Create Recipe</p></Link>
                            <Link style={{ textDecoration: 'none' }} to="/user/recipes"><p className="mt-2">View Recipes</p></Link>
                        </section>
                    </article>
                    <article className="mb-4">
                        <div onClick={() => setNavStatus({ meal_plans: !navStatus.meal_plans })} className="d-flex justify-content-between align-items-center">
                            <p>Meal Plans</p>
                            <svg style={navStatus.meal_plans ? { transform: "scaleY(-1)" } : { transform: "scaleY(1)" }} width="19" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z" fill="#ffffff" fillule="nonzero" /></svg>
                        </div>
                        <section style={navStatus.meal_plans ? { display: "block" } : { display: "none" }} className="nav-menu">
                            <Link style={{ textDecoration: 'none' }} to="/user/create-meal-plan"><p>Create Meal Plan</p></Link>
                            <Link style={{ textDecoration: 'none' }} to="/user/meal-plans"><p className="mt-2">View Meal Plans</p></Link>
                        </section>
                    </article>
                    <article>
                        <Link style={{ textDecoration: 'none' }} to="/user/account"><p>Account</p></Link>
                    </article>
                </nav>
                <button onClick={() => props.logOut()} className="button-main button-side-nav">Logout</button>
            </section>
        </>
    )
}
export default SideNavBar