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

// todo
//   - pitaj za stranicu sa profilom korisnika, da li mogu odmah podaci da se ubace u formu ili mora i tu dugme za pretvaranje profila u formu
//   - dizajn za preporucene rute, svaka ruta u posebnom redu, prva kolona je slika, druga kolona naziv, kratak opis, cena, klikom na sliku ili ime odlazi na rutu, na kraju stranice treba da ima dugme koje vodi na sve rute u tom gradu (niste pronasli ono sto trazite? pogledajte celu ponudu tura)
//   - dizajn za stranicu konkretne rute, dugme za izmenu koje pretvara podatke rute u formu i dugme za brisanje sa dijalogom za potvrdu, ocene i kod ture se ne menjaju, ubaciti dizajn za ocene (zadatak 2)
