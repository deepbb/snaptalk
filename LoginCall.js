import axios from "axios";
import { NEXT_URL } from "./url";
import { LoginStart, LoginSuccess, LoginFailure } from "./Context/AuthActions";


export const LoginCall = async (usercredentials, dispatch) => {
  dispatch(LoginStart());
  try {
    const res = await axios.post(NEXT_URL + "/api/auth/Login",usercredentials);
    console.log(res);
    dispatch(LoginSuccess(res.data));
  } catch (err) {
    dispatch(LoginFailure(err))
  }
};