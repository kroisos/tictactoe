/* Game functions dependent on `store` and `util` */
import GameException from '../util/error';

export const NullPiece = {
  x: -1, y: -1, player: -1, flipping: false,
};

function determinePiecesToFlip(startPiece, pieces, xDir, yDir) {
  let nextPiece = {};
  const getNextPiece = p => p.x === nextPiece.x + xDir && p.y === nextPiece.y + yDir;

  nextPiece = pieces.find(p => p.x === startPiece.x + xDir && p.y === startPiece.y + yDir);

  const toFlip = [];
  while (nextPiece) {
    if (nextPiece.player === startPiece.player) {
      return toFlip;
    }

    toFlip.push({ ...nextPiece });

    nextPiece = pieces.find(getNextPiece);
  }

  return [];
}

/*
  Returns a list of pieces to flip based on a single piece.
  This means all opponent's pieces bound in straight lines by
  the player's existing pieces and the newly placed piece.
*/
export function GetPiecesToFlip(piece, pieces) {
  const { player } = piece;
  if (player !== 2 && player !== 1) {
    throw new GameException('Piece to determine flip needs to belong to a valid player number.');
  }

  const toFlip = [];

  // Up Right
  toFlip.push(...determinePiecesToFlip(piece, pieces, 1, -1));

  // Right
  toFlip.push(...determinePiecesToFlip(piece, pieces, 1, 0));

  // Down Right
  toFlip.push(...determinePiecesToFlip(piece, pieces, 1, 1));

  // Down
  toFlip.push(...determinePiecesToFlip(piece, pieces, 0, 1));

  // Down Left
  toFlip.push(...determinePiecesToFlip(piece, pieces, -1, 1));

  // Left
  toFlip.push(...determinePiecesToFlip(piece, pieces, -1, 0));

  // Up Left
  toFlip.push(...determinePiecesToFlip(piece, pieces, -1, -1));

  // Up
  toFlip.push(...determinePiecesToFlip(piece, pieces, 0, -1));

  return toFlip;
}
