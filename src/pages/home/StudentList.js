import { useFirestore } from '../../hooks/useFirestore'

// styles
import styles from './Home.module.css'

export default function StudentList({ students }) {
  const { deleteDocument } = useFirestore('students')

  return (
    <ul className={styles.students}>
      {students.map((student) => (
        <li key={student.id}>
        <div className ="card col-md-6 offset-md-3">
          <h3 className="text-center"> View Details</h3>
         
           <div className="row">
                         <label> Student Name:</label>
                        <div> {student.name} </div>
                     </div>
                     <div className="row">
                         <label> NUID:</label>
                        <div> {student.nuid} </div>
                     </div>
                     <div className="row">
                         <label> Enrolled Course:</label>
                        <div> {student.course} </div>
                     </div>
                     <div className="row">
                         <label> Credits completed:</label>
                        <div> {student.creditscomplete} </div>
                     </div>
                    
          
          {/*<p className={styles.name}>{student.name}</p>
          <p className={styles.nuid}>{student.nuid}</p>
          <p className={styles.course}>{student.course}</p>
      <p className={styles.creditscomplete}>{student.creditscomplete}</p>*/}
          <button onClick={() => deleteDocument(student.id)}>x</button>
          </div>
        </li>
      ))}
    </ul>
  )
}