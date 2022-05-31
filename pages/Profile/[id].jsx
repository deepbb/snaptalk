import axios from 'axios'
import React, {useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import UserProfile from "../../Components/UserProfile"
import { NEXT_URL } from '../../url';

export default function Profile({profile}) {


    console.log(profile);

  const [user,setuser] = useState()


    const router = useRouter()
    const { id } = router.query

    useEffect(()=>{
      const getUser = async ()=> {
        const res = await axios.get(NEXT_URL +`/api/User/${id}`)
        setuser(res.data)
        console.log(res);
      }
      getUser()
    },[id])



  



  return (
    <div>Profileid
    <UserProfile user={user} />
    </div>
  )
}

export async function getServerSideProps({params}) {
    const res = await axios.get(NEXT_URL +`/api/Profile/${params.id}`)
    console.log(res);
    return {
        props: {
            profile:res.data
        },
    }
}