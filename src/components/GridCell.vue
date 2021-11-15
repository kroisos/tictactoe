<template>
  <div class="gridCell" v-on:click="selectCell">
    <span v-bind:class="[cellClass]">
    </span>
  </div>
</template>

<script>
export default {
  name: 'gridCell',
  props: [
    'clickable',
    'selected',
    'input',
  ],
  computed: {
    cellClass() {
      const { input } = this.$props;
      switch (input.piece) {
        case 0:
          return 'piecePlayer';
        case 1:
          return 'pieceOpponent';
        default:
          return '';
      }
    },
  },
  methods: {
    selectCell() {
      const { x, y, player } = this.$props.input;
      if (!player) {
        this.$store.dispatch('putPiece', { x, y });
      }
    },
  },
};
</script>
