import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnI7EaWi7ayEk7ggn_mGsb9msufgqelP0",
  authDomain: "e-commerce-e4bf9.firebaseapp.com",
  projectId: "e-commerce-e4bf9",
  storageBucket: "e-commerce-e4bf9.firebasestorage.app",
  messagingSenderId: "892967118143",
  appId: "1:892967118143:web:493e7e87228bff6aff9f8a",
  measurementId: "G-4XQTCC288W"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
