import Image from "next/image"
import Link from "next/link";
import styles from "../styles/UserProfile.module.css"
import Profile from "../public/img/Profile.png"

function UserProfile({user}) {
  console.log(user);

   

  return (
    <div className={styles.userProfile}>
    <div className={styles.profileCard}>
    <div className={styles.profile}>
    {user && user.profilePicture ?
      <Image className={styles.profileimage} src={user.profilePicture} alt="image" width="200" height="200" /> :
      <Image className={styles.profileimage} src={Profile} alt="No image" width="200" height="200" />
      }
      {user ? 
    <h1 className={styles.name}>{user.username}</h1>
    :<p>Loading</p>
    }
   
    </div>
    

    {user &&
    <Link href={`/Timeline/${user._id}`} passHref>
    <button className={styles.btnTimeline}>Timeline</button>
    </Link>
    }
    
    {user&&  
    <>
      <h5 className={styles.email}>Email : {user.email}</h5>
      <p>{user.followers.length} Followers</p>
      </>
    
     }
     </div>
     </div>
  )
}

export default UserProfile