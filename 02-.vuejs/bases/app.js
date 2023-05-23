const app = Vue.createApp({
    // template:`
    // <h1>Hola mundo</h1>
    // <p>Desde app.js</p>
    // `
    method:{},
    watch:{},
    data(){
        return{
            author:"Bruce wayne",
            quote:"I'm batman"
        }
    },
    methods:{
        changeQuote( event ){
            console.log('Hola',event)
            this.author='Alex'
            this.capitalize()
        },
        capitalize(){
            this.quote= this.quote.toUpperCase()
        }
    }

})

app.mount('#myApp')