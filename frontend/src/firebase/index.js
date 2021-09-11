import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDICKzU_w3yvKe0z6ITsafVFpqasD35gCw",
  authDomain: "mycars-rent.firebaseapp.com",
  projectId: "mycars-rent",
  storageBucket: "mycars-rent.appspot.com",
  messagingSenderId: "220294435509",
  appId: "1:220294435509:web:343a1ebc2a364f519224fc",
  measurementId: "G-PYE6DM50M8"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };