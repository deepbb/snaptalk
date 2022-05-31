import React, { useContext } from 'react'
import styles from "../styles/Footer.module.css"
import { AuthContext } from '../Context/AuthContext'

const Footer = () => {
  const {user} = useContext(AuthContext)
  console.log(user);
  return (
    <div className={styles.footerContainer}>
      <h5 className={styles.footerText}>Designed and developed by Pradeep</h5>
    </div>
  )
}

export default Footer 