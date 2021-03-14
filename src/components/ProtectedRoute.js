import { Route, Redirect } from 'react-router-dom'

let ProtectedRoute = ({ component: Component, isLoggedIn }) => {

    return (
        <Route render={(props) => isLoggedIn ?
            (<Component {...props} />) : (<Redirect to={{ pathname: "/" }} />)
        } />
    )
}
export default ProtectedRoute