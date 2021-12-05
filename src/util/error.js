// For errors that break game logic
function GameException(message) {
  this.message = message;
  this.name = 'GameException';
}

export default GameException;
