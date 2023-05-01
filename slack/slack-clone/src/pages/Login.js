import React from 'react'
import "./Login.css"
import { Button } from '@mui/material'
import {auth, provider} from "../firebase"
import {actionTypes} from "../reducer"
import { useStateValue } from '../StateProvider'
function Login() {

    const [state, dispatch] = useStateValue();
    const signIn = (e) =>{
        auth.signInWithPopup(provider)
            .then((result)=>{
                console.log(result)
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch((error)=>{
                alert(error.message)
            })
    }
    return (
        <div className = "login">
            <div className="login-container">
                <img src="https://helios-i.mashable.com/imagery/articles/047UsVLCrupUmmsuitpn1nw/hero-image.fill.size_800x450.v1623374965.png" alt="" />
                <h1>Sign in to slack Clone</h1>
                <p>Hi my name is sam</p>
                <Button onClick = {signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login
