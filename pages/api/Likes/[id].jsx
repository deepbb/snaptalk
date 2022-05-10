import dbConnect from "../../../db/Mongo";
import Post from "../../../models/Post"

export default async function handler (req,res) {
    const {method,
        query:{id},
    } = req;

    await dbConnect()

    if(method === "POST") {
        try {
            const post = await Post.findById(id)
            if(!post.likes.includes(req.body.userId)) {
              await  post.updateOne({$push:{likes:req.body.userId}})
                res.status(200).json("you liked the post")
            } else {
               await post.updateOne({$pull:{likes:req.body.userId}})
                res.status(200).json("you disliked the post")
            }
        }  catch (err) {
            res.status(500).json(err)
    
        }
    }
}