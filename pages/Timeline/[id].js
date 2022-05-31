import axios from 'axios'
import React from 'react'
import UserTimeline from '../../Components/UserTimeline';
import styles from "../../styles/Timeline.module.css"
import { NEXT_URL } from '../../url';

export default function Timeline({Timeline}) {
    console.log(Timeline);

  return (
    <div className={styles.TimelineContainer}>
    {Timeline && Timeline.map((time,index)=> (
    <UserTimeline key={index}  Timeline={time} />
    ))}
    </div>
  )
}

export async function getServerSideProps({params}) {
    const res = await axios.get(NEXT_URL +`/api/Timeline/${params.id}`)
    console.log(res);
    return {
        props: {
            Timeline:res.data
        },
    }
}