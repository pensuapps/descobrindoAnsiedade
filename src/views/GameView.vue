<template>
  <v-container
    class="fill-height d-flex flex-column justify-space-between content-size"
  >
    <template v-if="!showResult">
      <div class="full-width">
        <v-img
          :src="require(`../assets/${currentQuestion.img}.png`)"
          max-height="212"
          max-width="328"
          cover
          class="bg-grey-lighten-2 rounded-lg mx-auto"
        ></v-img>

        <h3 class="text-justify mt-3">
          {{ currentQuestion.text }}
        </h3>
      </div>
      <div class="full-width d-flex justify-space-between">
        <div>
          <v-btn
            icon="mdi-thumb-up"
            variant="flat"
            color="#94BF36"
            @click="handleAnswer(1)"
          >
          </v-btn>
          <p class="text-center">Sim</p>
        </div>

        <div>
          <v-btn
            icon="mdi-thumb-down"
            variant="flat"
            color="#BF3A22"
            @click="handleAnswer(0)"
          >
          </v-btn>
          <p class="text-center">Não</p>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="full-width">
        <v-img
          src="../assets/end.png"
          max-height="212"
          max-width="328"
          cover
          class="bg-grey-lighten-2 rounded-lg mx-auto"
        ></v-img>

        <h3 class="text-justify mt-3">
          <template v-if="score < 6">
            <span
              >Você parece estar se divertindo e aprendendo coisas legais na
              escola, continue assim!</span
            >
          </template>
          <template v-else>
            <span
              >Você deve conversar com seus pais e professores sobre o que
              acontece na escola.</span
            >
          </template>
        </h3>
      </div>
      <div class="full-width">
        <div class="d-flex justify-space-between" v-if="showLikeButtons">
          <v-btn
            icon="mdi-thumb-up"
            fab
            depressed
            variant="flat"
            color="#3174CC"
            dark
            @click="handleLike"
          >
          </v-btn>
          <v-btn
            icon="mdi-thumb-down"
            variant="flat"
            color="#BF3A22"
            @click="handleLike"
          >
          </v-btn>
        </div>
        <a class="text-center" @click="goToAbout">Ficou curioso? Clica aqui</a>
      </div>
    </template>
  </v-container>
</template>

<script>
  import { depressionQuestions } from '../data/questions'

  export default {
    name: 'GameView',
    data: () => ({
      questionIndex: 0,
      score: 0,
      showResult: false,
      showLikeButtons: true,
    }),
    computed: {
      currentQuestion() {
        return depressionQuestions.questions[this.questionIndex]
      },
      lastQuestion() {
        return this.questionIndex + 1 === depressionQuestions.questions.length
      },
    },
    watch: {
      questionIndex() {
        if (this.lastQuestion) {
          this.showResult = true
        }
      },
    },
    methods: {
      handleAnswer(value) {
        this.score += value
        if (!this.lastQuestion) {
          this.questionIndex++
        }
      },
      handleLike() {
        this.showLikeButtons = false
      },
      goToAbout() {
        this.$router.push('/sobre')
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
    display: block;
    color: white;
  }
</style>
