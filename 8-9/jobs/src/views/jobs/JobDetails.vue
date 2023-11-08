<template>
    <!-- eslint-disable vue/no-multiple-template-root -->
    <h1>Job Details Page</h1>
    <p>The job's id is: {{ id }}</p>
    <div v-if="jobDetails">
    <p>Title: {{ jobDetails.title }}</p>
    <p>Id: {{ jobDetails.id }}</p>
    <p>Description: {{ jobDetails.description }}</p>
    </div>
    <div v-else>
        <p>Loading jobs details...</p>
    </div>
</template>

<script>
export default {
    // props can be gotten from jobs route links

    props: ['id'],
    data() {
        return {
            jobDetails: null
        }
    },
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // }
    mounted() {
        fetch("http://localhost:3000/jobs/" + this.id)
            .then(res => res.json())
            .then(data => this.jobDetails = data)
            .catch(err => console.log(err))
    }
}
</script>

<style>

</style>