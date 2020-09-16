import Upcoming from './components/upcoming/Upcoming.vue';
import MovieDetail from './components/movie-detail/MovieDetail.vue';
import MovieSearch from './components/movie-search/MovieSearch.vue';
import Error404 from './components/Error404/Error404.vue'

export const routes = [
    { path: '', component: Upcoming },
    { path: '/movie-search', title: 'Busca', component: MovieSearch },
    { path: '/movie-detail/:movie_id', name: 'Detalhe', title: 'Detalhe', component: MovieDetail },    
    { path: '*', title: 'NotFound_404', component: Error404 },    
];