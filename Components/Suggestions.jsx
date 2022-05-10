import styles from "../styles/Suggestions.module.css"
import Image from "next/image"



const Suggestions = ()=> {




  return (
    <div className={styles.suggestionContainer}>
    <p>Friends</p>
   

    <Image src="/img/js.png" alt="javascript" height="200" width="150" />

    
    </div>
  )
}

export default Suggestions


