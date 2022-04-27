import { useState, useEffect } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useFirestore } from '../../hooks/useFirestore'
import { useCollection } from '../../hooks/useCollection'
import { NavLink, useHistory   } from 'react-router-dom'
import {doc, getDoc} from "firebase/firestore";

import ListDisplay from './ListDisplay'

export default function AddStudent( { uid } ) {
  //export default function StudentForm( { uid } ) {
 // export default function AddStudent( { students } ) {
  const { user } = useAuthContext() 
  //const uid=user.uid
  
  const [name, setName] = useState('')
  const [nuid, setNuid] = useState('')
  const [course, setCourse] = useState('CS')
  const [creditscomplete, setCreditscomplete] = useState('')
  const [lastsem, setLastsem] = useState('')
  const [optflag, setOptflag] = useState('')
  const [optstartdate, setOptstartdate] = useState('')
  const { addDocument, response } = useFirestore('students')
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault()
    addDocument({
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
    
      <h3>Add your details</h3>
   
      <form onSubmit={handleSubmit}>
              <label>
          <span>Name:</span>
          <input 
            type="text"
            required
            onChange={(e) => setName(e.target.value)} 
            value={name} 
          />
        </label>
        <label>
          <span>NUID:</span>
          <input
            type="number"
            required
            onChange={(e) => setNuid(e.target.value)} 
            value={nuid} 
          />
        </label>
        <label>
        <span>Course (CS/MIS):</span>
          {/* <input
            type="text"
            required
            onChange={(e) => setCourse(e.target.value)}
            value={course}
          />
            /> */}
          <select onChange={(e) => setCourse(e.target.value)}>
            <option value="CS">CS</option>
            <option value="MIS">MIS</option>
          </select>
        </label>
        <label>        
          <span>Credits completed:</span>
          <input
            type="number"
            required
            onChange={(e) => setCreditscomplete(e.target.value)} 
            value={creditscomplete} 
          />
        </label>
        <label>
          <span>Is it the last semester:</span>
          <select onChange={(e) => setCourse(e.target.value)}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            </select>
        </label>
       
        <label>
          <span>Have you applied for OPT:</span>
          <select onChange={(e) => setCourse(e.target.value)}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            </select>
          </label>
        <label>
          <span>OPT start date:</span>
          <input
            type="date"
            required
            onChange={(e) => setOptstartdate(e.target.value)} 
            value={optstartdate} 
          />
        </label>
        <button> Add Details</button>
        
       
      </form>
     
    </>
  )
}