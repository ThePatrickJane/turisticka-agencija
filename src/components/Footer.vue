<template>
  <v-footer padless color="blue darken-4">
    <v-col
      class="text-center"
      cols="12"
      style="color: white"
    >
      {{ new Date().getFullYear() }} — <strong class="text-uppercase">Dijamant</strong> 
      <span style="color: lightblue">turizma</span>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style>

</style>