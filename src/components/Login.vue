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
              <v-row style="background-color: lightblue" class="my-2">
                <v-col>Prijava</v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    :rules="usernameRule"
                    dense
                    label="Korisnicko ime"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
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

export default {
  name: 'Login',
  data () {
    return { 
      dialog: false,
      show: false,
      usernameRule: [
        v => !!v || 'Polje ne sme biti prazno'
      ],
      passwordRule: [
        v => !!v || 'Polje ne sme biti prazno'
      ]
    }
  },
  methods: {
    loginValidate() {
      this.$refs.logForm.validate()
    }
  }
}
</script>

<style>

</style>