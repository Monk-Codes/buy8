import { initializeApp } from "firebase/app";

const firebaseConfig = {
 apiKey: "AIzaSyDr-YVtl5DL-LwJGE9j4rqJHquzbtrtTcs",
 authDomain: "buy8app.firebaseapp.com",
 projectId: "buy8app",
 storageBucket: "buy8app.appspot.com",
 messagingSenderId: "789444981775",
 appId: "1:789444981775:web:049df9f5befc10631b5f7a",
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
