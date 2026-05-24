<template>
  <v-app class="background-purple">
    <v-app-bar app flat dense color="#521ba6">
      <v-container>
        <v-icon icon="mdi-arrow-left" color="white" @click="goHome"></v-icon>
      </v-container>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'App',

    methods: {
      goHome() {
        if (this.$route.path == '/') {
          window.open('https://explorandominhamente.netlify.app/')
        }

        this.$router.push('/')
      },
    },
  }
</script>

<style>
  .background-purple {
    background: radial-gradient(circle, #6b23d9, #521ba6) !important;
    background-repeat: no-repeat !important;
    -webkit-font-smoothing: antialiased !important;
    color: white !important;
  }
</style>
