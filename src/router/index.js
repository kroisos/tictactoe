import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Game from '@/components/Game';
import NotFound from '@/components/404';
import routes from './routes';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: routes.home,
      name: 'home',
      component: Home,
    },
    {
      path: routes.game,
      name: 'game',
      component: Game,
    },
    // {
    //   path: routes.settings,
    //   name: 'settings',
    //   component: Settings,
    // },
    {
      path: routes.water,
      name: '418',
      component: NotFound,
      props: {
        water: true,
      },
    },
    {
      path: '*',
      name: '404',
      component: NotFound,
    },
  ],
});
