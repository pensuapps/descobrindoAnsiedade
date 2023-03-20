<template>
  <v-container
    class="fill-height d-flex flex-column justify-space-between content-size"
  >
    <div class="full-width">
      <v-img
        src="../assets/about.png"
        max-height="212"
        max-width="328"
        cover
        class="bg-grey-lighten-2 rounded-lg mx-auto"
      ></v-img>

      <article class="text-justify mt-3">
        A ansiedade acontece quando a gente fica nervoso esperando que algo
        aconteça e nem sempre essa coisa acontece. A gente não consegue
        controlar isso totalmente, mas podemos sentir que está acontecendo, e
        tentar ficar calmo e tranquilo, respirando fundo e se concentrando no
        que está acontecendo neste momento, agora!
      </article>

      <p class="mt-3">
        Quer saber mais?
        <a class="red--text" @click="goToVideo1">
          https://www.youtube.com/watch?v=Y8bw1ahAV44
        </a>
      </p>
      <p>
        Para os pais
        <a class="red--text" @click="goToVideo2">
          https://www.youtube.com/watch?v=fC9CrACfjaQ
        </a>
      </p>
    </div>
    <div class="full-width grid-3" v-if="showButtons">
      <div class="d-flex flex-column align-center" @click="handleButton">
        <v-btn icon="mdi-thumb-up" variant="flat" color="#3174CC"> </v-btn>
        <p class="text-center">Entendi</p>
      </div>
      <div class="d-flex flex-column align-center" @click="handleButton">
        <v-btn icon="mdi-lightbulb" variant="flat" color="#94BF36"> </v-btn>
        <p class="text-center">Interessante</p>
      </div>
      <div class="d-flex flex-column align-center" @click="handleButton">
        <v-btn icon="mdi-thumb-down" variant="flat" color="#BF3A22"> </v-btn>
        <p class="text-center">Não Entendi</p>
      </div>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'AboutView',
    data: () => ({
      showButtons: true,
    }),
    methods: {
      handleButton() {
        this.showButtons = false
      },
      goToVideo1() {
        window.open('https://www.youtube.com/watch?v=Y8bw1ahAV44', '_blank')
      },
      goToVideo2() {
        window.open('https://www.youtube.com/watch?v=fC9CrACfjaQ', '_blank')
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

  .grid-3 {
    display: grid !important;
    grid-template-columns: 1fr 1fr 1fr;
  }

  a {
    text-decoration: underline;
  }
</style>
