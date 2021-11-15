<template>
  <div class="main">
    <h1>{{ texts.welcome }}</h1>
    <div>
      <Button
        id="play"
        type="button"
        v-bind:title="texts.button.play"
        @click="toGame"
      ></Button>
    </div>
    <div>
      <Button
        id="settings"
        type="button"
        v-bind:title="texts.button.settings"
        @click="toSettings"
      ></Button>
    </div>
    <div>
      <Button
        id="water"
        type="button"
        v-bind:title="texts.button.water"
        @click="toWater"
      ></Button>
    </div>
  </div>
</template>

<script>
import texts from '@/texts';
import router from '@/router';
import routes from '@/router/routes';

import Button from './Button';

export default {
  name: 'home',
  components: {
    Button,
  },
  data() {
    return {
      texts,
    };
  },
  methods: {
    toGame: () => router.push(routes.game),
    toSettings: () => router.push(routes.settings),
    toWater: () => router.push(routes.water),
  },
};
</script>
