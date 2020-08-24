import Upcoming from './components/upcoming/Upcoming.vue';
import MovieDetail from './components/movie-detail/MovieDetail.vue';

export const routes = [
    { 
        path: '',
        component: Upcoming
    },
    {
        path: '/movie-detail',
        component: MovieDetail
    }
];