import Vue from 'vue';
import Router from 'vue-router';
import vHome from '../components/v-home';
import vCreateTask from '../components/v-create-task';
import vViewTask from '../components/v-view-task';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            component: vHome
        },
        {
            path: '/task',
            component: vCreateTask
        },
        {
            path: '/view-task/:id',
            component: vViewTask
        },
    ]
});