/* Game functions dependent on `store` and `util` */
import GameException from '../util/error';

function determinePiecesInLine(startPiece, pieces, xDir, yDir) {
  let nPiece = startPiece;
  const nextPiece = p => p.x === nPiece.x + xDir && p.y === nPiece.y + yDir;

  const line = [];
  nPiece = pieces.find(nextPiece);
  while (nPiece && nPiece.player !== startPiece.player) {
    if (nPiece) {
      line.push(nPiece);
    }
    nPiece = pieces.find(nextPiece);
  }
  return nPiece && nPiece.player === startPiece.player ? line : [];
}

/*
  Returns a list of pieces to flip based on a single piece.
  This means all opponent's pieces bound in straight lines by
  the player's existing pieces and the newly placed piece.
*/
function FlipPiece(piece, pieces) {
  const { player } = piece;
  if (player !== 0 && player !== 1) {
    throw new GameException('Piece to determine flip needs to belong to a valid player (0 or 1)');
  }

  const toFlip = [];

  // Up Right
  toFlip.push(...determinePiecesInLine(piece, pieces, 1, -1));

  // Right
  toFlip.push(...determinePiecesInLine(piece, pieces, 1, 0));

  // Down Right
  toFlip.push(...determinePiecesInLine(piece, pieces, 1, 1));

  // Down
  toFlip.push(...determinePiecesInLine(piece, pieces, 0, 1));

  // Down Left
  toFlip.push(...determinePiecesInLine(piece, pieces, -1, 1));

  // Left
  toFlip.push(...determinePiecesInLine(piece, pieces, -1, 0));

  // Up Left
  toFlip.push(...determinePiecesInLine(piece, pieces, -1, -1));

  // Up
  toFlip.push(...determinePiecesInLine(piece, pieces, 0, -1));

  return toFlip;
}

export default FlipPiece;
