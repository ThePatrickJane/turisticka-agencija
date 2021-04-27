<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="mb-3">
        <v-card class="pt-5 mx-auto" flat max-width="600px">
          <v-card-text class="text-uppercase text-h4 text-center light-blue darken-3">
            <span style="color: white">{{this.$route.params.ime}}</span>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" class="text-center mb-5">
        <router-link 
          :to="{name: 'PreporuceneRute', params: { ime: this.$route.params.ime }}"
          style="text-decoration: none"
        >
          <v-btn color="light-blue darken-4" text>
            Preporucene ture
            <v-icon right>
              mdi-chevron-right
            </v-icon>
          </v-btn>
        </router-link>
      </v-col>
    </v-row>
    <v-row>
      <v-col lg="3" md="6" sm="6" cols="12" v-for="atrakcija in atrakcije" :key="atrakcija.naziv">
        <v-card height="100%" style="padding-bottom: 50px">

          <v-img
            height="250"
            :src="atrakcija.atrakcija.slika"
          ></v-img>

          <v-card-text class="text-h6 blue--text text-center">{{atrakcija.atrakcija.naziv}}</v-card-text>

          <v-card-text>
            <v-row
              justify="center"
              class="mx-0"
            >
              <v-rating
                :value="atrakcija.atrakcija.ocena"
                color="amber"
                dense
                half-increments
                readonly
                size="20"
                class="pl-0"
              ></v-rating>
            </v-row>

            <v-row justify="center">
              <div class="amber--text mb-4">
                {{atrakcija.atrakcija.ocena}}
              </div>
            </v-row>

            <div class="mt-4 mb-2 subtitle-1">
              <strong>Cena</strong>: {{atrakcija.atrakcija.cena}}
            </div>

            <!-- <div class="mb-2 subtitle-1">
              Jezik vodica: {{atrakcija.atrakcija.jezikVodica || "Nema tog podatka"}}
            </div> -->

            <div class="mt-2 mb-4 subtitle-1">
              <strong>Tip</strong>: {{atrakcija.atrakcija.tip || "Nema tog podatka"}}
            </div>

            <div>{{atrakcija.atrakcija.kratakOpis}}</div>
          </v-card-text>

          <v-card-actions style="position: absolute; bottom: 0">
            <v-btn bottom color="light-blue darken-4" text :to="{ 
            name: 'Ruta', 
            params: { id: atrakcija.id }}">
              Detalji
              <v-icon right>
                mdi-chevron-right
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { db } from "../db"

export default {
  name: "Grad",
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
    await db.ref('turistickeAtrakcije/' + this.atrakcija_id).once('value', (snapshot) => {
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