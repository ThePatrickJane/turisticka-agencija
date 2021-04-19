<template>
  <div class="home">
    
  </div>
</template>

<script>
import { db } from "../db"

export default {
  name: 'Home',
  data () {
    return {
      
    }
  },
  created () {
    // db.ref('korisnici').on('value', (snapshot) => {
    //   this.korisnici = snapshot.val()
    // })
  }
}
</script>
