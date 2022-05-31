import axios from "axios"
import { useEffect, useState } from "react";
import AllUsers from "../Components/AllUsers";
import { NEXT_URL } from "../url";


export default function Hello({users}){


  return (
    <div>
    {users && users.map((user ,index)=> (
      <AllUsers key={index} users={user} />
    ))}
    
    Hello page</div>
  )
}

export async function getServerSideProps() {
  const res = await axios.get(NEXT_URL + "/api/User/users")
  console.log(res);
  return {
    props: {
      users:res.data
    },
  }
}


