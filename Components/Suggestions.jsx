import styles from "../styles/Suggestions.module.css"
import Image from "next/image"
import { useState } from "react";



const Suggestions = ({posts})=> {



 





  return (
    <div className={styles.suggestionContainer}>
    <h3>Friends Posts</h3>
    {posts && posts.map((post)=> (
      <li className={styles.listItems} key={post._id}>{post.username}</li>
    ))}
   

    <Image src="/img/social.png" alt="javascript" height="300" width="300" />

    
    </div>
  )
}

export default Suggestions


