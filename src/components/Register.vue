<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      max-width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          class="mx-2"
          text
        >
          Registracija
        </v-btn>
      </template>

      <v-card>
        <v-card-text>
          <v-form ref="regForm">
            <v-container>
              <v-row style="background-color: lightblue" class="mt-2" id="reg">
                <v-col>Registracija</v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    :rules="emptyRule"
                    dense
                    label="Korisnicko ime"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    :rules="passwordRule"
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
                  <v-text-field dense label="Ime" :rules="emptyRule"></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field dense label="Prezime" :rules="emptyRule"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field dense label="Email" :rules="emailRule"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="7">
                  <v-text-field dense label="Adresa stanovanja" :rules="emptyRule"></v-text-field>
                </v-col>
                <v-col cols="5">
                  <v-text-field 
                    prefix="+381" 
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
                        v-model="date"
                        label="Datum rodjenja"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" no-title></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-btn color="blue darken-1" dark depressed tile @click="registerValidate">Registruj se</v-btn>
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
export default {
  name: 'Register',
  data () {
    return { 
      dialog: false,
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
        v => /^6(([0-6]|[8-9])\d{7}|(77|78)\d{6}){1}$/.test(v) || 'Broj telefona nije validan',
      ]
    }
  },
  methods: {
    registerValidate() {
      let reg = document.getElementById("reg")

      if (this.$refs.regForm.validate()) 
        reg.style.backgroundColor = "lightgreen"
      else 
        reg.style.backgroundColor = "rgb(224, 79, 79)"
    }
  }
}
</script>

<style>

</style>