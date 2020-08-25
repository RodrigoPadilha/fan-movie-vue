<template>
    <div>
        <h1>Busca de Filmes</h1>

        <input type="search" class="filter" @input="textSearch = $event.target.value" placeholder="Buscar por filmes">        
        <button @click="search()">Open</button>
        <found-list :movies="movieList"/>
    </div>
    
</template>

<script>

    import MovieList from '../movie-list/MovieList.vue';

    export default {

        components: {
            'found-list': MovieList,
        },

        methods:{
            search(){
                const axios = require('axios');
            /*
            const instance = axios.create({
                baseUrl: 'https://api.themoviedb.org/3/',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDFlYWVjODJmMzE1ZjI0ZDg5ZjVjZWExMGY5YzQ2ZSIsInN1YiI6IjViNWE1ZjlhOTI1MTQxMmE5ZjAwMTA5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XG68mjoy-VhwCmHTJ4xFw7x_VdjmL4M5STBLuYOTV24'
                }
            })
            */
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDFlYWVjODJmMzE1ZjI0ZDg5ZjVjZWExMGY5YzQ2ZSIsInN1YiI6IjViNWE1ZjlhOTI1MTQxMmE5ZjAwMTA5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XG68mjoy-VhwCmHTJ4xFw7x_VdjmL4M5STBLuYOTV24'
            }
            const params = {
                'api_key': '601eaec82f315f24d89f5cea10f9c46e',
                'language': 'pt-BR',
                'query': this.textSearch
            }
            axios.get('https://api.themoviedb.org/3/search/movie', { params, headers })
                .then(response => response.data.results )
                .then(filmes => {
                    console.log(filmes);
                    this.movieList = filmes;
                })
                .catch(error => {          
                    console.error(error);          
                })
            }
        },

        data(){
            return {          
                textSearch: '',      
                movieList: []               
            }    
        },        
        
    }
</script>

<style scoped>


</style>