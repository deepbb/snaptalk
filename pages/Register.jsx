import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'
import styles from "../styles/Login.module.css"
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
                const res = await axios.post(NEXT_URL + "/api/auth/Register",user)
                console.log(res);
                router.push("/Login")
            } catch(err) {
                console.log(err);
            }
        }
    }


  return (
    <div className={styles.logincontainer}>
     <div className={styles.login}>
        <div className={styles.loginText}>
            <h1 className={styles.loginTitle}>SnapTalk</h1>
            <h2>Lets connect to the world with SnapTalk</h2>
        </div>
        <div>
        <h2 className={styles.text}>Register Your Account</h2>
        <div className={styles.loginForm}>
        <form className={styles.loginInputs}  onSubmit={clickhandler}>
            <input className={styles.loginEmail} type="text" ref={username} placeholder="Enter your Name" required />
            <input className={styles.loginEmail} type="text" ref={email} placeholder="Enter email" required />
            <input className={styles.loginPassword} type="password" ref={password} placeholder="Enter password" required />
            <input className={styles.loginPassword} type="password" ref={passwordAgain} placeholder="Enter password again" required />
            <button className={styles.loginbtn}>Register</button>



        </form>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Register