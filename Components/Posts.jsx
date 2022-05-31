import axios from "axios";
import Image from "next/image"
import Link from "next/link";
import styles from "../styles/Posts.module.css"
import { useContext, useState,useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import {NEXT_URL} from "../url"

const Posts = ({post}) => {
  const {user} = useContext(AuthContext)
    console.log(post);
    const[like,setLike] = useState(post.likes.length)
    const [isLike,setisLike] = useState(false)
    console.log(like);

     // eslint-disable-next-line react-hooks/exhaustive-deps
     const currentUser = {
      userId: user && user._id
    }

    console.log(currentUser);
    useEffect(()=> {
      setisLike(post.likes.includes(currentUser))

    },[currentUser,post.likes])


   

  const clickhandler = async ()=> {
    try {
      const res = await axios.post(NEXT_URL +`/api/Likes/${post._id}`,currentUser)
      console.log(res.data);
      
    } catch(err) {
      console.log(err);
    }
    setLike(isLike && like +1)
      setisLike(!isLike)
    
  }

   
  return (
    <div className={styles.postWrapper}>
    <div>
    <div className={styles.profile}>
    {user && 
    <Link href={`/Profile/${post.userId}`} passHref>
    <h3 className={styles.name}>{post.username}</h3>
    </Link>
    }
    {user &&
    <Link href={`/Timeline/${post.userId}`} passHref>
    <button className={styles.timelinebtn}>Timeline</button>
    </Link>
    }
    </div>
    <p>{post.username}</p>
    <p className={styles.postdesc}>{post.desc}</p>
    <Image className={styles.postImage} src={post.img} alt="" width="250" height="250" />
    <div className={styles.likes}>
    { user &&
    <>
    <span onClick={clickhandler}> 
    <Image className={styles.likeImg} src="/img/image.png" alt="javascript" height="25" width="25" />
     </span>
    <span>{like} likes</span>
    </> }
    </div>
    </div>
    </div>
  )
}

export default Posts