import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from '../firebase'
import './Login.css'

const Login = () => {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message)) 
    }


    return (
        <div className="login">
            <div className="login__telegram">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/600px-Telegram_logo.svg.png" alt=""/>

                <h1>Telegram</h1>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
