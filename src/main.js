// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import './assets/main.less';
import GameStore from './store/game';

Vue.config.productionTip = false;

Vue.use(Vuex);

const settingsDefault = {
  grid: {
    width: 7,
    height: 6,
  },
};

const { width, height } = settingsDefault.grid;

const store = new Vuex.Store({
  modules: {
    game: GameStore({ width, height }),
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
