import { useState, useEffect } from 'react'
import { useFirestore } from '../../hooks/useFirestore'
import { NavLink, useHistory   } from 'react-router-dom'

import ListDisplay from './ListDisplay'

export default function StudentForm( { uid } ) {
  const [name, setName] = useState('')
  const [nuid, setNuid] = useState('')
  const [course, setCourse] = useState('')
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
          <span>Course (MS/MIS):</span>
          <input
            type="text"
            required
            onChange={(e) => setCourse(e.target.value)} 
            value={course} 
          />
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
          <input
            type="boolean"
            required
            onChange={(e) => setLastsem(e.target.value)} 
            value={lastsem} 
          />
        </label>
        <label>
          <span>Have you applied for OPT:</span>
          <input
            type="boolean"
            required
            onChange={(e) => setOptflag(e.target.value)} 
            value={optflag} 
          />
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