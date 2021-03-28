import SideNavBar from '../../components/global/SideNavBar'
import {useParams} from 'react-router-dom'
import {Container} from 'react-bootstrap'

let SingleMealPlan = (props) => {
    let {id} = useParams()
    console.log(id)

    return (
        <>
            <SideNavBar logOut={props.logOutFunc} />
            <Container>
                <h1>Single Meal Plan</h1>
            </Container>
        </>
    )
}
export default SingleMealPlan