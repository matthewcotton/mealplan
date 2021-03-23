// the account page is found at /user/account
// the account page will show username and password data
// the account page will show activity data about the account
// user can change their username/password
import SideNavBar from '../components/global/SideNavBar'
let Account = (props) => {
    return (
        <>
            <SideNavBar logOut={props.logOutFunc} />
            <h1>Account Page</h1>

        </>
    )
}

export default Account