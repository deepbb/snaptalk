import dbConnect from "../../../db/Mongo";
import User from "../../../models/User";

export default async function handler(req,res) {
    const {method} = req

    await dbConnect()

    if(method === "GET") {
        try{
            const user = await User.find()
            res.status(200).json(user)
        }catch(err) {
            res.status(500).json(err)
        }
    }
}