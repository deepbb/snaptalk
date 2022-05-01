import axios from "axios"


export default function Hello({users}){
  console.log(users);
  return (
    <div>Hello page</div>
  )
}

export async function  getServerSideProps () {
  const res = await axios.get("http://localhost:3000/api/User")
  console.log(res.data);
  return {
    props: {
      users:res.data
    },
  }
}

