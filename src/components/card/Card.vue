<template>
    
    <div class="card">                
        <div class="card__header">
            <!--<img class="card__poster" :src="'http://image.tmdb.org/t/p/w185/' + item.poster_path" :alt="item.title">--> <!-- w45, w92, w154, w300, w500-->
            <slot>
            </slot>
        </div>
        <div class="card__body">
            <div class="info">                
                <h2 class="info__titulo">{{ titulo }}</h2>   
                <div class="info__descricao">
                    <p>Data:01/01/2021</p>
                    <p>Gênero: abc</p>
                </div>                
            </div>
        </div>
    </div>


</template>

<script>
  
    export default {

        props:['titulo']

    }

</script>

<style scoped>

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

    .card__body{        
        width: 15em;     
        max-width: 25em;
    }
    
    .info__titulo {
        text-align: center;                
        margin: 0;
        padding: 0 .5em;        

        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;        
    }

    .info__descricao{
        margin: 1em 0;
    }

    .info__descricao > p{
        margin: 0;
    }

</style>
