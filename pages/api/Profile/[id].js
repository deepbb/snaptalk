import dbConnect from "../../../db/Mongo";
import Post from "../../../models/Post"
import User from "../../../models/User"

export default async function handler(req,res) {
    const {method,
        query:{id},
    } = req;

    await dbConnect()

    if(method === "GET") {
        try{
            const user = await User.findOne({_id:id})
            const post = await Post.find({userId:user._id})
            res.status(200).json(post)
        } catch(err) {
            res.status(500).json(err)
        }
    }
}