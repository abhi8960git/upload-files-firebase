// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_aXIzTN4C-zcaOZlgpjvjyjgieX7x16U",
  authDomain: "upload-files-3fa0b.firebaseapp.com",
  projectId: "upload-files-3fa0b",
  storageBucket: "upload-files-3fa0b.appspot.com",
  messagingSenderId: "666856146505",
  appId: "1:666856146505:web:a05ac23b882b6433c36198"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);