import React from "react";

import AdminDashboard from "./components";

import useAuth from "../../../hooks/useAuth";

const AdminContainer=()=>{
    const {auth} =useAuth();
    
    return(<AdminDashboard user={auth?.user}/>)
}

export default React.memo(AdminContainer);