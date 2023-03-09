<template>
  <div class="gridWrapper" :style="grid.wrapper">
    <span v-for="col in grid.cols" :key="col.id">
      <span v-for="(cell, iCell) in col" :key="iCell">
        <GridCell :body="cell" @selected="onCellSelected"></GridCell>
      </span>
    </span>
  </div>
</template>

<script>
import { Component } from '../util/vue';
import {
  NullPiece,
  GetPiecesToFlip,
} from '../game/piece';
import GridCell from './GridCell';

const renderGrid = (width, height, pieces) => {
  const cols = new Array(width);
  for (let x = 0; x < width; x += 1) {
    cols[x] = new Array(height);
    for (let y = 0; y < height; y += 1) {
      const piece = pieces.find(p => p && p.x === x && p.y === y);
      const newGridCell = piece ? {
        ...piece, id: Component.Id.GridCell(x, y),
      } : {
        ...NullPiece, x, y, id: Component.Id.GridCell(x, y),
      };
      cols[x][y] = { ...newGridCell, id: Component.Id.GridCell(x, y) };
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
      const piecesToFlip = GetPiecesToFlip(piece, pieces);
      dispatch('flipPiecesBegin', { piecesToFlip });
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
