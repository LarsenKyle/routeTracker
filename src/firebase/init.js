import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBf5-FykXnKaIz1fQ1YUiLQx2Fg3Py7oJQ",
  authDomain: "routetracker-fe60c.firebaseapp.com",
  databaseURL: "https://routetracker-fe60c.firebaseio.com",
  projectId: "routetracker-fe60c",
  storageBucket: "",
  messagingSenderId: "975748576544",
  appId: "1:975748576544:web:070ec24194df7968"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
