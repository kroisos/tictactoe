// Component is a a collection of middleware functions for component hooks.
const Component = {
  Id: {
    GridCell: (x, y) => `gc_${x}${y}`,
  },
};

// Router is a prevention of eslint warning "prefer-default-export"
const Router = {};

export { Component, Router };
