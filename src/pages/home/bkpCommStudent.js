import styles from './Home.module.css'
import { useState, useEffect } from 'react'
import { useFirestore } from '../../hooks/useFirestore'
import { NavLink, useHistory   } from 'react-router-dom'

export default function CommStudent({ student }) {
      
    return (
    <div>
          {(() => {
                              if (student.creditscomplete >= 18) {
            return(
        
        <h3> You are eligible for CPT </h3>)}
    
        else if (student.lastsem) {
            return(
      
        <h3> You are eligible for OPT, Please apply here</h3>)    }
            })()}
            </div>
            )}
   /*} else if ({student.optflag}) {
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
    }*/