import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAai_kEzsBXkzlCflnETV_Z_o3LzAZxKbI",
  authDomain: "planightios.firebaseapp.com",
  databaseURL: "https://planightios.firebaseio.com",
  projectId: "planightios",
  storageBucket: "planightios.appspot.com",
  messagingSenderId: "1008305946817",
  appId: "1:1008305946817:web:a669ce286e6bd5be9e9440",
  measurementId: "G-559WSGJJ4L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
