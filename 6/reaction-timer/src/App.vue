<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <h1>Ninja Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying">play</button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame"></Block>
  <Results v-if="showResults" :score="score"></Results>
  <!-- <p v-if="showResults">reaction time is : {{ score }} ms</p> -->
</template>

<script>
// Challenge 
//  - when the game ends show the Results component
//  - output the score inside the results component

import Block from './components/Block.vue'
import Results from './components/Results.vue'
export default {
  name: 'App',
  components: {Block, Results},
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false
    }
  },
  methods: {
    start() {
      this.delay = 2000 + 5000 * Math.random()
      this.isPlaying = true
      this.showResults = false
      console.log(this.delay)
    },
    endGame(reactionTime) {
      this.score = reactionTime
      this.isPlaying = false
      this.showResults = true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
button {
  background: green;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}

button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}

</style>
