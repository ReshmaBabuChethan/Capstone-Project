import { useFirestore } from '../../hooks/useFirestore'

// styles
import styles from './Home.module.css'
import { useAuthContext } from '../../hooks/useAuthContext'


import ModifyPage from './ModifyPage';

// components
import CommStudent from './bkpCommStudent'

export default function StudentList({ students }) {
  const { deleteDocument } = useFirestore('students')
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  today = yyyy + '-'+ mm + '-'+ dd;

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
              <div className="row">
                  <label> Credits completed:</label>
                  <div> {student.creditscomplete} </div>
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
             {/* <CommStudent student/>*/}
             {/*return (*/}
                <div>
                     {(() => {
                           if (student.creditscomplete >= 18) {
                            return(        
                              <h3> You are eligible for CPT </h3>)}    
                          else if (student.lastsem==="Yes" && student.optflag==="NO") {
                            return(      
                              <h3> You are eligible for OPT, Please apply here</h3>)    }
                          else if (student.optflag==="Yes" && student.optstartdate <= today) {
                            return(
                              <h3> You have applied for OPT. </h3> )} 

                          else if (student.optstartdate === today) {  // what condition to check
                            return(
                             <h3>You must upload your EAD documents in SEVP portal within next 10 days as your OPT start date:{student.optstartdate} </h3>)} 
                          else if (student.optstartdate+290===today) {
                             return(
                               <h3> Your OPT will expire in few days,Pls raise STEM request.OPT approved on:{student.optstartdate}</h3> )} 
                               else{
                                 return(<h3>As of now you are good! Please check here on regular basis to maintain your F1 status</h3>)
                                 
                               }                             })()}
                               
            </div>
           {/* )*/}
             
              
              <button onClick={() => deleteDocument(student.id)}>x</button>
             
            </div>
        </li>
        
        ))}
      </ul>
     
      <button onClick={() => ModifyPage(students)}>Update Details</button>
     {/* <Link to = "/ModifyPage"> Update Details</Link>*/}
      
    </div>
  )
}