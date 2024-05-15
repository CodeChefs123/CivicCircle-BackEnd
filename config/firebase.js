/**
 * Import necessary modules from Firebase SDKs.
 */
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import admin from "firebase-admin";

/**
 * Path to the service account key JSON file.
 */
import serviceAccount from "../path/to/serviceAccountKey.json" assert { type: "json" };

/**
 * Firebase configuration object.
 */
const firebaseConfig = {
  apiKey: "AIzaSyDMv8BEyCvtOx-ijp_wP7lXRjMlz-TrkPQ",
  authDomain: "civiccircle-backend.firebaseapp.com",
  databaseURL:
    "https://civiccircle-backend-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "civiccircle-backend",
  storageBucket: "civiccircle-backend.appspot.com",
  messagingSenderId: "475891718579",
  appId: "1:475891718579:web:4ee9806f895abfda1d93c6",
  measurementId: "G-JJCDEL9K16",
};

/**
 * Initialize Firebase with the provided configuration.
 */
firebase.initializeApp(firebaseConfig);

/**
 * Initialize the Firebase Admin SDK with the service account credentials.
 */
const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://civiccircle-backend-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "gs://civiccircle-backend.appspot.com",
});

/**
 * Auth module from Firebase Admin SDK.
 */
const auth = admin.auth(app);

/**
 * Firestore module from Firebase Admin SDK.
 */
const firestore = admin.firestore(app);

/**
 * Storage module from Firebase SDK.
 */
const storage = getStorage();

/**
 * Export necessary modules and functions.
 */
export {
  auth,
  firebase,
  app,
  admin,
  firestore,
  storage,
  ref,
  uploadString,
  getDownloadURL,
  deleteObject,
};
