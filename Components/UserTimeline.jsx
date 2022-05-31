import React from 'react'
import Image from "next/image"
import styles from "../styles/UserTimeline.module.css"


const UserTimeline = ({Timeline}) => {

    console.log(Timeline);
  return (
    <div className={styles.userTimeline}>
                <h3>{Timeline.desc}</h3>
                <Image src={Timeline.img} alt="" width="200" height="200" />
                <span className={styles.likes}> 
                <Image src="/img/image.png" alt="javascript" height="25" width="25" />
                <p>{Timeline.likes.length} Likes</p>
                 </span>
            
    </div>
  )
}

export default UserTimeline