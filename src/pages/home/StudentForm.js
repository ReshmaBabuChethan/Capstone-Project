import { useState } from 'react'

export default function StudentForm() {
  const [name, setName] = useState('')
  const [nuid, setNuid] = useState('')
  const [course, setCourse] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ 
      name, 
      nuid,
      course,
    })
  }

  return (
    <>
      <h3>Add your details</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Student name:</span>
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
              <button>Add Details</button>
      </form>
    </>
  )
}