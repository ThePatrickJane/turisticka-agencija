<template>
  <v-container>
    {{ruta}}
  </v-container>
</template>

<script>
import { db } from "../db"

export default {
  name: "Ruta",
  data () {
    return {
      ruta: null
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
    }
  }
}
</script>

<style>

</style>