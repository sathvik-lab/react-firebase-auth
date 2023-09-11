import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDeL6y4Usa_J1YYiZXCqVvLmjuCEpm-ZSE",
  authDomain: "cloud-store-f5c94.firebaseapp.com",
  projectId: "cloud-store-f5c94",
  storageBucket: "cloud-store-f5c94.appspot.com",
  messagingSenderId: "224101314215",
  appId: "1:224101314215:web:db664fc77124365186b582",
  measurementId: "G-GRFC9VXBH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;


