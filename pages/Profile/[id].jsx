import axios from 'axios'
import React, { } from 'react'
import UserProfile from '../../Components/UserProfile';
import { NEXT_URL } from '../../url';

export default function Profile({profile}) {


    console.log(profile);

  



  return (
    <div>Profileid
    <UserProfile />
    </div>
  )
}

export async function getServerSideProps({params}) {
    const res = await axios.get(NEXT_URL + `/api/Profile/${params.id}`)
    console.log(res);
    return {
        props: {
            profile:res.data
        },
    }
}