import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import styles from "../styles/Allposts.module.css"
import Posts from './Posts';
import Share from "./Share";

const Allposts = ({posts}) => {
  const { user } = useContext(AuthContext)
    console.log(posts);



  return (
    <div className={styles.postContainer}>
     {user &&
      <Share /> }
    <div className={styles.g}>
    {posts.map((post)=> (
        <Posts key={post._id} post={post}/>

    ))
    }
    </div>
    </div>
  )
}

export default Allposts