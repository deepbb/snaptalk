import styles from "../styles/Header.module.css"
import React, { useContext ,useEffect } from 'react'
import Link from "next/link";
import { AuthContext } from '../Context/AuthContext'
import { useRouter } from 'next/router'


export default function Header () {
  const {user , dispatch} = useContext(AuthContext)
  const router = useRouter()

  const handleOut = (e)=> {
    e.preventDefault()
    dispatch({type:"LOGOUT"})
    router.push("/Login")
  }


  
 console.log(user);
  user ? console.log(user.username) : console.log("hello user");
  
  return (
    <div className={styles.headerComponent}>
    <div>
    {user ? 
    <h3 className={styles.head}>Welcome   <span className={styles.user}>{user.username}</span></h3> : 
    <h3 className={styles.head}>Hello User Please Login</h3>
    }
    </div>
    <div className={styles.login}>
    {user ? <button className={styles.logBtn} onClick={handleOut}>LOGOUT</button> : 
    <span className={styles.logLink}><Link href="/Login">LOGIN</Link></span>
    }
    </div>
    
    </div>
  )
}
