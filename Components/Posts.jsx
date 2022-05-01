import Image from "next/image"

const Posts = ({post}) => {
    console.log(post);
  return (
    <div>
    <Image src={post.img} alt="" width="250" height="250" />
    <p>{post.desc}</p>
    <p>{post.likes.length} likes</p>
    
    
    
    </div>
  )
}

export default Posts