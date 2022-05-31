import { useContext, useState,useRef } from "react";
import { AuthContext } from "../Context/AuthContext";
import styles from "../styles/Share.module.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Image from "next/image"
import axios from "axios";
import {NEXT_URL} from "../url"

const Share = () => {
    const { user } = useContext(AuthContext)
    const [desc,setDesc] = useState()
    console.log(user);
    const [file,setFile] = useState(null)

    const handleEvent = (event)=> {
      event.stopPropagation()
    }

    const clickHandler =async (e)=> {
        e.preventDefault()
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "uploads");
        try {
            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dzthzqctp/image/upload",data)
            console.log(uploadRes.data);
            const { url } = uploadRes.data
            const newPost = {
                username:user.username,
                userId:user._id,
                desc,
                img: url,
              };

            const res = await axios.post (NEXT_URL +`/api/Post/${user.id}` , newPost)
            console.log(res);
            window.location.replace("/")
 } catch (err) {
     console.log(err);
 }

    }

  

  return (
    <div className={styles.shareContainer}>
    <div className={styles.profilepic}>
    <div className={styles.imgContainer}>
    {user && user.profilePicture ?
      <Image className={styles.profileimage} src={user.profilePicture} alt="image" width="50" height="50" /> :
      <Image className={styles.profileimage} src="/img/profile.png" alt="No image" width="50" height="50" />
      }
      </div>
         <h5 className={styles.user}>{user.username}</h5>
        </div>
         <form className={styles.formElements} onSubmit={clickHandler} >
               





                <input className={styles.inputText} type="" onChange={(e)=>setDesc(e.target.value)} placeholder="What are you upto?" />

                
                <label htmlFor="file" className={styles.imgInput}>
                <input onClick={handleEvent} type="file" id="file" accept=".jpeg,.png,.jpg" onChange={(e)=>setFile(e.target.files[0])}/>

                </label>
                <div>
                <PermMediaIcon htmlColor="orange" className={styles.shareMedia} />
                <span className="">photo/video</span>



                <LocalOfferIcon htmlColor="green" className={styles.shareMedia} />
                <span className="shareText">Tag a Friend</span>

                <LocationOnIcon htmlColor="blue" className={styles.shareMedia} />
                <span className="shareText">Location</span>



                <EmojiEmotionsIcon htmlColor="red" className={styles.shareMedia} />
                <span className="shareText">Feelings</span>

                </div>



                {file ?  
                <button className={styles.shareBtn} type="submit">Share</button>  : 
                <button style={{cursor:"not-allowed"}} className={styles.shareBtn} type="submit">Share</button> }
                

            </form>
    </div>
  )
}

export default Share