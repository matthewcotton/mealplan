// the entry page is found on the domain address
// the entry page lets users create an account and login
import { Redirect } from 'react-router-dom'
import EntryTabs from '../components/Entry/EntryTabs'

let Entry = (props) => {
    return props.isLoggedIn ? (<Redirect to={{ pathname: "/user" }} />) : (<EntryTabs logInFunc={props.logInFunc} apiClient={props.apiClient}/>)
}

export default Entry