import React from "react";
import Layout from "./Layout";

const AdminDashboard=(props:any)=>{
    return(<><Layout {...props} /></>)
}

export default React.memo(AdminDashboard);