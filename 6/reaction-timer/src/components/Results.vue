<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <p>Your results:{{score}} ms</p>
  <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
    props: ['score'],
    data() {
        return {
            rank: null
        }
    },
    mounted() {
        if (this.score < 250) {
            this.rank = "lol you are very good"
        } else if (this.score < 400) {
            this.rank = "lol you are good"
        } else {
            this.rank = "try harder!"
        }   
    }
}
</script>

<style>
.rank {
    font-size: 1.4em;
    font-weight: bold;
    color: green;
}
</style>