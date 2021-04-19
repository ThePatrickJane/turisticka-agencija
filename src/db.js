// Conveniently import this file anywhere to use db

import firebase from 'firebase/app'
import 'firebase/database'

export const db = firebase.initializeApp({
    apiKey: "AIzaSyAxulaKUKbDzlws_r3klZy0aIuyq9RZwr8",
    authDomain: "turisticka-agencija-4046f.firebaseapp.com",
    projectId: "turisticka-agencija-4046f",
    storageBucket: "turisticka-agencija-4046f.appspot.com",
    messagingSenderId: "108846658129",
    appId: "1:108846658129:web:f66cbb2637294b2bc37e70"
}).database()


// Export types that exists in Firestore - Uncomment if you need them in your app
// const { Timestamp, GeoPoint } = firebase.firestore
// export { Timestamp, GeoPoint }
