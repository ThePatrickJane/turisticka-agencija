<template>
  <v-container>
    <v-card max-width="600px" class="mx-auto my-4">
      <v-card-text>
        <v-form ref="editForm">
          <v-container>
            <v-row style="background-color: lightblue" id="naslov" class="mb-3">
              <v-col>Profil: {{korisnik.username}}</v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="korisnik.username"
                  disabled
                  dense
                  label="Korisnicko ime"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  :rules="passwordRule"
                  v-model="korisnik.password"
                  dense
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show ? 'text' : 'password'"
                  label="Lozinka"
                  @click:append="show = !show"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-text-field v-model="korisnik.ime" dense label="Ime" :rules="emptyRule"></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field v-model="korisnik.prezime" dense label="Prezime" :rules="emptyRule"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="korisnik.email" dense label="Email" :rules="emailRule"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="7">
                <v-text-field v-model="korisnik.adresa" dense label="Adresa stanovanja" :rules="emptyRule"></v-text-field>
              </v-col>
              <v-col cols="5">
                <v-text-field 
                  v-model="korisnik.telefon"
                  placeholder="06xxxxxxxx"
                  dense 
                  label="Telefon" 
                  :rules="phoneRule"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-menu
                  v-model="menu"
                  transition="scale-transition"
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      prepend-icon="mdi-calendar"
                      :rules="emptyRule"
                      dense
                      v-model="korisnik.datumRodjenja"
                      label="Datum rodjenja"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="korisnik.datumRodjenja" no-title></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-btn color="blue darken-1" dark depressed tile @click="saveValidate">Sacuvaj</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { db } from "../db"

export default {
  name: 'Profil',
  data () {
    return {
      korisnici: null,
      korisnik: null,
      show: false,
      menu: false,
      date: '',
      emptyRule: [
        v => !!v || 'Polje ne sme biti prazno'
      ],
      passwordRule: [
        v => !!v || 'Polje ne sme biti prazno',
        v => (v && v.length >= 8) || 'Minimum je 8 karaktera',
      ],
      emailRule: [
        v => !!v || 'Polje ne sme biti prazno',
        v => /.+@.+\..+/.test(v) || 'E-mail nije validan',
      ],
      phoneRule: [
        v => !!v || 'Polje ne sme biti prazno',
        v => /^06(([0-6]|[8-9])\d{6,7}|(77|78)\d{5,6}){1}$/.test(v) || 'Broj telefona nije validan',
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
      const korisnicko_ime = this.$route.params.korisnicko_ime
      Object.entries(data).forEach(([key, value]) => {
        if (value.username == korisnicko_ime)
          this.korisnik = value
      })
    },
    saveValidate() {
      let naslov = document.getElementById("naslov")

      if (this.$refs.editForm.validate()) 
        naslov.style.backgroundColor = "lightgreen"
      else 
        naslov.style.backgroundColor = "rgb(224, 79, 79)"
    }
  }
}
</script>

<style>

</style>