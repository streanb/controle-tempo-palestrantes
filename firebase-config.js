// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDySoLa1TbiD5-oVgg5oWrOTOp-l8x8qVE",
  authDomain: "controlo-tempo.firebaseapp.com",
  databaseURL: "https://controlo-tempo-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "controlo-tempo",
  storageBucket: "controlo-tempo.appspot.com",
  messagingSenderId: "727603507122",
  appId: "1:727603507122:web:4e7c81136580a37dc83eab"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
