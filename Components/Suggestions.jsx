import styles from "../styles/Suggestions.module.css"
import Image from "next/image"
import axios from "axios"
import { useEffect, useState } from "react"



export default function Suggestions() {
  const [user,setUser] = useState("")

  useEffect(()=> {
    const getUsers = async()=> {
        const res = await axios.get("http://localhost:3000/api/User/users")
        console.log(res.data);
        setUser(res.data)
    }
    getUsers()
  },[])



  return (
    <div className={styles.suggestionContainer}>
    <p>Friends</p>
    {user && user.map((u)=> (
      <p key={u._id}>{u.username}</p>
    ))}

    <Image src="/img/js.png" alt="javascript" height="200" width="150" />

    
    </div>
  )
}

// export async function getServerSideProps() {
//   const res = await axios.get("http://localhost:3000/api/User/users")
//   console.log(res.data);
//   return {
//     props: {
//       users:res.data
//     },
//   }
// }
