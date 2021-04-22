<template>
  <v-container>
    {{this.$route.params.ime}}
    {{atrakcije}}
  </v-container>
  <!-- todo
  - pitaj za stranicu sa profilom korisnika, da li mogu odmah podaci da se ubace u formu ili mora i tu dugme za pretvaranje profila u formu
  - dizajn za preporucene rute, svaka ruta u posebnom redu, prva kolona je slika, druga kolona naziv, kratak opis, cena, klikom na sliku ili ime odlazi na rutu, na kraju stranice treba da ima dugme koje vodi na sve rute u tom gradu (niste pronasli ono sto trazite? pogledajte celu ponudu tura)
  - dizajn za stranicu konkretne rute, dugme za izmenu koje pretvara podatke rute u formu i dugme za brisanje sa dijalogom za potvrdu, ocene i kod ture se ne menjaju, ubaciti dizajn za ocene (zadatak 2) -->
</template>

<script>
import { db } from "../db"

export default {
  name: "PreporuceneRute",
  data () {
    return {
      atrakcija_id: null,
      atrakcije: []
    }
  },
  async created () {
    await db.ref('gradovi').once('value', (snapshot) => {
      this.getIdAtrakcija(snapshot.val())
    })
    await db.ref('turistickeAtrakcije/' + this.atrakcija_id).orderByChild("ocena").limitToLast(3).once('value', (snapshot) => {
      this.getAtrakcije(snapshot.val())
    })
  },
  methods: {
    getIdAtrakcija(data) {
      const ime = this.$route.params.ime
      Object.entries(data).forEach(([key, value]) => {
        if (value.naziv == ime)
          this.atrakcija_id = value.idAtrakcija
      })
    },
    getAtrakcije(data) {
      Object.entries(data).forEach(([key, value]) => {
        this.atrakcije.push({
          id: key,
          atrakcija: value
        })
      })
    }
  }
}
</script>

<style>

</style>