import { useState, useEffect } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useFirestore } from '../../hooks/useFirestore'
import { useCollection } from '../../hooks/useCollection'
import { NavLink, useHistory   } from 'react-router-dom'
import {doc, getDoc} from "firebase/firestore";

import ListDisplay from './ListDisplay'

//export default function StudentForm( { uid } ) {
  export default function UpdateStudent( { students } ) {
  const { user } = useAuthContext() 
  const uid=user.uid
  console.log("updatestudent "+ students);
  const [name, setName] = useState('')
  const [nuid, setNuid] = useState('')
  const [course, setCourse] = useState('')
  const [creditscomplete, setCreditscomplete] = useState('')
  const [lastsem, setLastsem] = useState('')
  const [optflag, setOptflag] = useState('')
  const [optstartdate, setOptstartdate] = useState('')
  const { updateDocument, response } = useFirestore('students')
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault()
    updateDocument({
      uid,
      name, 
      nuid,
      course,
      creditscomplete,
      lastsem,
      optflag,
      optstartdate,
    })
    history.push('/listdisplay');
  }

  
      // reset the form fields
  useEffect(() => {
    if (response.success) {
      setName('')
      setNuid('')
      setCourse('')
      setCreditscomplete('')
      setLastsem('')
      setOptflag('')
      setOptstartdate('')      
    }
  }, [response.success])

  return (
    <>
    
    <h3>Update your details</h3>
      {students.map((student) => (
      <form onSubmit={handleSubmit}>
      
        <label>
          <span>Name:</span>
          <input 
            type="text"
            required
            onChange={(e) => setName(e.target.value)} 
            value={student.name} 
          />
        </label>
        <label>
          <span>NUID:</span>
          <input
            type="number"
            required
            onChange={(e) => setNuid(e.target.value)} 
            value={student.nuid} 
          />
        </label>
        <label>
          <span>Course (MS/MIS):</span>
          <input
            type="text"
            required
            onChange={(e) => setCourse(e.target.value)} 
            value={student.course} 
          />
        </label>
        <label>
          <span>Credits completed:</span>
          <input
            type="number"
            required
            onChange={(e) => setCreditscomplete(e.target.value)} 
            value={student.creditscomplete} 
          />
        </label>
        <label>
          <span>Is it the last semester:</span>
          <input
            type="boolean"
            required
            onChange={(e) => setLastsem(e.target.value)} 
            value={student.lastsem} 
          />
        </label>
        <label>
          <span>Have you applied for OPT:</span>
          <input
            type="boolean"
            required
            onChange={(e) => setOptflag(e.target.value)} 
            value={student.optflag} 
          />
        </label>
        <label>
          <span>OPT start date:</span>
          <input
            type="date"
            required
            onChange={(e) => setOptstartdate(e.target.value)} 
            value={student.optstartdate} 
          />
        </label>
        <button> Update Details</button>
        
       
      </form>
      ))}
    </>
  )
}