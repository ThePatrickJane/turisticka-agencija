<template>
  <v-container>
    <v-row v-if="ruta" class="my-5">
      <v-col offset-xl="2" xl="3" sm="5" cols="12">
        <v-card flat>
          <v-img :src="ruta.slika" max-height="250px"></v-img>
          <v-card-text class="pl-0 blue--text text-h6">
            <span>{{ruta.naziv}}</span>
            <v-dialog
              v-model="dialog"
              max-width="600"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-icon 
                  right 
                  color="blue darken-1" 
                  @click="dialog = true" 
                  v-bind="attrs"
                  v-on="on"
                >
                  mdi-pencil</v-icon>
              </template>

              <v-card>
                <v-card-text>
                  <v-form ref="editForm">
                    <v-container>
                      <v-row style="background-color: lightblue" class="my-2" id="edit">
                        <v-col>Izmena ture: {{ruta.kod}}</v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" sm="6">
                          <v-text-field
                            :value="ruta.kod"
                            disabled
                            dense
                            label="Kod ture"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-text-field
                            :value="ruta.naziv"
                            :rules="emptyRule"
                            dense
                            label="Naziv ture"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" sm="6">
                          <v-text-field
                            :value="ruta.adresaPolaska"
                            :rules="emptyRule"
                            dense
                            label="Adresa polaska"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-select
                            dense
                            :items="tipovi"
                            label="Tip ture"
                            :value="ruta.tip"
                            :rules="emptyRule"
                          ></v-select>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" sm="4">
                          <v-text-field
                            type="number"
                            :value="ruta.cena"
                            :rules="zeroRule"
                            dense
                            label="Cena (u dinarima)"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="4">
                          <v-text-field
                            type="number"
                            :value="ruta.maxOsobe"
                            :rules="zeroRule"
                            dense
                            label="Maksimalan broj osoba"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="4">
                          <v-text-field
                            type="number"
                            :value="ruta.trajanje"
                            :rules="zeroRule"
                            dense
                            label="Trajanje ture (u minutima)"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          <v-textarea
                            label="Opis"
                            :value="ruta.opis"
                            :rules="emptyRule"
                          ></v-textarea>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          <v-textarea
                            label="Kratki opis"
                            :value="ruta.kratakOpis"
                            :rules="emptyRule"
                          ></v-textarea>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          <v-btn color="blue darken-1" dark depressed tile @click="dialog = false">Otkazi</v-btn>
                          <v-btn color="blue darken-1" dark depressed tile @click="saveValidate" class="ml-3">Sacuvaj</v-btn>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-dialog>
            <v-dialog
              v-model="deleteDialog"
              width="500"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-icon 
                  right 
                  color="blue darken-1" 
                  @click="deleteDialog = true" 
                  v-bind="attrs"
                  v-on="on"
                >
                  mdi-delete</v-icon>
              </template>

              <v-card class="pt-4">
                <v-card-text class="text-center">Da li sigurno zelite da obrisete turu?</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="deleteDialog = false">Otkazi</v-btn>
                  <v-btn color="blue darken-1" text @click="openSnackbar">OK</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-snackbar v-model="snackbar">
              <span>
                Uspesno ste izbrisali turu. Bicete preusmereni na pocetnu stranicu.
              </span>
              <template v-slot:action="{ attrs }">
                <v-btn
                  color="pink"
                  text
                  v-bind="attrs"
                  @click="snackbar = false"
                >
                  Zatvori
                </v-btn>
              </template>
            </v-snackbar>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="pl-0 mb-0 mt-3 py-0">
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
            <strong>Trajanje</strong>: {{ruta.trajanje}} minuta
          </v-card-text>
          <!-- <v-card-text class="pl-0 my-0 py-0">
            <strong>Jezik vodica</strong>: {{ruta.jezikVodica || "Nema tog podatka"}}
          </v-card-text> -->
          <v-card-text class="pl-0 my-0 py-0">
            <strong>Adresa polaska</strong>: {{ruta.adresaPolaska}}
          </v-card-text>
        </v-card>
      </v-col>

      <v-col xl="5" sm="7" cols="12">
        <v-card class="pl-0 pt-0" flat>
          <v-card-text class="pt-0 pl-0 text-justify">
            <strong>Opis</strong>: {{ruta.opis}}
          </v-card-text>

          <v-card flat>
            <v-card-text class="pl-0">
              <strong>Prosecna ocena</strong>: {{ruta.ocena}} ({{ruta.ocene.reduce((a, b) => a + b, 0)}} ocena)
              <v-rating
                :value="ruta.ocena"
                color="amber"
                dense
                half-increments
                readonly
                size="20"
                class="pl-0 ml-0"
              ></v-rating>
            </v-card-text>
            <div
              v-for="(ocena, index) in ruta.ocene"
              :key="index"
            >
              <span class="font-weight-light caption">{{index + 1}} zvezdica</span>
              <v-progress-linear
                style="width: 60%"
                :buffer-value="ruta.ocene.reduce((a, b) => a + b, 0) * 2"
                :value="ocena * 2"
                height="15px"
                :color="boje[index]"
                background-color="rgb(207, 207, 207)"
              >
                <span class="font-weight-light caption">{{ocena}}</span>
              </v-progress-linear>
            </div>
          </v-card>

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
      ruta: null,
      dialog: false,
      deleteDialog: false,
      snackbar: false,
      tipovi: ['Panoramsko razgledanje', 'Krstarenje', 'Pesacka', 'Biciklisticka'],
      boje: ['red', 'purple', 'blue', 'yellow', 'green'],
      emptyRule: [
        v => !!v || 'Polje ne sme biti prazno',
        v => (v.trim() != '') || 'Polje ne sme sadrzati samo razmake'
      ],
      zeroRule: [
        v => (v != 0 && v > 0)|| 'Vrednost mora biti veca od nule',
      ]
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
    },
    saveValidate() {
      let edit = document.getElementById("edit")

      if (this.$refs.editForm.validate()) {
        edit.style.backgroundColor = "lightgreen"
        setTimeout(() => { 
          this.dialog = false
        }, 2000)
      }
      else 
        edit.style.backgroundColor = "rgb(224, 79, 79)"
    },
    openSnackbar() {
      this.deleteDialog = false
      this.snackbar = true
      setTimeout(() => { 
        this.snackbar = false
        this.$router.push('/')
      }, 3000)
    }
  }
}
</script>

<style>

</style>