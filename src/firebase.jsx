import { initializeApp } from 'firebase/app'
import { getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyB5SWTCAdogYgHeTnYVwtM1B6ZIis4VpyY",
  authDomain: "metanoia-ad952.firebaseapp.com",
  projectId: "metanoia-ad952",
  storageBucket: "metanoia-ad952.appspot.com",
  messagingSenderId: "330259390315",
  appId: "1:330259390315:web:3d3b51ad4341fabaaa362e",
  measurementId: "G-JVK6BZL2MK"
};

const fireBaseApp = initializeApp(firebaseConfig);
const storage = getStorage(fireBaseApp)

const db = getFirestore(fireBaseApp);
const auth = getAuth(fireBaseApp);

export { db, auth, storage };