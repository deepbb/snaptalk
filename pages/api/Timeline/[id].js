import dbConnect from "../../../db/Mongo";
import Post from "../../../models/Post"
import User from "../../../models/User"

export default async function handler(req,res) {
    const {method,
        query:{id},
    } = req;

    await dbConnect()

    if (method === "GET") {
        try{
            const currentUser = await User.findById(id);
            console.log(currentUser);
            const userPosts = await Post.find({ userId: currentUser._id });
             const friendPosts = await Promise.all(
            currentUser.following.map((friendId) => {
           return Post.find({ userId: friendId });
      })
    );
    res.status(200).json(userPosts.concat(...friendPosts));
        } catch(err) {
            res.status(500).json(err)
        }
    }

}