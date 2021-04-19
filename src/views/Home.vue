<template>
  <div class="home">
    <v-parallax
      dark
      height="300"
      :src="require('@/assets/banner.jpg')"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="text-center"
          cols="12"
        >
          <h1 class="display-1 font-weight-thin mb-5">
            Pogledajte ponudu
          </h1>
          <v-btn text color="white" @click="$vuetify.goTo('#grad')">
            <v-icon>mdi-arrow-down</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-parallax>

    <div id="grad" style="height: 800px">
      <v-card dark tile flat color="light-blue darken-4">
        <v-card-title>
          <v-icon class="mx-3">mdi-city-variant</v-icon>
          Gradovi
        </v-card-title>
      </v-card>

      <v-container>
        <v-row class="pa-5">
          <v-col lg="3" md="4" sm="6" cols="12" v-for="i in 10" :key="i">
            <v-card class="mx-auto">
              <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"></v-img>

              <v-card-title class="text-capitalize">
                <span>Ime grada</span>
              </v-card-title>

              <v-divider></v-divider>

              <v-card-subtitle>
                Broj turistickih ruta: 13
              </v-card-subtitle>

              <v-card-actions>
                <v-btn color="light-blue darken-4" text>
                  Detalji
                  <v-icon right>
                    mdi-chevron-right
                  </v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <!-- <v-col lg="3" md="4" sm="6" cols="12">
            <v-card>
              <v-card-title>text1</v-card-title>
            </v-card>
          </v-col>
          <v-col lg="3" md="4" sm="6" cols="12">
            <v-card>
              <v-card-title>text1</v-card-title>
            </v-card>
          </v-col>
          <v-col lg="3" md="4" sm="6" cols="12">
            <v-card>
              <v-card-title>text1</v-card-title>
            </v-card>
          </v-col>
          <v-col lg="3" md="4" sm="6" cols="12">
            <v-card>
              <v-card-title>text1</v-card-title>
            </v-card>
          </v-col>
          <v-col lg="3" md="4" sm="6" cols="12">
            <v-card>
              <v-card-title>text1</v-card-title>
            </v-card>
          </v-col>
          <v-col lg="3" md="4" sm="6" cols="12">
            <v-card>
              <v-card-title>text1</v-card-title>
            </v-card>
          </v-col> -->
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
      
    }
  },
  created () {
    // db.ref('korisnici').on('value', (snapshot) => {
    //   this.korisnici = snapshot.val()
    // })
  }
}
</script>
