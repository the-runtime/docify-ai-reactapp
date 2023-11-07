import React, {useEffect, useState} from "react";
import {Navigate} from 'react-router-dom';


const AuthMiddleware =  ({children}) => {
    const [authState, setAuthState] = useState(false)
    const [ranAuthCheck, setAuthCheck] = useState(false)

    useEffect(() => {
        checkAuthentication().then(auth => {
            setAuthState(auth)
            setAuthCheck(true)
        })
    }, [])
    if(!ranAuthCheck) {
        return null
    }

    if (!authState) {
        return <Navigate to="/login"/>
    }

    return children
}

async function checkAuthentication(){
    try {
        const resp = await fetch("/api/checkauth", {
            method: 'GET',
            credentials: 'include'
        })
        console.log("Go the data look at this how beautiful ")
        if (resp.ok) {
            const data = await resp.json()
            console.log("Go the data look at this how beautiful "+typeof data.is_authenticated)
            return data.is_authenticated
        }
    } catch (error) {
        console.error(error)
    }

}

export default AuthMiddleware