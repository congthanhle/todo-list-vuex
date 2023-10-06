import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCItXpiTi7S5MRQuL-iblmamRIN-w6ccFM',
  authDomain: 'todo-list-33b6c.firebaseapp.com',
  projectId: 'todo-list-33b6c',
  storageBucket: 'todo-list-33b6c.appspot.com',
  messagingSenderId: '703838550422',
  appId: '1:703838550422:web:34ed7d1420780d2f9f85b7',
  measurementId: 'G-QRRS6NGME1'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export { db }
