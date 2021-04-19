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
          <v-form>
            <v-container>
              <v-row style="background-color: lightblue" class="mt-2">
                <v-col>Registracija</v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    dense
                    label="Korisnicko ime"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
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
                  <v-text-field dense label="Ime"></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field dense label="Prezime"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field dense label="Email"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field dense label="Adresa stanovanja"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <v-text-field dense label="Telefon"></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-menu
                    v-model="menu"
                    transition="scale-transition"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
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
                  <v-btn color="blue darken-1" dark depressed tile>Registruj se</v-btn>
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
      date: ''
    }
  }
}
</script>

<style>

</style>