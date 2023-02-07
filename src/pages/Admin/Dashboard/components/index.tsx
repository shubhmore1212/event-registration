import React from "react";

const AdminDashboard=({user}:any)=>{
    return(<h1>Hi, {user?.first_name} !</h1>)
}

export default React.memo(AdminDashboard);