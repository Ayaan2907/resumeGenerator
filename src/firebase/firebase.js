import { initializeApp } from "firebase/app";  // used to initialize the firebase app
// import "firebase/auth";  // used to authenticate the user
import "firebase/firestore";  // used to access the firestore database
// import "firebase/storage";  // used to access the storage database
// import "firebase/functions";  // used to access the functions database

import { getAuth } from "firebase/auth";

// Initialize Firebase
const app = initializeApp({
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    // databaseURL: process.env.databaseURL,
    // measurementId: process.env.measurementId
});

// export const auth = app.auth();
export const auth = getAuth(app);
export default app;