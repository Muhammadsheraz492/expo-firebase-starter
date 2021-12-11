import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// add firebase config
// const firebaseConfig = {
//   apiKey: "AIzaSyCdZnV0xyVyL-dOliRCMC5WOwCaeJrjJbU",
//   authDomain: "completefirebase-29443.firebaseapp.com",
//   projectId: "completefirebase-29443",
//   storageBucket: "completefirebase-29443.appspot.com",
//   messagingSenderId: "1057136108382",
//   appId: "1:1057136108382:web:9f5caed5f3642722bda5cf",
// };
const firebaseConfig = {
  apiKey: "AIzaSyCVtMmMrE-T0Sal2HemnORZ2hqpQ8KrRuc",
  authDomain: "services-18245.firebaseapp.com",
  projectId: "services-18245",
  storageBucket: "services-18245.appspot.com",
  messagingSenderId: "286212564782",
  appId: "1:286212564782:web:4903a087accc602d617cbf",
};
// initialize firebase
initializeApp(firebaseConfig);

// initialize auth
const auth = getAuth();

export { auth };
