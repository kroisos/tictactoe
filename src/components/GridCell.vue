<template>
  <div class="gridCell" @click="selectCell">
    <span :id="body.id" :class="[cellClass]">
    </span>
  </div>
</template>

<script>
import {
  AnimFlipPiece,
  AnimPutPiece,
} from '../animate/piece';

export default {
  name: 'gridCell',
  props: [
    'clickable',
    'selected',
    'onSelect',
    'body',
  ],
  watch: {
    body(newBody) {
      console.log(`FLIP: ${newBody.flipping ? newBody.id : ''}`);
      if (newBody.flipping) {
        // console.log(newBody.id);
        AnimFlipPiece(
          newBody.id,
          () => this.$store.dispatch('flipPieceComplete', { ...newBody }),
        );
      }
    },
  },
  computed: {
    cellClass() {
      const { body } = this.$props;
      switch (body.player) {
        case 1:
          return 'piecePlayer';
        case 2:
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
        body,
      } = this.$props;
      const { id, x, y } = body;
      const newBody = { x, y, player: turnPlayer };

      if (!userLocked && newBody.player > 0) {
        this.$store.dispatch('putPiece', newBody).then(() => {
          AnimPutPiece(id, () => this.$store.dispatch('setNextTurn', newBody), null);
          this.$emit('selected', newBody);
        });
      }
    },
  },
};
</script>
