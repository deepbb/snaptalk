import { createContext , useReducer } from "react"
import UserReducer from "./userReducer"

const USER_STATE = {
    users:null,
    isFetching:false,
    error:false
}

export const UserContext = createContext(USER_STATE)

export const UserContextProvider = ({ children })=> {
    const [ state, dispatch] = useReducer(UserReducer,USER_STATE)
   

    return (
        <UserContext.Provider value={{
            users:state.users,
            isFetching:state.isFetching,
            error:state.error,
            dispatch,
        }}>
         {children}

        </UserContext.Provider>
    )
}