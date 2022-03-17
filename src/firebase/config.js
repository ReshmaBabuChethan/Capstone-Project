import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBnqkzkKAdYAWfiWZLgiUtezI7_cTgIflg",
    authDomain: "reshcapstone.firebaseapp.com",
    projectId: "reshcapstone",
    storageBucket: "reshcapstone.appspot.com",
    messagingSenderId: "572410599196",
    appId: "1:572410599196:web:5a85776c78fffd6b328cd9"
  }

  // init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()


// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }