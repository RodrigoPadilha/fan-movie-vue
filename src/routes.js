import Upcoming from './components/upcoming/Upcoming.vue';
import MovieDetail from './components/movie-detail/MovieDetail.vue';
import MovieSearch from './components/movie-search/MovieSearch.vue';

export const routes = [
    { path: '', component: Upcoming },
    { path: '/movie-search', title: 'Busca', component: MovieSearch },
    { path: '/movie-detail', title: 'Detalhe', component: MovieDetail },    
];