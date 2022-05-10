import React, { useContext ,useEffect } from 'react'
import { AuthContext } from '../Context/AuthContext'

export default function Header () {
  const {user} = useContext(AuthContext)
 console.log(user);
  user ? console.log(user.username) : console.log("hello user");
  
  return (
    <div>Header component
    {user ? 
    <p>hello {user.username}</p> : 
    <p>Helo User</p>
    }
    
    </div>
  )
}
