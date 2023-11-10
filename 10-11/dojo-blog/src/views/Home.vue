<template>
  <div>
    <h1>Computed properties</h1>
    <input type="text" v-model="search">
    <p>search:{{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
    {{ name }}
    </div>
    <button @click="handleClick">stop watching</button>

    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
        <PostList v-if="showPosts" :posts="posts"/>
    </div>
    <div v-else>
        Loading...
    </div>
    
    <button @click="togglePosts">toggle posts</button>
    <button @click="posts.pop()">delete post</button>

</div>
  
</template>

<script>
import {computed, ref, watch, watchEffect} from 'vue'
import PostList from '../components/PostList.vue'

import getPosts from '../composables/getPosts'

export default {
    name: 'Home',
    components: {PostList},
    setup() {
        const showPosts = ref(true)
        const togglePosts = () => {
            showPosts.value = !showPosts.value
            console.log('toogle showPost')
            console.log(showPosts)
            
        }
        const { posts, error, load} = getPosts()
        load()

        const search = ref('')
        const names = ref(['valerii','dmytro','tyler','sveta','tanya','nastia','cringe'])

        const stopWatch = watch(search, () => {
            console.log('watch function ran')
        })

        const stopEffect = watchEffect(() => {
            console.log('watchEffect ran', search.value)
            console.log(names.value)
        })


        const matchingNames = computed(() => {
                return names.value.filter((name) => name.includes(search.value))
        })

        const handleClick = () => {
            stopWatch()
            stopEffect()
        }

        return { names, search, matchingNames, handleClick, posts, showPosts, togglePosts, error }
    }
}
</script>

<style>

body {
    padding: 20pt 80pt;
}
</style>