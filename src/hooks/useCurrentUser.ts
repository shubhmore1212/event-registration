import {useState,useEffect} from "react"
import axios from "axios"

export const useCurrentUser=(userId:string)=>{
    const [user,setUser]=useState<any>({});

    useEffect(()=>{
        (async ()=>{
            const response=await axios.get(`https://reqres.in/api/users/${userId}`);
            setUser(response.data);
        })();
    },[])

    return user;
}