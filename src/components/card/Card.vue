<template>
    
    <div class="card">    
        <div class="card__header">            
            <slot>
            </slot>
        </div>
        <div class="card__body">
            <div class="info">                
                <h2 class="info__titulo">{{ title }}</h2>   
                <div class="info__descricao">
                    <p>Data: {{ releaseDate }}</p>
                    <p>Gênero: abc</p>
                </div>                
            </div>
        </div>
    </div>

</template>

<script>
  
    export default {
        
        props: {
            title:{
                type: String,
                required: true
            },
            releaseDate: {
                type: String,
                required: true
            }
        }        

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
