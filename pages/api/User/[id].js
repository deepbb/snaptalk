var bcrypt = require('bcryptjs');
import dbConnect from "../../../db/Mongo";
import User from "../../../models/User"
import Post from "../../../models/Post";


export default async function handler(req,res) {
    const {method,
        query:{id},
    } = req;

    await dbConnect()

    if(method === "GET") {
        try{
            const user = await User.findById(id)
            res.status(200).json(user)
        } catch(err) {
            res.status(500).json(err)
        }
    }
    

    if(method === "PUT") {
        if(req.body.userId === id)
         if(req.body.password) {
            const salt = bcrypt.genSaltSync(10);
            req.body.password = bcrypt.hashSync(req.body.password,salt)
            //  const hashedPassword = bcrypt.hashSync(req.body.password,salt)
         }
        try {
            const user = await User.findByIdAndUpdate(id,req.body,{
                $set: req.body,
                new:true
                 
            })
            res.send(200).json(user)
        } catch(err) {
            res.status(500).json(err)
        }
    }
}