// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "contolotempo.firebaseapp.com",
  databaseURL: "https://contolotempo-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "contolotempo",
  storageBucket: "contolotempo.appspot.com",
  messagingSenderId: "727603507122",
  appId: "1:727603507122:web:4e7c81136580a37dc83eab"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
