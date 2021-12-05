// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import './assets/main.less';
import GameStore from './store/game';
import SettingsStore from './store/settings';

Vue.config.productionTip = false;

Vue.use(Vuex);

const settingsDefault = {
  width: 8,
  height: 8,
  startingPieces: [
    { x: 3, y: 3, player: 0 },
    { x: 4, y: 4, player: 0 },
    { x: 4, y: 3, player: 1 },
    { x: 3, y: 4, player: 1 },
  ],
};

const store = new Vuex.Store({
  modules: {
    settings: SettingsStore(settingsDefault),
    game: GameStore(settingsDefault),
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
