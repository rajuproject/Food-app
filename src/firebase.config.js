import {getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyBpHSF_AuqrPGhswxNVmi9W86uNaBfU3P0",
    authDomain: "food-delevery-app-35aa3.firebaseapp.com",
    databaseURL: "https://food-delevery-app-35aa3-default-rtdb.firebaseio.com",
    projectId: "food-delevery-app-35aa3",
    storageBucket: "food-delevery-app-35aa3.appspot.com",
    messagingSenderId: "241249234163",
    appId: "1:241249234163:web:29410d65bb7ec22e4f9b86"
  };


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export {app, firestore, storage}