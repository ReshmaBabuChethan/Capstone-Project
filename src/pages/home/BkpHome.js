import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'

// styles
import styles from './Home.module.css'

// components
import StudentForm from './StudentForm'
import StudentList from './StudentList'

export default function Home() {
  const { user } = useAuthContext()
  const { documents, error } = useCollection(
    'students', ["uid", "==", user.uid], ['createdAt', 'desc']
  )

  return (
    <div className={styles.container}>
      <div className={styles.content}>
      {error && <p>{error}</p>}
        {documents && <StudentList students={documents} />}
              </div>
      <div className={styles.sidebar}>
        <StudentForm uid={user.uid}/>
      </div>
    </div>
  )
}