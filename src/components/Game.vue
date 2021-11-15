<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <Grid></Grid>
  </div>
</template>

<script>
import Grid from './Grid';

export default {
  name: 'game',
  components: {
    Grid,
  },
  data() {
    return {
      msg: 'Play!',
    };
  },
};
</script>

