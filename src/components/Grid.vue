<template>
  <div class="gridWrapper" :style="grid.wrapper">
    <span v-for="col in grid.cols" :key="col.id">
      <span v-for="(cell, iCell) in col" :key="iCell">
        <GridCell :input="cell" @selected="onCellSelected"></GridCell>
      </span>
    </span>
  </div>
</template>

<script>
import { Component } from '../util/vue';
import FlipPiece from '../game/FlipPiece';
import GridCell from './GridCell';

const renderGrid = (width, height, pieces) => {
  const cols = new Array(width);
  for (let x = 0; x < width; x += 1) {
    cols[x] = new Array(height);
    for (let y = 0; y < height; y += 1) {
      const gridCell = { id: Component.Id.GridCell(x, y), x, y };

      const piece = pieces.find(p => p && p.x === x && p.y === y);
      if (piece) {
        gridCell.player = piece.player;
      }
      cols[x][y] = gridCell;
    }
  }

  return cols;
};

export default {
  name: 'grid',
  components: {
    GridCell,
  },
  methods: {
    onCellSelected(piece) {
      const { dispatch } = this.$store;
      const { pieces } = this.$store.getters;
      const piecesToFlip = FlipPiece(piece, pieces);
      dispatch('flipPieces', { piecesToFlip }).then(() => dispatch('setNextTurn'));
    },
  },
  computed: {
    grid() {
      const { width, height, pieces } = this.$store.getters;

      let cols = '';
      for (let i = 0; i < width; i += 1) {
        cols += 'auto ';
      }

      let rows = '';
      for (let i = 0; i < height; i += 1) {
        rows += 'auto ';
      }

      const wrapper = {
        'grid-template-columns': cols,
        'grid-template-rows': rows,
      };
      return {
        wrapper,
        cols: renderGrid(width, height, pieces),
      };
    },
  },
};
</script>
