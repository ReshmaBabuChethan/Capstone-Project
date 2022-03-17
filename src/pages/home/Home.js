// styles
import styles from './Home.module.css'

// components
import StudentForm from './StudentForm'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        details list
      </div>
      <div className={styles.sidebar}>
        <StudentForm />
      </div>
    </div>
  )
}