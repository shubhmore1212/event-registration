import React from "react";

import Layout from "pages/Organizer/CreateEvent/components/Layout";

interface IProps {
    initialValues: any;
    onSubmit: any;
  }

const UpdateEventFormContainer=(props:IProps)=>{
    return(<Layout {...props}/>)
}

export default React.memo(UpdateEventFormContainer);