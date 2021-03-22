// the dashboard is found at /user  
// the dashboard is the first page a user is sent to after logging in
import React from 'react';
import DashboardPage from '../components/DashboardPage';
import SideNavBar from '../components/global/SideNavBar'



let Dashboard = (props) => {

    return (
        <>
            <SideNavBar />
            <DashboardPage />
        </>
    )
}

export default Dashboard