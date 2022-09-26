
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHcCbEHMUmQEefr2JTgMkfLl2-ps8PBn4",
    authDomain: "netflix-lama-dev.firebaseapp.com",
    projectId: "netflix-lama-dev",
    storageBucket: "netflix-lama-dev.appspot.com",
    messagingSenderId: "783684301099",
    appId: "1:783684301099:web:669a27f64c2e67d8f9556e"
  };


  const app = initializeApp(firebaseConfig);

  const storage = getStorage(app);
  export default storage;