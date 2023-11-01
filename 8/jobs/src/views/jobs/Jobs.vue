<template>
    <!-- eslint-disable vue/no-multiple-template-root -->
    <h1>Jobs</h1>
    <div class="job" v-for="job in jobs" :key="job.id">
        <router-link :to="{name: 'JobDetails', params: {id: job.id}}" >
            <h2>{{ job.title }}</h2>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                { title: 'Web Designer', id: 1, description: 'im a good designer' },
                { title: 'Web Developer', id: 2, description: 'im a good developer' },
                { title: 'Manager', id: 3, description: 'im a good manager' }

            ]
        }
    }
}
</script>

<style>
.job h2 {
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
}

.job h2:hover {
    background: #ddd;
}

.job a {
    text-decoration: none;
}
</style>