<template>

  <div>    
    
    <ul class="lista-filmes">
        <li class="lista-filmes__item" v-for="item of lista" :key="item.id">        

            <card-filme :titulo="item.original_title">
                <img class="card__poster" :src="'http://image.tmdb.org/t/p/w185/' + item.poster_path" :alt="item.title"> <!-- w45, w92, w154, w300, w500-->                              
            </card-filme>

        </li>
    </ul>

  </div>


</template>

<script>
    import Card from './components/card/Card.vue';    

    export default {

        components: {
            'card-filme' : Card,    //usar aspas simples pois o nome "card-filme" possui ifem
            //card: Card
        },

        name: 'app',
        data () {
            return {
            lista: []   
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

    .card {    
        vertical-align: top;
        text-align: center;

        padding: 0 auto;
        margin: .8em;
        /*border: solid 2px grey;*/
        border-radius: .5em .5em;

        box-shadow: .5em .5em 1em grey;
        display: inline-block;    
    }

    .card__poster{
        width: 100%;
        border-radius: .5em .5em;
    }
    
    .card__titulo {
        text-align: center;                
        margin: 0;
        padding: 0 .5em;                   
    }

</style>
