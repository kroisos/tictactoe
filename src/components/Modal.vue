<template>
  <div>
    <h3>{{ title }}</h3>
    <p>{{ message }}</p>
    <Button title="OK" @click="onOk"></Button>
    <Button title="Back" @click="onCancel"></Button>
  </div>
</template>

<script>
import Button from './Button';

export default {
  name: 'Modal',
  components: {
    Button,
  },
  props: [
    'title',
    'message',
  ],
  methods: {
    onOk() { this.$emit('onOk'); },
    onCancel() { this.$emit('onCancel'); },
  },
};
</script>
