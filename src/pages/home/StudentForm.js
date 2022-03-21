import { useState, useEffect } from 'react'
import { useFirestore } from '../../hooks/useFirestore'
import { NavLink, useHistory   } from 'react-router-dom'

import ListDisplay from './ListDisplay'

export default function StudentForm( { uid } ) {
  const [name, setName] = useState('')
  const [nuid, setNuid] = useState('')
  const [course, setCourse] = useState('')
  const [creditscomplete, setCreditscomplete] = useState('')
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
        <button> Add Details</button>
        
        
      </form>
    </>
  )
}