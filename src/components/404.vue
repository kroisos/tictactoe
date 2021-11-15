<template>
  <div>
    <h1 class="light">
      404
    </h1>
    <p>
      {{ msg }}
    </p>
  </div>
</template>

<script>
import texts from '@/texts';

export default {
  name: 'NotFound',
  props: ['water'],
  data() {
    return {
      msg: this.$props.water ?
        texts.button.butNoDrink : texts.button.notFound,
    };
  },
};
</script>
