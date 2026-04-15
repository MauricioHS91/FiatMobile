import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCziJq8NWjJkldaq-4dQuglT6BDdwPocRU",
  authDomain: "atividade-mobile-98dc7.firebaseapp.com",
  projectId: "atividade-mobile-98dc7",
  storageBucket: "atividade-mobile-98dc7.firebasestorage.app",
  messagingSenderId: "85649702892",
  appId: "1:85649702892:web:951efbd68c264665e48ac9"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);