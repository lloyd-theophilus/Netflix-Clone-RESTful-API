import firebase from 'firebase'
//Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATPzG4vIiAGcaPKWLBcNOke_CwJxyvBvs",
    authDomain: "netfli-clone-31510.firebaseapp.com",
    projectId: "netfli-clone-31510",
    storageBucket: "netfli-clone-31510.appspot.com",
    messagingSenderId: "582476006313",
    appId: "1:582476006313:web:cd79ba84f599a70eb27ab8",
    measurementId: "G-VCKLE07H70"
  };

  firebase.initializeApp(firebaseConfig)
  const storage = firebase.storage()

export default storage