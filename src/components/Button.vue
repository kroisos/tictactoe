<template>
  <li>
    <ul>
      <button class="button" type="button" @click="click">{{ title }}</button>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'Button',
  props: ['title'],
  methods: {
    click() {
      this.$emit('click');
    },
  },
};
</script>
