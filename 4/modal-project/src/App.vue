<template>
  <p>welcome</p>
  <h1>{{title}}</h1>
  <br>
  <input type="text" ref="name">
  <button @click="handleClick">Click me</button>

  <teleport to=".teleported" v-if="showModal">
    <Modal :theme="theme" @close="toggleModal">
      <template v-slot:links>
        <a href="#">click here please</a>
        <br>
        <a href="#">more info</a>
      </template>
      <h1>Sign up for giveaway!</h1>
      <p>hello from Ukraine!</p>
    </Modal>
  </teleport>

  <teleport to=".teleported" v-if="showModalTwo">
    <Modal :theme="theme" @close="toggleModalTwo">
      <h1>Sign up for newspaper!</h1>
      <p>hello from Norway 2!</p>
    </Modal>
  </teleport>

  <br>
  <button @click.alt="toggleModal">show modal 1 (alt)</button>
  <button @click="toggleModalTwo">show modal 2</button>
</template>

<script>
// challenge
//  - create an extra button to open a different modal
//  - use the same modal component but pass in a different template (slot)
//  - use a different method (e.g. toggleModalTwo) and data (e.g. showModalTwo)


import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data() { 
    return {
      title: 'My first vue app :)',
      header: 'Sign up for giveaway!',
      text: 'hello from Ukraine!',
      theme: 'sale',
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
    }
  }

}
</script>

<style>
#app, .teleported{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid blue;
  display: inline-block;
  padding: 10px;
}
</style>
