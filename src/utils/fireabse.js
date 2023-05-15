// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDSuePUA_i9LinHHurzJLOpw-JmN5MkcHA',
  authDomain: 'learnfirebase-3432f.firebaseapp.com',
  projectId: 'learnfirebase-3432f',
  storageBucket: 'learnfirebase-3432f.appspot.com',
  messagingSenderId: '117029798251',
  appId: '1:117029798251:web:9073da8504b00b328b4c2e',
  measurementId: 'G-TRNN56CZ6Y'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export { db }
