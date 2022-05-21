
function UserProfile({user}) {
    console.log(user);
  
     
  
    return (
      <div>
      {user ? 
      <p>{user.username}</p>
      :<p>no User</p>
      }
        
      </div>
    )
  }
  
  export default UserProfile