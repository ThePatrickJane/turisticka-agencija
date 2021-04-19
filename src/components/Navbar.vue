<template>
  <div>
    <v-app-bar color="blue darken-2" dark height="70">
      <v-toolbar-title class="text-uppercase">
        <span class="text-h4">Turisticka</span>
        <span style="color: lightblue" class="">agencija</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <Register class="hidden-xs-only" />
      <Login class="hidden-xs-only" />
      <v-app-bar-nav-icon class="hidden-sm-and-up" @click="drawer = true"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary color="blue darken-2" dark>
      <v-row class="pt-5">
        <v-col cols="12">
          <Login />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <Register />
        </v-col>
      </v-row>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Login from './Login.vue'
import Register from './Register.vue'

export default {
  name: "Navbar",
  components: {
    Login, Register
  },
  data () {
    return {
      drawer: false,
      group: null
    }
  }
}
</script>