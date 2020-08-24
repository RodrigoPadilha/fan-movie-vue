import Upcoming from './components/upcoming/Upcoming.vue';
import MovieDetail from './components/movie-detail/MovieDetail.vue';
import SearchMovie from './components/search-movie/SearchMovie.vue';

export const routes = [
    { path: '', component: Upcoming },
    { path: '/search-movie', title: 'Busca', component: SearchMovie },
    { path: '/movie-detail', title: 'Detalhe', component: MovieDetail },    
];