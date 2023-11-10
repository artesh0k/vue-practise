import {ref} from 'vue'


const getPosts = () => {
    const posts = ref([
        // { title: 'welcome to the blog', body: 'Justo nec ultrices dui sapien eget mi proin sed libero. Proin nibh nisl condimentum id venenatis. Parturient montes nascetur ridiculus mus mauris. Ornare arcu odio ut sem nulla pharetra diam. Sit amet porttitor eget dolor morbi non arcu. Id ornare arcu odio ut sem nulla pharetra diam sit. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Ipsum consequat nisl vel pretium lectus. Morbi tristique senectus et netus et malesuada fames. Ultrices eros in cursus turpis massa. Praesent semper feugiat nibh sed pulvinar proin gravida. Aliquam etiam erat velit scelerisque. Scelerisque in dictum non consectetur a erat nam at lectus. Nunc id cursus metus aliquam eleifend mi in nulla posuere. Malesuada proin libero nunc consequat interdum varius sit amet mattis.', id: 1 },
        // { title: 'top 5 css tips', body: 'Lorem ipsum', id: 2 }
    ])
    const error = ref(null)

    const load = async () => {
        try {
            let data = await fetch('http://localhost:3000/posts')
            if (!data.ok) {
                throw Error ('no data available')
            }
            console.log(data)
            posts.value = await data.json()
        }
        catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return { posts, error, load}
}

export default getPosts