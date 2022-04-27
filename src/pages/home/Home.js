import { useAuthContext } from '../../hooks/useAuthContext';

import { useCollection } from '../../hooks/useCollection';


// styles

import styles from './Home.module.css';


// components

import AddStudent from './AddStudent';

import StudentList from './StudentList';


export default function Home() {

  const { user } = useAuthContext();

  const { documents, error, isQuerying } = useCollection(

    'students',

    ['uid', '==', user.uid],

    ['createdAt', 'desc']

  );

 // const flag=false;
  //console.log("userid:"+user.uid);
  //console.log("flag"+flag);

  /* return (

    <div className={styles.container}>

      

      <div className={styles.sidebar}>

        <StudentForm uid={user.uid}/>

      </div>

    </div>

  )

}*/

console.log(documents);
  return (
    <>
    {isQuerying && (
      <div className={styles.container}>
        <div className={styles.content}>
          <p>Loading...</p>
        </div>
      </div>
    )}
     {!isQuerying && (
        <div className={styles.container}>
          <div className={styles.content}>
            {error && <p>{error}</p>}
            {documents && <StudentList students={documents} />}
          </div>
          <div className={styles.sidebar}>
            {!documents && <AddStudent uid={user.uid} />}
          </div>
        </div>
      )}
         </>
  );
}

    {/*<div className={styles.container}>

      {error && <p>{error}</p>}

      {/*{!documents && (   

        <div className={styles.sidebar}>

          <AddStudent uid={user.uid} />

        </div>

      )}*/}

{/*
        if(documents){
          <StudentList students={documents} />}
          else{
            <AddStudent uid={user.uid} />}
          })}

     {/*} {documents && (

        <div className={styles.content}>

          <StudentList students={documents} />

        </div>

     )}*/}
    {/*} {(() => {
     if (user.uid==="IQmop82X6gcSfNIR4dEoCdqlSLV2"){
       flag=true}
       
     })}
     <div className={styles.container}>    
      <div className={styles.sidebar}>   
      <div>
      
      {flag && <StudentList students={documents}/>}
      {!flag && <AddStudent uid={user.uid}/>}
      </div>
    </div>
    </div>
    </div>

  );

}*/}