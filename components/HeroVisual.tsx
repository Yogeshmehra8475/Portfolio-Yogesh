"use client";

import { motion } from "framer-motion";

// A small deterministic set of "nodes" laid out like a data/neural graph.
const nodes = [
  { x: 60, y: 60 }, { x: 180, y: 40 }, { x: 300, y: 90 },
  { x: 40, y: 180 }, { x: 170, y: 170 }, { x: 300, y: 210 },
  { x: 90, y: 300 }, { x: 220, y: 300 }, { x: 340, y: 150 },
];

const edges: [number, number][] = [
  [0, 1], [1, 2], [0, 3], [1, 4], [2, 4], [3, 4], [4, 5], [2, 5],
  [3, 6], [4, 7], [5, 8], [6, 7], [7, 5], [1, 8],
];

export default function HeroVisual() {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      <svg viewBox="0 0 380 360" className="w-full h-full" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="edgeGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5B8DEF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#F2B84B" stopOpacity="0.6" />
          </linearGradient>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5B8DEF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#5B8DEF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {edges.map(([a, b], i) => {
          const n1 = nodes[a];
          const n2 = nodes[b];
          return (
            <motion.line
              key={i}
              x1={n1.x}
              y1={n1.y}
              x2={n2.x}
              y2={n2.y}
              stroke="url(#edgeGradient)"
              strokeWidth="1"
              strokeDasharray="240"
              initial={{ strokeDashoffset: 240, opacity: 0 }}
              animate={{ strokeDashoffset: 0, opacity: 0.55 }}
              transition={{ duration: 1.4, delay: 0.15 * i, ease: "easeOut" }}
            />
          );
        })}

        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="22" fill="url(#nodeGlow)" opacity="0.5" />
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={i % 3 === 0 ? 5 : 3.5}
              fill={i % 4 === 0 ? "#F2B84B" : "#E9EEF7"}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            />
          </g>
        ))}
      </svg>

      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-center">
        <p className="text-xs text-fog">raw data → model → insight</p>
      </div>
    </div>
  );
}
