import dbConnect from "../../../db/Mongo";
import User from "../../../models/User"

export default async function handler (req,res) {
    const {method,
        query:{id},
    } = req;

    await dbConnect()

    if(method === "POST") {
        try{
            const user = await User.findById(id)
            const currentUser = await User.findById(req.body.userId)
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push: {followers:req.body.userId}})
                await currentUser.updateOne({$push: {following:req.body.userId}})
                res.status(200).json("user has been followed")
            } else {
                res.status(403).json("you are already following this user")
            }
            

        } catch (err) {
            res.status(500).json(err)
        }

    } else {
        res.status(500).json("You cannot follow yourself")
    }

}