import React, { useState, useEffect } from 'react';
import './Api.css';
import Loading from './Loading'
import Users from './Users';

const Api = () => {
    const [user, setUser] = useState([])
    const [loading, setLoading] =useState(true)

    const getuser = async () => {
        try {
            const response = await fetch("https://api.github.com/users")
            setUser(await response.json());
            setLoading(false)
            
        } catch (error) {
            console.log("Error")
        }
    };
    console.log(user)

    useEffect(() => {
        getuser()

    }, []);
    if(loading){
        return <Loading />
    }

    return(
        <>
            <Users user={user}/>
        </>          
  )
}
export default Api;