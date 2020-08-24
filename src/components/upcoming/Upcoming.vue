<template>

    <div>    
        <h1>Próximos Lançamentos</h1>
        <div>
            <input type="search" class="filter" @input="textFilter = $event.target.value" placeholder="Pesquisa por filmes">
            
            <ul class="lista-filmes">
                <li class="lista-filmes__item" v-for="item of filteredList" :key="item.id">        
                    
                    <card-filme :title="item.original_title" :releaseDate="item.release_date">
                        <poster :posterPath="item.poster_path" :title="item.original_title" :size="'w185'" />                        
                    </card-filme>
                    
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
    import Card from '../card/Card.vue';    
    import Poster from '../poster/Poster.vue';

    export default {

        name: 'app',        
        
        components: {
            'card-filme' : Card,    //usar aspas simples pois o nome "card-filme" possui ifem //card: Card
            poster: Poster
            
        },
        
        computed: {

            filteredList(){
                if(this.textFilter){
                    let exp = new RegExp(this.textFilter.trim(),'i')
                    console.log(exp)
                    return this.lista.filter(movie => exp.test(movie.original_title));
                } else {
                    return this.lista;
                }
            }

        },
        
        data () {
            return {
                lista: [],
                textFilter: ''
            }    
        },        

        created() {
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
            axios.get('https://api.themoviedb.org/3/movie/upcoming', { headers })
                .then(response => response.data.results )
                .then(filmes => {
                    console.log(filmes);
                    this.lista = filmes;
                })
                .catch(error => {          
                    console.error(error);          
                })
        }
    }

</script>

<style>

    .lista-filmes{
        list-style: none;
    }

    .lista-filmes__item{
        display: inline-block;
    }
    
</style>
