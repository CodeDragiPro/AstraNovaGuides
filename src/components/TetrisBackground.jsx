import { useEffect, useState } from "react";

const TETROMINOS = [
  {
    shape: [[1, 1, 1, 1]],
    color: "#00e5ff",
  },
  {
    shape: [
      [1, 1],
      [1, 1],
    ],
    color: "#ffe600",
  },
  {
    shape: [
      [0, 1, 0],
      [1, 1, 1],
    ],
    color: "#ff2bd6",
  },
  {
    shape: [
      [1, 0],
      [1, 0],
      [1, 1],
    ],
    color: "#8a2be2",
  },
  {
    shape: [
      [0, 1],
      [0, 1],
      [1, 1],
    ],
    color: "#ff6b35",
  },
  {
    shape: [
      [0, 1, 1],
      [1, 1, 0],
    ],
    color: "#39ff14",
  },
  {
    shape: [
      [1, 1, 0],
      [0, 1, 1],
    ],
    color: "#ff3b81",
  },
];

function createPiece() {
  const tetromino =
    TETROMINOS[Math.floor(Math.random() * TETROMINOS.length)];

  return {
    id: crypto.randomUUID(),
    shape: tetromino.shape,
    color: tetromino.color,

    left: Math.random() * 100,

    size: 16 + Math.random() * 12,

    duration: 7 + Math.random() * 8,

    delay: Math.random() * 2,

    rotation: Math.floor(Math.random() * 4) * 90,
  };
}

export default function TetrisBackground() {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPieces((current) => [
        ...current,
        createPiece(),
      ]);
    }, 900);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cleanup = setInterval(() => {
      setPieces((current) => current.slice(-15));
    }, 15000);

    return () => clearInterval(cleanup);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Quadrillage */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,229,255,0.10) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,43,214,0.10) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Pièces */}
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.left}%`,
            top: "-100px",
            transform: `rotate(${piece.rotation}deg)`,
            animation: `tetris-fall ${piece.duration}s linear ${piece.delay}s forwards`,
          }}
        >
          <div
            className="relative"
            style={{
              width: `${piece.shape[0].length * piece.size}px`,
              height: `${piece.shape.length * piece.size}px`,
            }}
          >
            {piece.shape.map((row, rowIndex) =>
              row.map((cell, columnIndex) => {
                if (!cell) return null;

                return (
                  <span
                    key={`${rowIndex}-${columnIndex}`}
                    className="absolute"
                    style={{
                      left: `${columnIndex * piece.size}px`,
                      top: `${rowIndex * piece.size}px`,
                      width: `${piece.size - 2}px`,
                      height: `${piece.size - 2}px`,
                      backgroundColor: piece.color,
                      boxShadow: `
                        0 0 6px ${piece.color},
                        0 0 14px ${piece.color}
                      `,
                    }}
                  />
                );
              }),
            )}
          </div>
        </div>
      ))}

      {/* Animation */}
      <style>
        {`
          @keyframes tetris-fall {
            from {
              transform: translateY(0) rotate(0deg);
              opacity: 0;
            }

            8% {
              opacity: 0.65;
            }

            85% {
              opacity: 0.65;
            }

            to {
              transform: translateY(110vh) rotate(360deg);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
}