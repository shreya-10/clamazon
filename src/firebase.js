import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyD8hsIoETFVq7p4AcbBPtt-OCoioUtzX7w",
    authDomain: "clone-3d861.firebaseapp.com",
    databaseURL: "https://clone-3d861.firebaseio.com",
    projectId: "clone-3d861",
    storageBucket: "clone-3d861.appspot.com",
    messagingSenderId: "429828745657",
    appId: "1:429828745657:web:44ea6c79660d86f0296e68",
    measurementId: "G-4YCH6KF5BE"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};