<template>
  <div class="home">
      <h1>Home</h1>
      <p ref="p">My name is {{ name }}, i'm {{ age }} years old</p>
      <button @click="handleClick">click me</button>
      <button @click="age++">+</button>
      <input type="text" v-model="name">
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'HomeView',
  setup() {
    console.log('setup')

    const p = ref(null)

    const name = ref('valerii')
    const age = ref(19)

    const handleClick = () => {
      // console.log(p, p.value)
      // p.value.classList.add('test')
      // p.value.textContent = 'hello, ninjas'
      name.value = 'oliver'
      age.value = 25
    }

    return {name, age, handleClick, p}
  }
}
</script>
