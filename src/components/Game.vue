<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <!-- <Score></Score> -->
    <Grid></Grid>
    <Button
      v-if="!isQuitting"
      title="Quit"
      @click="toggleQuitting"
    ></Button>
    <Modal
      title="Back to Menu"
      message="This will erase current game. Are you sure?"
      v-if="isQuitting"
      @onOk="quit"
      @onCancel="toggleQuitting"
    ></Modal>
  </div>
</template>

<script>
import router from '@/router';
import routes from '@/router/routes';
import Grid from './Grid';
import Modal from './Modal';
import Button from './Button';

export default {
  name: 'game',
  components: {
    Grid,
    Button,
    Modal,
  },
  data() {
    return {
      msg: 'Play!',
      isQuitting: false,
    };
  },
  methods: {
    quit() {
      this.$store.dispatch('reset').then(
        () => router.push(routes.home));
    },
    toggleQuitting() {
      this.isQuitting = !this.isQuitting;
    },
  },
};
</script>

