const app = Vue.createApp({
    data(){
        return {
            url: "https://www.artstation.com/arteshok",
            showBooks: true,
            books:[
                {title: "book 1", author: "author 1", isFav: true},
                {title: "book 2", author: "author 2", isFav: false},
                {title: "book 3", author: "author 3", isFav: true}
            ],
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount("#app")

// Challenge - Add to Favs
//   - attach a click event to each li tag (for each book)
//   - when a user clicks an li, toggle the 'isFav' property of that book