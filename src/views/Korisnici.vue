<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="korisnici"
      sort-by="ime"
      dense
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>Korisnici</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title>Da li sigurno zelite da obrisete korisnika?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Otkazi</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <router-link :to="{ name: 'Profil', params: { korisnicko_ime: item.username }}" 
          style="text-decoration: none"
        >
          <v-icon class="mr-2">
            mdi-account
          </v-icon>
        </router-link>
        <v-icon
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import { db } from "../db"

export default {
  name: "Korisnici",
  data () {
    return {
      headers: [
        { text: 'Ime', value: 'ime', align: 'start' },
        { text: 'Prezime', value: 'prezime' },
        { text: 'Korisnicko ime', value: 'username' },
        { text: 'E-mail', value: 'email' },
        { text: 'Akcije', value: 'actions', sortable: false },
      ],
      korisnici: [],
      dialogDelete: false,
      editedIndex: -1,
      editedItem: {},
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
    closeDelete () {
      this.dialogDelete = false
    },
    deleteItem (item) {
      this.editedIndex = this.korisnici.indexOf(item)
      this.dialogDelete = true
    },
    deleteItemConfirm () {
      this.korisnici.splice(this.editedIndex, 1)
      this.closeDelete()
    }
  }
}
</script>

<style>

</style>