<template>
    <div>
        Movie Detail
        {{ this.movieId }}
    </div>
    
</template>

<script>
    export default {
        data(){
            return {
                movieId: this.$route.params.movie_id
            }
        }        
    }
</script>

<style scoped>

</style>