var bcrypt = require('bcryptjs');
import User from "../../../models/User"
import dbConnect from '../../../db/Mongo';

export default async function handler (req,res) {
    const {method} = req;

    await dbConnect()

    if(method === "POST") {
        try {
            // const salt = await bcrypt.genSalt(10)
            const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password,salt)

        const user = await User.create({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword
        }) 
        res.status(200).json(user)
        } catch(err) {
            res.status(500).json(err)
        }
    }
}