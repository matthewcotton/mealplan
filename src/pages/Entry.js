// the entry page is found on the domain address
// the entry page lets users create an account and login
import EntryTabs from '../components/Entry/EntryTabs'

let Entry = (props) => {

    return (
        <>
            <EntryTabs apiClient={props.apiClient}/>
        </>
    )
}

export default Entry