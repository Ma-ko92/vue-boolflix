var app = new Vue({

    el: "#root",

    data: {
        // Popular Movie set in homepage
        popularMovie: [],

        // User input
        search:'',

        // Search Filter Movie
        filteredMovie: [],

        // Language array
        language:[
            "en",
            "de",
            "it",
            "ja",
            "fr",
            "es",
            "zh",
            "ru"

        ],

        // Cover image
        cover:"https://image.tmdb.org/t/p/w780"
    },
    
    methods: {
        // this function cleans the array created by the search and re-displays popular movies.
        // it's a kind of homepage call
        home() {
            return this.filteredMovie = [];
        },

        // this function will start when the button is clicked, and will insert in an array
        // the list of objects containing the film searched by the user.
        startSearch()   {
            // This get the movie searched.
            axios
            .get('https://api.themoviedb.org/3/search/movie/?api_key=e205f242d3393f38b4790265be507509&language=it-IT',{
                params : {
                    query : this.search
                }
            })
            .then((response) => {
                this.filteredMovie = response.data.results;
                // this refresh the search input.
                this.search = '';  
            });
            
            // This get the TvShow searched.
            axios
            .get('https://api.themoviedb.org/3/search/tv/?api_key=e205f242d3393f38b4790265be507509&language=it-IT',{
                params : {
                    query : this.search
                }
            })
            .then((response) => {
                let filteredTvShow = response.data.results;
                this.filteredMovie = this.filteredMovie.concat(filteredTvShow)
                console.log(this.filteredMovie)
                // this refresh the search input.
                this.search = '';  
            });
        },

        // Return a integer for excess
        voteCalculator(vote) {
            let thisVote = parseInt((vote / 2) + 1)
            console.log(thisVote)
            return thisVote
        }
    },

    // This get the popular movie
    mounted() {
        axios
        .get('https://api.themoviedb.org/3/movie/popular?api_key=e205f242d3393f38b4790265be507509&language=it-IT&page=1')
        .then((response) => {
            this.popularMovie = response.data.results;
        });
    },
})
