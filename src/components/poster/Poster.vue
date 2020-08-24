<template>
    <img 
        class="poster"         
        :src="`http://image.tmdb.org/t/p/${size}/${posterPath}`"
        :alt="title"> <!-- w45, w92, w154, w185, w300, w500-->
    
</template>

<script>
    export default {
        props: ['posterPath', 'title', 'size']        
    }
</script>

<style scoped>

    .poster{
        width: 100%;
        border-radius: .5em .5em;
    }

</style>