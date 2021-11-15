<template>
  <div class="gridWrapper"
    v-bind:style="grid.wrapper">
    <span v-for="col in grid.cols" v-bind:key="col.id">
      <span v-for="(cell, iCell) in col" v-bind:key="iCell">
        <GridCell v-bind:input="cell"></GridCell>
      </span>
    </span>
  </div>
</template>

<script>
import GridCell from './GridCell';

const buildGrid = (width, height, pieces) => {
  const cols = new Array(width);

  for (let x = 0; x < width; x += 1) {
    cols[x] = new Array(height);
    for (let y = 0; y < height; y += 1) {
      const gridCell = { x, y };

      const piece = pieces.find(p => p && p.x === x && p.y === y);
      if (piece) {
        gridCell.piece = piece.player;
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
        cols: buildGrid(width, height, pieces),
      };
    },
  },
};
</script>
