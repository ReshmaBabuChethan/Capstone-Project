import { useFirestore } from '../../hooks/useFirestore'

// styles
import styles from './Home.module.css'

export default function StudentList({ students }) {
  const { deleteDocument } = useFirestore('students')

  return (
    <div>
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
              if ({student.creditscomplete >= 18}) {
              <div className="row">
                  <label> Credits completed:</label>
                  <div> {student.creditscomplete} </div>
                  <h3> You are eligible for CPT</h3>
              </div>
              }
              else if ({student.lastsem}) {
              <div className="row">
                  <label> Last semester:</label>
                  <div> {student.lastsem} </div>
                  <h3> You are eligible for OPT, Please apply here</h3>
              </div>
              }
              else if ({student.optflag}) {
              <div className="row">
                  <label> Have you applied for OPT:</label>
                  <div> {student.optflag} </div>
                  <h3> You have applied for OPT</h3>
              </div>
              }
              else if ({student.optstartdate}) {
              <div className="row">
                  <label> Your OPT start date:</label>
                  <div> {student.optstartdate} </div>
              </div>
              }
              else if({student.optstartdate}+290==sysdate) {
              <div className="row">
                  <label> Your OPT will expire in few days,Pls raise STEM request.OPT approved on:</label>
                  <div> {student.optstartdate} </div>
              </div>
              }
              {/*
              <div className="row">
                  <label> Credits completed:</label>
                  <div> {student.creditscomplete} </div>
                  {student.creditscomplete >= 18}
                  <h3> You are eligible for CPT</h3>
              </div>
              <div className="row">
                  <label> Last semester:</label>
                  <div> {student.lastsem} </div>
              </div>
              <div className="row">
                  <label> Have you applied for OPT:</label>
                  <div> {student.optflag} </div>
              </div>
              <div className="row">
                  <label> Your OPT start date:</label>
                  <div> {student.optstartdate} </div>
              </div>
              */}
              {/*
              <p className={styles.name}>{student.name}</p>
              <p className={styles.nuid}>{student.nuid}</p>
              <p className={styles.course}>{student.course}</p>
              <p className={styles.creditscomplete}>{student.creditscomplete}</p>
              */}
              <button onClick={() => deleteDocument(student.id)}>x</button>
            </div>
        </li>
        ))}
      </ul>
    </div>
  )
}