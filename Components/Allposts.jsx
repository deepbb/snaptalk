import styles from "../styles/Allposts.module.css"
import Posts from './Posts';

const Allposts = ({posts}) => {
    console.log(posts);
  return (
    <div className={styles.postContainer}>
    {posts.map((post)=> (
        <Posts key={post._id} post={post}/>

    ))
    }
    </div>
  )
}

export default Allposts