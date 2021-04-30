var app = new Vue({

    el: "#root",

    data: {
        // Popular Movie set in homepage
        popularMovie: [],
    },
    
    methods: {

    },

    mounted() {
        axios
        .get('https://api.themoviedb.org/3/movie/popular?api_key=e205f242d3393f38b4790265be507509&language=it-IT&page=1')
        .then((response) => {
            this.popularMovie = response.data.results;
            console.log(this.popularMovie)
        });
    }
})
