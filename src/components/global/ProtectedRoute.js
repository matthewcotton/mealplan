import { Route, Redirect } from 'react-router-dom'

let ProtectedRoute = ({ isLoggedIn, children, ...rest}) => {

    return (
        <Route {...rest} render={() => isLoggedIn ?
            (children) : (<Redirect to={{ pathname: "/" }} />)
        } />
    )
}
export default ProtectedRoute