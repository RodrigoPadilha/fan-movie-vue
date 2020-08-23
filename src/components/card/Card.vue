<template>
    
    <div class="card">                
        <div class="card__conteudo">
            <!--<img class="card__poster" :src="'http://image.tmdb.org/t/p/w185/' + item.poster_path" :alt="item.title">--> <!-- w45, w92, w154, w300, w500-->
            <div class="card__info">                
                <h2 class="card__titulo">{{ titulo }}</h2>              
                <!--
                <p>Data:01/01/2021</p>
                <p>Gênero: abc</p>
                -->
            </div>
        </div>
    </div>


</template>

<script>
  
    export default {

        props:['titulo']

    }

</script>

<style>

    .card {    
        vertical-align: top;
        text-align: center;

        padding: 0 auto;
        margin: .8em;
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
