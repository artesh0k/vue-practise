<template>
    <!-- eslint-disable vue/no-multiple-template-root -->
    <h1>Job Details Page</h1>
    <p>The job id is: {{ id }}</p>
</template>

<script>
export default {
    // props can be gotten from jobs route links

    props: ['id'] 
    
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // }
}
</script>

<style>

</style>