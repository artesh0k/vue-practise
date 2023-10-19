const app = Vue.createApp({
    // data, functions
    //template:'<h2>I am the template (from vue)</h2>'
    data(){
        return {
            title: "The final empire (from vue)",
            author: "George Oliwer (from vue)",
            age: 45
        }
    },
    methods: {
        changeTitle(title) {
            console.log("you clicked me")
            // this.title = '1984'
            this.title = title
        }
    }
})

app.mount('#app')

const app1 = Vue.createApp({
    data(){
        return {
            showBooks: true,
            title: "The final empire (from vue)",
            author: "George Oliwer (from vue)",
            age: 45
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

app1.mount("#app1")