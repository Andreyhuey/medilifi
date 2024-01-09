import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA04NpEkWHSWAFn62poqwXSpFt-UAP7B0E",
  authDomain: "medilifi-a63d4.firebaseapp.com",
  databaseURL: "https://medilifi-a63d4-default-rtdb.firebaseio.com",
  projectId: "medilifi-a63d4",
  storageBucket: "medilifi-a63d4.appspot.com",
  messagingSenderId: "592571138835",
  appId: "1:592571138835:web:c31cb671a003483bc310e6",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const database = getDatabase(app);
