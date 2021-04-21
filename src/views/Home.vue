<template>
  <div class="home">
    <v-parallax
      dark
      height="300"
      :src="require('@/assets/bannerPLAVA.jpg')"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="text-center"
          cols="12"
        >
          <v-card dark max-width="400" class="mx-auto pa-3" color="rgb(0,0,0,0.3)">
            <h1 class="subheader font-weight-thin mb-5 text-uppercase">
              Pogledajte <br> ponudu
            </h1>
            <v-btn text color="white" @click="$vuetify.goTo('#grad')">
              <v-icon>mdi-arrow-down</v-icon>
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-parallax>

    <div id="grad">
      <v-card dark tile flat color="light-blue darken-4">
        <v-card-title>
          <v-icon class="mx-3">mdi-city-variant</v-icon>
          Gradovi
        </v-card-title>
      </v-card>

      <v-container>
        <v-row class="pa-5">
          <v-col lg="3" md="4" sm="6" cols="12" v-for="grad in gradovi" :key="grad.naziv">
            <v-card class="mx-auto">
              <v-img :src="grad.slika" height="160px"></v-img>

              <v-card-title class="text-capitalize">
                <span>{{grad.naziv}}</span>
              </v-card-title>

              <v-divider></v-divider>

              <v-card-subtitle>
                Broj turistickih atrakcija: {{grad.brojAtrakcija}}
              </v-card-subtitle>

              <v-card-actions>
                <v-btn color="light-blue darken-4" text>
                  Atrakcije
                  <v-icon right>
                    mdi-chevron-right
                  </v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import { db } from "../db"

export default {
  name: 'Home',
  data () {
    return {
      gradovi: []
    }
  },
  created () {
    db.ref('gradovi').on('value', (snapshot) => {
      this.gradovi = snapshot.val()
    })
  }
}
</script>
