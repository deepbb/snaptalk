import axios from "axios"
import { useEffect, useState } from "react";



function AllUsers({users}) {

  console.log(users);

    // const[search,setSearch] = useState("")

    // const filteredUser = users.filter(user => {
    //     return (
    //         user.username.toLowerCase().includes(search.toLocaleLowerCase())
    //     )
    // }) 

    // const handleChange = (e) => {
    //     setSearch(e.target.value)
    // }

  return (
    <div>
    {/* <input type="text" onChange={handleChange}  /> */}
    {/* {users.map((user)=> (
        <li key={user._id}>{user.username}</li>
    ))} */}

    {/* {filteredUser && filteredUser.map((user)=> (
      <>
        <li key={user._id}>{user.username}</li>
        <p>{user.email}</p>
        </>
    ))} */}

    <li>{users.username}</li>

    </div>
  )
}

export default AllUsers