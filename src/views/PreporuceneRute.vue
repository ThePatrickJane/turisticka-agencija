<template>
  <v-container>
    {{this.$route.params.ime}}
    {{atrakcije}}
  </v-container>
</template>

<script>
import { db } from "../db"

export default {
  name: "PreporuceneRute",
  data () {
    return {
      atrakcija_id: null,
      atrakcije: []
    }
  },
  async created () {
    await db.ref('gradovi').once('value', (snapshot) => {
      this.getIdAtrakcija(snapshot.val())
    })
    await db.ref('turistickeAtrakcije/' + this.atrakcija_id).limitToFirst(3).once('value', (snapshot) => {
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
        this.atrakcije.push({
          id: key,
          atrakcija: value
        })
      })
    }
  }
}
</script>

<style>

</style>