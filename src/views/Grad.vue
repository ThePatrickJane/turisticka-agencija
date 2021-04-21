<template>
  <v-container>
    {{atrakcije}}
  </v-container>
</template>

<script>
import { db } from "../db"

export default {
  name: "Grad",
  data () {
    return {
      atrakcija_id: null,
      atrakcije: []
    }
  },
  async created () {
    await db.ref('gradovi').once('value', async (snapshot) => {
      this.getIdAtrakcija(snapshot.val())
    })
    await db.ref('turistickeAtrakcije/' + this.atrakcija_id).once('value', async (snapshot) => {
      this.getAtrakcije(snapshot.val())
    })
  },
  methods: {
    getIdAtrakcija(data) {
      const ime = this.$route.params.ime
      Object.entries(data).forEach(([key, value]) => {
        if (value.naziv == ime)
          this.atrakcija_id = value.idAtrakcija
      })
    },
    getAtrakcije(data) {
      Object.entries(data).forEach(([key, value]) => {
        this.atrakcije.push(value)
      })
    }
  }
}
</script>

<style>

</style>