const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const database = admin.firestore();

exports.triggerEmail = functions.pubsub.schedule('1 * * * *').onRun((context) => {
    const students = database.collection("students");
    console.log('log students: '+ students);
   {/* students.map((student) => (sendOPTEmail(student)));*/}
   //students.forEach((student)) : (sendOPTEmail(student));
   sendOPTEmail(students);

    const sendOPTEmail = (students) => {
        //students.map((student) => (
            {
                students.map((student) => (
                   
                        (() => {
        if (student.optflag) {}

        const Http = new XMLHttpRequest();
        const url = 'https://us-central1-reshcapstone.cloudfunctions.net/sendEmail?subject=SUBJECT&name='+student.name+'&message=MESSAGE&recipient=reshmabjm82@gmail.com';
        Http.open("GET", url);
        Http.send();
        Http.onreadystatechange = (e) => {
            console.log(Http.responseText)
        }
    
    return console.log("email triggered successfully!");
    })))} } }) ;

const sendEmail = require("./sendEmail");
exports.sendEmail = sendEmail;
    
