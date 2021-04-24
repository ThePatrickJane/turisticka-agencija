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

// todo
//   - dizajn za stranicu konkretne rute, dugme za izmenu koje pretvara podatke rute u formu i dugme za brisanje sa dijalogom za potvrdu, ocene i kod ture se ne menjaju, ubaciti dizajn za ocene (zadatak 2)
