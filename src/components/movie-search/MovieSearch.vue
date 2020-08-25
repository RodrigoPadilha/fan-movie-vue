<template>
    <div>
        <h1>Busca de Filmes</h1>
        
        <input type="search" class="filter" @input="textFilter = $event.target.value" placeholder="Pesquisa por filmes">

    </div>
    
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>