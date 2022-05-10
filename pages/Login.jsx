import { EmailOutlined } from "@mui/icons-material"
import { useContext, useRef, useState } from "react"
import { AuthContext  } from "../Context/AuthContext"
import { LoginCall } from "../LoginCall"
import Link from 'next/link'
import styles from "../styles/Login.module.css"
import { useRouter } from 'next/router';


function Login() {
    const username = useRef()
    const password = useRef()
    const router = useRouter()
    const [error,setError] = useState(false)
    const { user ,isFetching, dispatch } = useContext(AuthContext)
    console.log(user);
    console.log(isFetching);

    const handleClick = async (e)=> {
        e.preventDefault()
        setError(false)
        console.log(username.current.value);

        try {
          await  LoginCall  ({username:username.current.value,password:password.current.value},dispatch)
            router.push("/")

        } catch (err) {
            setError(err)
            setError(true)
        }

        }
    
    return (
        <>
        <div className={styles.logincontainer}>
        <div className={styles.login}>
        <div className={styles.loginText}>
            <h1 className={styles.loginTitle}>SnapTalk</h1>
            <h2>Lets connect to the world with SnapTalk</h2>
        </div>
        <div>
        <h2 className={styles.text}>Login to Your Account</h2>
        <div className={styles.loginForm}>
        <form className={styles.loginInputs} onSubmit={handleClick}>
            <input className={styles.loginEmail} type="text" ref={username} placeholder="Enter Your Email" required />
            <input className={styles.loginPassword} ref={password} type="password" placeholder="Enter Your Password" required />
            {/* <div className="login-btn-container"> */}
            <button type="submit" className={styles.loginbtn}>{isFetching ? "Loading" : "Log In"}</button>
            <span className={styles.loginForgot}>Forgot password?</span>
            </form>
            <Link href="/Register" passHref >
            <button className={styles.regbtn}>Create a New Account</button>
            </Link>
            </div>
            
        </div>
        </div>
        </div>
        </>
    )
}

export default Login
