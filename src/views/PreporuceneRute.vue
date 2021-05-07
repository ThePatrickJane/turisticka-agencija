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

    <v-container>
      <v-row v-for="atrakcija in atrakcije" :key="atrakcija.naziv" style="margin: 80px 0">

        <!-- <v-col xl="3" sm="5" cols="12">
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
        </v-col> -->

        <v-col lg="3" sm="6" cols="12" class="mx-0 pa-0" align-self="center">
          <v-card class="text-center" flat height="100%">
            <v-card-text class="text-h4 text-center" id="naslov">
              <router-link :to="{ 
                name: 'Ruta', 
                params: { id: atrakcija.id }}"       
                style="text-decoration: none; color: black">
                  {{atrakcija.atrakcija.naziv}}
              </router-link>
              <v-rating
                style="background-color: #d71b3b"
                :value="atrakcija.atrakcija.ocena"
                color="amber"
                dense
                half-increments
                readonly
                size="30"
                class="mt-3"
              ></v-rating>
            </v-card-text>
            
          </v-card>
        </v-col>

        <v-col lg="4" sm="6" cols="12" class="ma-0 pa-0">
          <v-card flat>
            <router-link :to="{ 
              name: 'Ruta', 
              params: { id: atrakcija.id }}"       
              style="text-decoration: none">
              <v-img :src="atrakcija.atrakcija.slika" max-height="350px" height="100%" class="white--text align-end">
                <v-card-text class="grey darken-4">
                  <strong>Cena</strong>: {{atrakcija.atrakcija.cena}}din
                </v-card-text>
              </v-img>
            </router-link>
          </v-card>
        </v-col>

        <v-col lg="5" sm="12" cols="12" class="ma-0 pa-0" align-self="center">
          <v-card flat height="100%" >
            <v-card-text class="text-h5 pa-5" id="opis">
              {{atrakcija.atrakcija.kratakOpis}}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

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
  #naslov {
    background-color: white;
  }

  @media only screen and (max-width: 600px) {
    #naslov {
      background-color: #d71b3b;
      color: white;
    }
  }

  /* @media only screen and (max-width: 960px) {
    #opis {
      border: 1px solid black;
    }
  } */

  @media only screen and (max-width: 1264px) {
    #opis {
      /* border-bottom: 1px solid black;
      border-left: 1px solid black;
      border-right: 1px solid black; */
      border-left: 5px solid orangered;
    }
  }
</style>