<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="mb-3">
        <v-card class="py-5 mx-auto" flat max-width="600px">
          <v-card-text class="text-uppercase text-h4 text-center light-blue darken-3">
            <span style="color: white">{{this.$route.params.ime}}</span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col lg="3" md="6" sm="6" cols="12" v-for="atrakcija in atrakcije" :key="atrakcija.naziv">
        <v-card>

          <v-img
            height="250"
            :src="atrakcija.atrakcija.slika"
          ></v-img>

          <v-card-title>{{atrakcija.atrakcija.naziv}}</v-card-title>

          <v-card-text>
            <v-row
              align="center"
              class="mx-0"
            >
              <v-rating
                :value="atrakcija.atrakcija.ocena"
                color="amber"
                dense
                half-increments
                readonly
                size="20"
              ></v-rating>

              <div class="amber--text ml-4">
                {{atrakcija.atrakcija.ocena}}
              </div>
            </v-row>

            <div class="mt-4 mb-2 subtitle-1">
              Cena: {{atrakcija.atrakcija.cena}}
            </div>

            <div class="mb-2 subtitle-1">
              Jezik vodica: {{atrakcija.atrakcija.jezikVodica || "Nema tog podatka"}}
            </div>

            <div class="mt-2 mb-4 subtitle-1">
              Tip: {{atrakcija.atrakcija.tip || "Nema tog podatka"}}
            </div>

            <div>{{atrakcija.atrakcija.kratakOpis}}</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <router-link :to="{ 
                name: 'Ruta', 
                params: { naziv: atrakcija.id }}"       
                style="text-decoration: none">
              <v-btn color="light-blue darken-4" text>
                Detalji
                <v-icon right>
                  mdi-chevron-right
                </v-icon>
              </v-btn>
            </router-link>
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
    await db.ref('gradovi').once('value', async (snapshot) => {
      this.getIdAtrakcija(snapshot.val())
    })
    await db.ref('turistickeAtrakcije/' + this.atrakcija_id).once('value', async (snapshot) => {
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
      console.log(this.atrakcije)
    }
  }
}
</script>

<style>

</style>