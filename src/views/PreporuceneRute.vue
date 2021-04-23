<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="mb-5">
        <v-card class="pt-5" flat>
          <v-card-text class="text-uppercase light-blue darken-3">
            <span style="color: lightblue">Preporucene ture za </span>
            <span style="color: white">{{this.$route.params.ime}}</span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row v-for="atrakcija in atrakcije" :key="atrakcija.naziv" class="mb-5 mt-5">
      <v-col xl="3" sm="5" cols="12" class="">
        <router-link :to="{ 
          name: 'Ruta', 
          params: { id: atrakcija.id }}"       
          style="text-decoration: none">
          <v-img :src="atrakcija.atrakcija.slika" max-height="250px"></v-img>
        </router-link>
      </v-col>

      <v-col xl="5" sm="7" cols="12" class="py-0">
        <v-card flat>
          <v-card-title class="mb-3 pl-0">
            <router-link :to="{ 
              name: 'Ruta', 
              params: { id: atrakcija.id }}"       
              style="text-decoration: none">
                {{atrakcija.atrakcija.naziv}}
            </router-link>
          </v-card-title>
          <v-card-text class="pl-0 pt-0">
            <strong>Cena:</strong> {{atrakcija.atrakcija.cena}}din
          </v-card-text>
          <v-card-text class="pl-0 pt-0">
            {{atrakcija.atrakcija.kratakOpis}}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col cols="12" class="mb-5">
        <v-card class="pt-5" flat>
          <v-card-text class="text-title light-blue darken-3">
            <span style="color: lightblue">Niste nasli nista sto vas zanima? Pogledajte punu ponudu! </span>
            <router-link :to="{ 
              name: 'Grad', 
              params: { ime: this.$route.params.ime }}"       
              style="text-decoration: none; color: white"
              class="ml-2">
                Pogledaj
            </router-link>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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