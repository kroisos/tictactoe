<template>
  <div class="gridCell" @click="selectCell">
    <span :id="input.id" :class="[cellClass]">
    </span>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime';

export default {
  name: 'gridCell',
  props: [
    'clickable',
    'selected',
    'onSelect',
    'input',
  ],
  watch: {
    input(nInput, oInput) {
      if (nInput.player !== oInput.player) {
        anime({
          targets: `#${nInput.id}`,
          rotateX: {
            value: ['180deg', '0deg'],
            duration: 700,
          },
        });
      }
    },
  },
  computed: {
    cellClass() {
      const { input } = this.$props;
      switch (input.player) {
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
      const { userLocked, turnPlayer } = this.$store.getters;
      const {
        input,
      } = this.$props;
      const { id, x, y, player } = input;

      if (!userLocked && isNaN(player)) {
        this.$store.dispatch('putPiece', { x, y, player: turnPlayer }).then(() => {
          anime({
            targets: `#${id}`,
            rotateX: {
              value: ['180deg', '0deg'],
              duration: 700,
            },
            complete: () => this.$emit('selected', { x, y, player: turnPlayer }),
          });
        });
      }
    },
  },
};
</script>
