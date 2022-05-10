const UserReducer = (state,action) => {
    switch(action.type) {
    case "GET_USERS":
        return {
          users:action.payload,
          isFetching:false,
          error:false
        };
        case "GET_USERFAILED":
          return {
            users:null,
            isFetching:false,
            error:action.payload
          };
          default:
            return state
        }
 
}

export default UserReducer