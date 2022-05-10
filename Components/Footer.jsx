import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

const Footer = () => {
  const {user} = useContext(AuthContext)
  console.log(user);
  return (
    <div>Footer page </div>
  )
}

export default Footer 