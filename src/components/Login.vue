<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      max-width="400"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          class="mx-2"
          outlined
          dark
          transparent
        >
          Prijava
        </v-btn>
      </template>

      <v-card>
        <v-card-text>
          <v-form ref="logForm">
            <v-container>
              <v-row style="background-color: lightblue" class="my-2" id="log">
                <v-col>Prijava</v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="username"
                    :rules="usernameRule"
                    dense
                    label="Korisnicko ime"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="lozinka"
                    :rules="passwordRule"
                    dense
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show ? 'text' : 'password'"
                    label="Lozinka"
                    @click:append="show = !show"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row v-if="poruka">
                <v-col cols="12">
                  <span class="red--text">{{poruka}}</span>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-btn color="blue darken-1" dark depressed tile @click="loginValidate">Prijavi se</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { db } from "../db"

export default {
  name: 'Login',
  data () {
    return { 
      dialog: false,
      show: false,
      korisnici: [],
      username: null,
      lozinka: null,
      poruka: null,
      usernameRule: [
        v => !!v || 'Polje ne sme biti prazno'
      ],
      passwordRule: [
        v => !!v || 'Polje ne sme biti prazno'
      ]
    }
  },
  created () {
    db.ref('korisnici').on('value', (snapshot) => {
      this.user(snapshot.val())
    })
  },
  methods: {
    user(data) {
      this.korisnici = []
      Object.entries(data).forEach(([key, value]) => {
        this.korisnici.push(value)
      })
    },
    loginValidate() {
      let log = document.getElementById('log')
      let ulogovan = false

      if (this.$refs.logForm.validate()) {

        this.korisnici.every(korisnik => {
          if (korisnik.username == this.username && korisnik.password == this.lozinka) {
            ulogovan = true
            return false
          }
          return true
        })

        if (ulogovan) {
          log.style.backgroundColor = "lightgreen"
          this.poruka = null
        }
        else {
          log.style.backgroundColor = "rgb(224, 79, 79)"
          this.poruka = "Neispravni kredencijali. Pokusajte ponovo."
        }

      }
    }
  }
}
</script>

<style>

</style>