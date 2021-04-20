<template>
  <div>
    <v-app-bar color="blue darken-4" dark height="80" flat>
      <router-link to="/">
        <v-img
          class="mr-4 ml-2"
          :src="require('@/assets/logo.png')"
          max-height="35"
          max-width="35"
          contain
        ></v-img>
      </router-link>
      <v-toolbar-title class="text-uppercase">
        <router-link to="/" style="text-decoration: none; color: white">
          <span class="text-h5">Dijamant</span>
          <span style="color: lightblue">turizma</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <Register class="hidden-sm-and-down" />
      <Login class="hidden-sm-and-down" />
      <v-app-bar-nav-icon class="mr-2" @click="drawer = true"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary color="blue darken-4" dark>
      <!-- <v-row class="pt-5">
        <v-col cols="12">
          <Login />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <Register />
        </v-col>
      </v-row> -->
      <v-row class="pt-5">
        <v-col cols="12">
          <v-card
            color="transparent"
            class="mx-auto"
            tile
            flat
          >
            <v-list flat nav>
              <v-subheader class="hidden-md-and-up">Prijava i Registracija</v-subheader>
              <v-list-item-group color="white">
                <v-list-item class="hidden-md-and-up">
                  <v-list-item-icon>
                    <v-icon>mdi-login-variant</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <Login />
                  </v-list-item-content>
                </v-list-item>
                <v-list-item class="hidden-md-and-up">
                  <v-list-item-icon>
                    <v-icon>mdi-account-plus</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <Register />
                  </v-list-item-content>
                </v-list-item>
                <v-divider class="hidden-md-and-up"></v-divider>
                <v-subheader>Korisnici</v-subheader>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-account</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-btn text to="/korisnici">Korisnici</v-btn>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
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