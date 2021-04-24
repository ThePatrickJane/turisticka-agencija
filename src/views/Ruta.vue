<template>
  <v-container>
    <v-row v-if="ruta" class="mt-5">
      <v-col sm="5" cols="12">
        <v-card flat>
          <v-img :src="ruta.slika" max-height="250px"></v-img>
          <v-card-text class="text-capitalize pl-0 blue--text text-h6">
            <span>{{ruta.naziv}}</span>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="pl-0 my-0 py-0">
            <strong>Kod ture</strong>: {{ruta.kod}}
          </v-card-text>
          <v-card-text class="pl-0 my-0 py-0">
            <strong>Cena</strong>: {{ruta.cena}} dinara
          </v-card-text>
          <v-card-text class="pl-0 my-0 py-0">
            <strong>Tip</strong>: {{ruta.tip}}
          </v-card-text>
          <v-card-text class="pl-0 my-0 py-0">
            <strong>Maksimalan broj osoba</strong>: {{ruta.maxOsobe}}
          </v-card-text>
          <v-card-text class="pl-0 my-0 py-0">
            <strong>Maksimalan broj osoba</strong>: {{ruta.maxOsobe}}
          </v-card-text>
          <v-card-text class="pl-0 my-0 py-0">
            <strong>Trajanje</strong>: {{ruta.trajanje}}h
          </v-card-text>
          <!-- <v-card-text class="pl-0 my-0 py-0">
            <strong>Jezik vodica</strong>: {{ruta.jezikVodica || "Nema tog podatka"}}
          </v-card-text> -->
          <v-card-text class="pl-0 my-0 py-0">
            <strong>Adresa polaska</strong>: {{ruta.adresaPolaska}}
          </v-card-text>
        </v-card>
      </v-col>

      <v-col sm="7" cols="12">
        <v-card class="pl-0 pt-0" flat>
          <v-card-text class="black--text pt-0 pl-0">
            {{ruta.opis}}
          </v-card-text>


        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { db } from "../db"

export default {
  name: "Ruta",
  data () {
    return {
      ruta: null
    }
  },
  async created () {
    await db.ref('turistickeAtrakcije').once('value', (snapshot) => {
      this.getRuta(snapshot.val())
    })
  },
  methods: {
    getRuta(data) {
      let id = this.$route.params.id
      let atrakcije = []

      for (let el in data) {
        atrakcije.push(data[el]) 
      }
      
      atrakcije.forEach(atrakcija => {
        if (atrakcija.hasOwnProperty(id))
          this.ruta = atrakcija[id]
      })
    }
  }
}
</script>

<style>

</style>