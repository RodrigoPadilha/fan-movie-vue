<template>
  <div>    
    <ul>
        <li v-for="item of lista" :key="item.id">
          <div>
              {{item.original_title}}
          </div>
        </li>

    </ul>
  </div>


</template>

<script>
  export default {
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

</style>
