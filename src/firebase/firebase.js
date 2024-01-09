// Import the required Firebase modules
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB83UcWaOBPSRex_kDYkYvQZlBRmSZ9VgU",
  authDomain: "ynmacc-b563b.firebaseapp.com",
  projectId: "ynmacc-b563b",
  storageBucket: "ynmacc-b563b.appspot.com",
  messagingSenderId: "832404594957",
  appId: "1:832404594957:web:611617a2602ab585bc5044",
  measurementId: "G-MWHXFWHF6L",
  databaseURL:"https://ynmacc-b563b-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize other Firebase services
const auth = getAuth(app);
const database = getDatabase(app);

// Export the Firebase app and any services that you plan to use
export { app, auth, database };