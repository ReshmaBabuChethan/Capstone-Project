import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'
import {projectFirestore} from '../../firebase/config'


// styles
import styles from './Home.module.css'

// components
import AddStudent from './AddStudent'
import UpdateStudent from './UpdateStudent'
import { hasSelectionSupport } from '@testing-library/user-event/dist/utils'


export default function Home() {
  const { user } = useAuthContext()
  var flag=false;
  
 //const response=projectFirestore.collection('students').doc('IQmop82X6gcSfNIR4dEoCdqlSLV2');
 /*response.get().then((doc) => {
   if(!doc.exists){
      flag=false;
   }
   else flag=true;
   console.log("flag value"+flag);
 });*/
  //const data=await response.get();
  //  data.docs.forEach(item=>{
    // setBlogs([...documents,item.data()])
    //})
 const { documents, error } = useCollection(
 'students', ["uid", "==", user.uid], ['createdAt', 'desc']
  )
  //hasSelectionSupport(20);
 //documents.get().then()

 //const sfRef = projectFirestore.collection('students').doc('IQmop82X6gcSfNIR4dEoCdqlSLV2');
//const collections = sfRef.listCollections();
//collections.forEach(collection => {
 // console.log('Found subcollection with id:', collection.id);
//});

//let ref = projectFirestore.collection('students')
//ref = ref.where(uid==user.uid)

 // console.log("home "+ documents);
  
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
      {documents && !error && <UpdateStudent students={documents}/>}
      {!documents && <AddStudent uid={user.uid}/>}
     {/* {(() => {
        if(documents==='students'){
          if (documents.doc.uid==user.uid){
            flag=true
          }
    
      })}*/}
     {/*} {flag && <UpdateStudent students={documents}/>}
      {!flag && <AddStudent uid={user.uid}/>}*/}
     {/*} {(() => {
        if(flag===true) { return( <UpdateStudent students={documents}/>)}
        else { return( <AddStudent uid={user.uid}/>)}
      })}*/}
     {/* {flag && <UpdateStudent students={documents}/>}
      {!flag && <AddStudent uid={user.uid}/>}*/}
      {/*{!error && <AddStudent uid={user.uid} />}*/}
      {/*{(() => {
                        documents && documents.map((student=>{*/}
     {/* {documents && documents.map((student) => (
        <div>
        {(() => {
                    if (student.uid===user.uid) {
                    return(  <UpdateStudent students={documents}/>)}
                    
                    })}
                    </div>
      ))}
      {!error && <AddStudent uid={user.uid} />}
                       
                       {/*} //  return(   <AddStudent uid={user.uid}/>}
                      
                        
                        ))
                        
                            //return(   <AddStudent uid={user.uid}/>)
                        {/*}})}*/}
                     
    </div>
      </div>
    </div>
  )
}