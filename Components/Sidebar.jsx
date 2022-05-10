import styles from "../styles/Sidebar.module.css"
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import ArticleIcon from '@mui/icons-material/Article';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';



const Sidebar = () => {
  
  return (
       <div className={styles.sidebar}>
        <div className={styles.leftcontainetr}>
          <span className={styles.username}>username</span>
           <span className={styles.username}>Hello user</span>
        </div>
        <div className={styles.sidebaritems}> 
        <ul className={styles.sidebarlist}>
           <li className={styles.listitems}>
          <h3 className={styles.navBarTitle}>SnapTalk</h3>
            </li>
            <li className={styles.listitems}>
            <div className={styles.righticons}>
            <span className={styles.icon}>
           <span> <HomeIcon /></span>
          <span className={styles.iconTitle}>Home</span>
          </span>
          <span className={styles.icon}>
          <ArticleIcon />
          <span className={styles.iconTitle}>Timeline</span>
          </span>
            <span className={styles.icon}>
          <PersonIcon />
          <span className={styles.iconTitle}>Friends</span>
          </span>
          
          <span className={styles.icon}>
          <MessageIcon />
          <span className={styles.iconTitle}>Messages</span>
          </span>
          
          <span className={styles.icon}>
          <CircleNotificationsIcon />
          <span className={styles.iconTitle}>Notifications</span>
          </span>
          </div>
            </li>
        </ul>
   

        </div>
           
        </div>
  )
}

export default Sidebar