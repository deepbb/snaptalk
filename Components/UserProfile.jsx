
function UserProfile({user}) {

  console.log(user);
  
     
  
    return (
      <div>
      {user ? 
      <p>{user.username}</p>
      :<p>no User</p>
      }
  
      {user&&  
      <>
        <p>{user.email}</p>
        <p>{user.followers.length}</p>
        </>
      
       }
  
        
      </div>
    )
  }
  
  export default UserProfile