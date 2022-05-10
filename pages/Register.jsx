import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'
import { useRef } from "react"
import {NEXT_URL} from "../url"

const Register = () => {
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const passwordAgain = useRef()
    const router = useRouter()

    const clickhandler = async (e)=> {
        e.preventDefault()
        if(password.current.value != passwordAgain.current.value) {
            alert("password doesnt match")
        } else {
            const user = {
                username : username.current.value,
                email : email.current.value,
                password: password.current.value,
                passwordAgain: passwordAgain.current.value

            }
            try {
                const res = await axios.post( NEXT_URL +"/api/auth/Register",user)
                console.log(res);
                router.push("/Login")
            } catch(err) {
                console.log(err);
            }
        }
    }


  return (
    <div>
        <form onSubmit={clickhandler}>
            <label>Enter your name</label>
            <input type="text" ref={username} placeholder="enter your Name" required />
            <label>Enter email</label>
            <input type="text" ref={email} placeholder="enter email" required />
            <label>Enter password</label>
            <input type="password" ref={password} placeholder="enter password" required />
            <label>Enter password Again</label>
            <input type="password" ref={passwordAgain} placeholder="enter password again" required />
            <button>Register</button>



        </form>
    </div>
  )
}

export default Register