import Image from "next/image"
import Link from "next/link";


const Posts = ({post}) => {
    console.log(post);
  return (
    <div>
    <Image src={post.img} alt="" width="250" height="250" />
    <p>{post.desc}</p>
    <p>{post.likes.length} likes</p>
    {/* <Link href={`/User/${user._id}`} passHref>
    <button>Posts</button>
    </Link> */}
    
    
    
    </div>
  )
}

export default Posts