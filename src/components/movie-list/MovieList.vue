<template>
    <div>
        <input type="search" class="filter" @input="textFilter = $event.target.value" placeholder="Pesquisa por filmes">
        
        <ul class="movie-list">
            <li class="movie-list__item" v-for="item of filteredList" :key="item.id">        
                
                <card-filme 
                    :title="item.title" 
                    :releaseDate="item.release_date" 
                    @cardActionButton="openDetailMovie(item.original_title)"
                    :confirm="false">
                <!--@cardActionButton="openDetailMovie(item.original_title, $event)">  Recebendo dados do compoenente filho-->

                    <poster :posterPath="item.poster_path" :title="item.title" :size="'w185'" />                        
                    
                </card-filme>
                
            </li>
        </ul>
    </div>
    
</template>

<script>
    
    import Card from '../card/Card.vue';    
    import Poster from '../poster/Poster.vue';
    
    export default {

        props:{
            movies:{
                type: Array,
                required: true
            }
        },

        components: {
            'card-filme' : Card,    //usar aspas simples pois o nome "card-filme" possui ifem //card: Card
            poster: Poster
            
        },
        
        computed: {

            filteredList(){
                if(this.textFilter){
                    let exp = new RegExp(this.textFilter.trim(),'i')                          
                    return this.movies.filter(movie => exp.test(movie.original_title));
                } else {
                    return this.movies;
                }
            }

        },

        // Métodos que podem ser chamados a partir de interações do usuário com os componentes
        methods: {
            openDetailMovie(title) {
            //openDetailMovie($event, title) {  // Recebento parametro RECEBIDO do componente FILHO
                alert(title)
            }
        },
        
        data () {
            return {                
                textFilter: ''
            }    
        },
        
    }
</script>

<style scoped>

    .movie-list{
        list-style: none;
    }

    .movie-list__item{
        display: inline-block;
    }

</style>