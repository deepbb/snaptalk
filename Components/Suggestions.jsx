import styles from "../styles/Suggestions.module.css"
import Image from "next/image"
import axios from "axios"



export default function Suggestions({users}) {



  return (
    <div className={styles.suggestionContainer}>
    <p>Friends</p>
    {users && users.map((u)=> (
      <p key={u._id}>{u.username}</p>
    ))}

    <Image src="/img/js.png" alt="javascript" height="200" width="150" />

    
    </div>
  )
}


