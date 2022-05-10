import { useContext, useState,useRef } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import {NEXT_URL} from "../url"

const Share = () => {
    const { user } = useContext(AuthContext)
    const [desc,setDesc] = useState()
    console.log(user);
    const [file,setFile] = useState(null)

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
                userId:user._id,
                desc,
                img: url,
              };

            const res = await axios.post (NEXT_URL + `/api/Post/${user.id}` , newPost)
            console.log(res);
 } catch (err) {
     console.log(err);
 }

    }

  return (
    <div>
         <form className="shareBottom" onSubmit={clickHandler} >
                <label htmlFor="file" className="shareOption">

                 <span className="shareText">photo/video</span>
                 <input type="file" id="file" accept=".jpeg,.png,.jpg" onChange={(e)=>setFile(e.target.files[0])}/>
   
                </label>
                <input type="text" onChange={(e)=>setDesc(e.target.value)} />

   
                <button className="shareButton" type="submit">Share</button> 

            </form>
    </div>
  )
}

export default Share