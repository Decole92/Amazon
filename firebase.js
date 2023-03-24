// Import the functions you need from the SDKs you need

import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//import firebase from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuM_XQ4sg4vPCOldgbmbXqsINrhbCJwWw",
  authDomain: "amazn-yt-2edc5.firebaseapp.com",
  projectId: "amazn-yt-2edc5",
  storageBucket: "amazn-yt-2edc5.appspot.com",
  messagingSenderId: "474294993085",
  appId: "1:474294993085:web:b353f2feddf817f1c677d4",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
