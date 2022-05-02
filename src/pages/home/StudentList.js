import {useState} from 'react'
import {useFirestore} from '../../hooks/useFirestore'

// styles
import styles from './Home.module.css'
import UpdateStudent from './OtherLink';
import {useAuthContext} from '../../hooks/useAuthContext'


import ModifyPage from './ModifyPage';

// components
import OtherLink from './OtherLink'

export default function StudentList({students}) {
    const {deleteDocument} = useFirestore('students')

    const [updateForm, setUpdateForm] = useState(false)

    const updateDetails = (student) => {
        console.log('from update');
        console.log(student);

        setDocid(student.id);
        setName(student.name);
        setNuid(student.nuid);
        setCourse(student.course);
        setCreditscomplete(student.creditscomplete);
        setLastsem(student.lastsem);
        setOptflag(student.optflag);
        setOptstartdate(student.optstartdate);

        console.log(student);
        setUpdateForm(true);
    }

    var stu;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    today = yyyy + '-' + mm + '-' + dd;


    const {user} = useAuthContext()
    const uid = user.uid
    // console.log("updatestudent " + student);

    const [docid, setDocid] = useState('')

    const [name, setName] = useState('')
    const [nuid, setNuid] = useState('')
    const [course, setCourse] = useState('')
    const [creditscomplete, setCreditscomplete] = useState('')
    const [lastsem, setLastsem] = useState('')
    const [optflag, setOptflag] = useState('')
    const [optstartdate, setOptstartdate] = useState('')
    const {updateDocument, response} = useFirestore('students')
    // let history = useHistory();

    const handleUpdateDetails = (e) => {
        e.preventDefault()
        console.log('upadte');
        console.log(course)
        console.log(creditscomplete)
        updateDocument(docid, {
            uid,
            name,
            nuid,
            course,
            creditscomplete,
            lastsem,
            optflag,
            optstartdate
        })
        setUpdateForm(false);
    }

    // const otherlnk=false;
    const [otherlnk, setotherlnk] = useState(false)
    const handleOtherlnk = () => {
        setotherlnk(true);
    }

    return (
        <> {
            !updateForm && (
                <div>
                    <ul className={
                        styles.students
                    }>
                        {
                        students.map((student) => (


                            <li key={
                                student.id
                            }>
                                {/* <button onClick={() => handleUpdate(student)}>update</button> */}
                                <div className="card col-md-6 offset-md-3">
                                    <h3 className="text-center">
                                        View Details</h3>
                                    <div className="row">
                                        <label>
                                            Student Name:</label>
                                        <div> {
                                            student.name
                                        } </div>
                                    </div>
                                    <div className="row">
                                        <label>
                                            NUID:</label>
                                        <div> {
                                            student.nuid
                                        } </div>
                                    </div>
                                    <div className="row">
                                        <label>
                                            Enrolled Course:</label>
                                        <div> {
                                            student.course
                                        } </div>
                                    </div>
                                    <div className="row">
                                        <label>
                                            Credits completed:</label>
                                        <div> {
                                            student.creditscomplete
                                        } </div>
                                    </div>
                                    <div className="row">
                                        <label>
                                            Last semester:</label>
                                        <div> {
                                            student.lastsem
                                        } </div>
                                    </div>
                                    <div className="row">
                                        <label>
                                            Have you applied for OPT:</label>
                                        <div> {
                                            student.optflag
                                        } </div>
                                    </div>
                                    <div className="row">
                                        <label>
                                            Your OPT start date:</label>
                                        <div> {
                                            student.optstartdate
                                        } </div>
                                    </div>
                                    {/* <CommStudent student/>*/}
                                    {/*return (*/}
                                    <div> {
                                        (() => {
                                            stu = student
                                            console.log("student details:" + student)
                                            if (student.creditscomplete >= 18 && student.optflag === "No") {
                                                return (
                                                    <h3>
                                                        You are eligible for CPT
                                                    </h3>
                                                )
                                            } else if (student.lastsem === "Yes" && student.optflag === "NO") {
                                                return (
                                                    <h3>
                                                        You are eligible for OPT, Please apply here</h3>
                                                )
                                            } else if (student.optflag === "Yes" && student.optstartdate <= today) {
                                                return (
                                                    <h3>
                                                        You have applied for OPT.
                                                    </h3>
                                                )
                                            } else if (student.optstartdate === today) { // what condition to check
                                                return (
                                                    <h3>You must upload your EAD documents in SEVP portal within next 10 days as your OPT start date:{
                                                        student.optstartdate
                                                    } </h3>
                                                )
                                            } else if (student.optstartdate + 290 === today) {
                                                return (
                                                    <h3>
                                                        Your OPT will expire in few days,Pls raise STEM request.OPT approved on:{
                                                        student.optstartdate
                                                    }</h3>
                                                )
                                            } else {
                                                return (
                                                    <h3>As of now you are good! Please check here on regular basis to maintain your F1 status</h3>
                                                )

                                            }
                                        })()
                                    } </div>
                                    {/* )*/}


                                    <button onClick={
                                        () => deleteDocument(student.id)
                                    }>x</button>
                                    {/* <button onClick={ () => updateDetails(student) }>update</button>  */}


                                    {/* <button onClick={ () => UpdateStudent(stu) }>update</button> */} </div>
                            </li>

                        ))
                    } </ul>
                    <button onClick={
                        () => updateDetails(stu)
                    }>Update My Details</button>

                    <button onClick={
                        () => handleOtherlnk
                    }>Visit here for other links</button>


                    {/* <button onClick={() => ModifyPage(students)}>Update Details</button>*/} </div>
            )
        }


        {
            updateForm && (
                <form onSubmit={handleUpdateDetails}>
                    <ul className={
                        styles.students
                    }>
                        {
                        students.map((student) => (


                            <li key={
                                student.id
                            }>
                                <div className="card col-md-6 offset-md-3">
                                    <h3 className="text-center">
                                        Update your details</h3>
                                    <label>
                                        <span>Name:</span>
                                        <input type="text" required
                                            onChange={
                                                (e) => setName(e.target.value)
                                            }
                                            value={
                                                student.name
                                            }/>
                                    </label>
                                    <label>
                                        <span>NUID:</span>
                                        <input type="number" required
                                            onChange={
                                                (e) => setNuid(e.target.value)
                                            }
                                            value={
                                                student.nuid
                                            }/>
                                    </label>
                                    <label>
                                        <span>Course (MS/MIS):</span>
                                        <input type="text" required
                                            onChange={
                                                (e) => setCourse(e.target.value)
                                            }
                                            defaultValue={
                                                student.course
                                            }/>
                                    </label>
                                    <label>
                                        <span>Credits completed:</span>
                                        <input type="number" required
                                            onChange={
                                                (e) => setCreditscomplete(e.target.value)
                                            }
                                            defaultValue={
                                                student.creditscomplete
                                            }/>
                                    </label>
                                    <label>
                                        <span>Is it the last semester:</span>
                                        <input type="boolean" required
                                            onChange={
                                                (e) => setLastsem(e.target.value)
                                            }
                                            defaultValue={
                                                student.lastsem.toString()
                                            }/>

                                    </label>

                                    <label>
                                        <span>Have you applied for OPT:</span>
                                        <input type="boolean" required
                                            onChange={
                                                (e) => setOptflag(e.target.value)
                                            }
                                            defaultValue={
                                                student.optflag.toString()
                                            }/>
                                    </label>
                                    <label>
                                        <span>OPT start date:</span>
                                        <input type="date" required
                                            onChange={
                                                (e) => setOptstartdate(e.target.value)
                                            }
                                            defaultValue={
                                                student.optstartdate
                                            }/>
                                    </label>


                                </div>
                            </li>

                        ))
                    } </ul>
                    <button>UPDATE</button>
                    {/* <button onClick={
                        () => updateDocument(stu)
                    }>Update Details</button> */} </form>
            )
        }


        {
            otherlnk && (
                <div>
                    <h3>
                        Got to raise I20 requests? Please find the iGlobal link below
                    </h3>
                    <div>
                        <a href="https://iglobal.nebraska.edu/">iGlobal</a>
                    </div>
                    <div>
                        <h3>
                            International Student advisor details:</h3>
                        <h4>
                            Jennifer</h4>
                        <h4>jennifer@unomaha.edu</h4>
                        <h4>123-456-7899</h4>
                    </div>
                    <div>
                        <h4>
                            Michelle</h4>
                        <h4>michelle@unomaha.edu</h4>
                        <h4>123-456-7899</h4>
                    </div>
                </div>
            )
        } </>
    )
}
