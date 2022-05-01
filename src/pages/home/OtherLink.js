import {useState, useEffect} from 'react'
import {useAuthContext} from '../../hooks/useAuthContext'
import {useFirestore} from '../../hooks/useFirestore'
import {useCollection} from '../../hooks/useCollection'
import {NavLink, useHistory} from 'react-router-dom'
import {doc, getDoc} from "firebase/firestore";

import ListDisplay from './ListDisplay'

// export default function StudentForm( { uid } ) {
export default function OtherLink() {
    


    return (
        <>
        <h3> Got to raise I20 requests? Please find the iGlobal link below </h3>
        <a href="https://iglobal.nebraska.edu/">iGlobal</a> 
       <h3> International Student advisor details:</h3>
       <h4> Jennifer</h4>
       <h4>jennifer@unomaha.edu</h4>
       <h3>123-456-7899</h3>
       <h4> Michelle</h4>
       <h4>michelle@unomaha.edu</h4>
       <h3>123-456-7899</h3>
       {/* logout button here*/}
       </>
    )
}
