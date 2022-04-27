import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'


// styles
import styles from './Home.module.css'

// components
import AddStudent from './AddStudent'
import UpdateStudent from './UpdateStudent'


export default function bkp() {
  const { user } = useAuthContext()
  
  
  const { documents, error } = useCollection(
    'students', ["uid", "==", user.uid], ['createdAt', 'desc']
  )
  console.log("home "+ documents);
  
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
      <div>
                     {(() => {
                       //if (documents!==null) {
                        // console.log(error)
                         //console.log("Student"+student.uid)
                         //console.log("useruid"+user.uid)
                        //if (student.uid===user.uid) {
                       //   if (error!==null) {
                        documents && documents.map((student=>{
                       if (student.uid===user.uid) {
                        return( <UpdateStudent students={documents}/>)}
                        else{
                          return(   <AddStudent uid={user.uid}/>)}}
                        
      //{error && <AddStudent uid={user.uid}/>}
      /*{documents &&  <StudentForm uid={user.uid}/>}*/
                  //if (error===null) {
                   // else{
                   //     return(   <AddStudent uid={user.uid}/>)}
    // {/*{documents &&  <UpdateStudent students={documents}/>}*/}
   // )()}
    //</div>
     // </div>
   // </div>
  )
//</div>}