import anime from 'animejs/lib/anime';

const scaleFactor = 1.3;

export function AnimPutPiece(pieceID, onContinue, onComplete) {
  const duration = 720;

  anime({
    targets: `#${pieceID}`,
    scaleX: {
      value: [scaleFactor, 1],
      duration,
    },
    scaleY: {
      value: [scaleFactor, 1],
      duration,
    },
    changeBegin: onContinue,
    changeComplete: onComplete,
  });
}

export function AnimFlipPiece(pieceID, onContinue, onComplete) {
  anime({
    targets: `#${pieceID}`,
    keyframes: [
      {
        scaleX: [1, scaleFactor],
        scaleY: [1, scaleFactor],
        rotateX: '90deg',
      },
      {
        scaleX: [scaleFactor, 1],
        scaleY: [scaleFactor, 1],
        rotateX: '0deg',
      },
    ],
    duration: 600,
    easing: 'easeInOutSine',
    changeBegin: onContinue,
    changeComplete: onComplete,
  });
}

export default { AnimFlipPiece, AnimPutPiece };
