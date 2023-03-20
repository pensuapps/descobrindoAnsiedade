<template>
  <v-container
    class="fill-height d-flex flex-column justify-space-around content-size"
  >
    <div class="full-width">
      <v-img
        src="../assets/home.jpeg"
        cover
        class="bg-grey-lighten-2 rounded-lg mx-auto"
      ></v-img>

      <article class="text-justify mt-3">
        Olá, vamos saber como você se sente na escola, e com os amiguinhos (as)?
      </article>
    </div>
    <div class="full-width">
      <v-btn
        @click="pushToGame"
        class="mt-3"
        variant="outlined"
        size="large"
        block
        rounded
        dark
      >
        Vamos lá?
      </v-btn>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'HomeView',

    methods: {
      pushToGame() {
        this.$router.push('jogar')
      },
    },
  }
</script>

<style scoped>
  .content-size {
    max-width: 328px;
    margin: auto;
  }

  .full-width {
    width: 100%;
  }
</style>
