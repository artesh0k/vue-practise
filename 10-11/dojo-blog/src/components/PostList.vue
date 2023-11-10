<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
        <SinglePost :post="post"/>
    </div>
    
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue';
import SinglePost from './SinglePost.vue'

export default {
    components: { SinglePost },
    props: ['posts'],
    setup(props) {
        // console.log(props.posts)
        onMounted(() => { console.log('compontent onMpunted') })
        onUnmounted(() => { console.log('compontent onUnmpunted') })
        onUpdated(() => { console.log('component UnUpdated')})
    }  
}
</script>

<style>

</style>