global.XMLHttpRequest = require("xhr2");
const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const database = admin.firestore();
const SUBJECT = "Attention: F1 visa status alert"
        const MESSAGE = "You are eligible for OPT, please apply for it. Please login to the portal for more information"
        const EMAILID = "reshmabjm82@gmail.com"

exports.triggerEmail = functions.pubsub.schedule('* * * * *').onRun((context) => {

    const getStudents = async () => {
        console.log('inside getStudents');
        const students = [];
        await database.collection('students').get().then(querySnapshot => {
            querySnapshot.docs.forEach(doc => {
                students.push(doc.data());
            });
        });
        console.log('after getStudents: ' + students + ' and length: ' + students.length);
        return students;
    } 
    
    getStudents().then((studentsRes) => {

        console.log('result :' + studentsRes);
        console.log('result length:' + studentsRes.length);
        

        for (let i = 0; i < studentsRes.length; i++) {

            console.log('inside for loop');
            const student = studentsRes[i];

            if (student.optflag === "No" && student.lastsem ==="Yes") {

                console.log('student name: ' + student.name);

                const Http = new XMLHttpRequest();
                const url = 'https://us-central1-reshcapstone.cloudfunctions.net/sendEmail?subject=' + SUBJECT + '&name=' + student.name + '&message=' + MESSAGE + '&recipient=' + EMAILID;
                Http.open("GET", url);
                Http.send();
                Http.onreadystatechange = (e) => {
                    console.log('http response :' + Http.responseText)
                }
            }

            /* const userAction = async () => {
                const response = await fetch('https://us-central1-reshcapstone.cloudfunctions.net/sendEmail?subject=SUBJECT&name=' + student.name + '&message=MESSAGE&recipient=reshmabjm82@gmail.com', {
                    method: 'POST',
                    body: " ", // string or object
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const myJson = await response.json();
                console.log('response from api :' + myJson)
                // extract JSON from the http response
                // do something with myJson
            }
            
            userAction(); */
        }

    });

    return console.log("email triggered successfully!");
});

const sendEmail = require("./sendEmail");
exports.sendEmail = sendEmail;
