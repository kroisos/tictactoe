<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
@font-face {
  font-family: "Acme";
  src: local("Acme"),   url(./assets/Acme-Regular.ttf) format("truetype");
}
</style>
