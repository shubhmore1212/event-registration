import React from "react";

import Layout from "./Layout";

const CreateEventComponent=(props:any)=>{
    return(<Layout {...props}/>)
}

export default React.memo(CreateEventComponent);