export const GetAllUsers = (users)=> ({
    type:"GET_ALLUSERS",
    payload:users
})

export const GetUserFailed = (error)=> ({
    type:"GET_USERFAILED",
    payload:error
})