import { Route, Redirect } from 'react-router-dom'

let ProtectedRoute = ({ component: Component, isLoggedIn, ...rest}) => {

    return (
        <Route render={() => isLoggedIn ?
            (<Component {...rest} />) : (<Redirect to={{ pathname: "/" }} />)
        } />
    )
}
export default ProtectedRoute