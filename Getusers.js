import axios from "axios";
import { GetAllUsers,GetUserFailed } from "./Context/UserAction";

export const Getusers = async(dispatch)=> {
    dispatch(GetAllUsers())
    try {
        const res = await axios.get("http://localhost:3000/api/User/users");
        console.log(res);
        dispatch(GetAllUsers(res.data));
      } catch (err) {
        dispatch(GetUserFailed(err))
      }
}

