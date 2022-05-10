import axios from "axios"
import { NEXT_URL } from "../url";


export default function Hello({users}){
  console.log(users);
  return (
    <div>Hello page</div>
  )
}

export async function getServerSideProps() {
  const res = await axios.get( NEXT_URL +"/api/User/users")
  console.log(res.data);
  return {
    props: {
      users:res.data
    },
  }
}


