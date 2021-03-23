import { Route, Redirect } from 'react-router-dom'

let ProtectedRoute = ({ component: Component, isLoggedIn, props}) => {

    return (
        <Route render={() => isLoggedIn ?
            (<Component {...props} />) : (<Redirect to={{ pathname: "/" }} />)
        } />
    )
}
export default ProtectedRoute