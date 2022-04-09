import { useAuthContext } from '../../hooks/useAuthContext'


// styles
import styles from './Home.module.css'

// components
import StudentForm from './StudentForm'


export default function Home() {
  const { user } = useAuthContext()
  
 /* return (
    <div className={styles.container}>
      
      <div className={styles.sidebar}>
        <StudentForm uid={user.uid}/>
      </div>
    </div>
  )
}*/

return (
  <div className={styles.container}>
    
    <div className={styles.sidebar}>
   
      <StudentForm uid={user.uid}/>
    </div>
  </div>
)
}