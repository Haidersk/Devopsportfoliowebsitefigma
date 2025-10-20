import { motion } from "motion/react";
import { useTheme } from "./ThemeProvider";

export function DevOpsPipelineAnimation() {
  const { theme } = useTheme();
  
  // Define multiple pipeline paths for a complex network
  const paths = [
    // Horizontal main pipeline
    "M 5 30 L 30 30 Q 35 30, 35 35 L 35 50 Q 35 55, 40 55 L 95 55",
    // Vertical branch
    "M 35 35 L 35 15 Q 35 10, 40 10 L 70 10",
    // Diagonal connector
    "M 40 55 Q 50 45, 60 35 L 80 15",
    // Bottom curve
    "M 5 70 Q 25 70, 35 60 L 35 55",
    // Top horizontal
    "M 10 15 L 35 15",
    // Middle connectors
    "M 60 35 L 80 35",
    "M 50 50 Q 55 50, 60 45 L 75 30",
  ];

  // Create animated dots for each path
  const dots = paths.map((_, index) => ({
    id: index,
    delay: index * 1.5,
    duration: 8 + index * 0.5,
  }));

  const strokeColor = theme === "light" ? "rgba(59, 130, 246, 0.3)" : "rgba(99, 102, 241, 0.4)";
  const dotColor = theme === "light" ? "rgba(59, 130, 246, 0.8)" : "rgba(168, 85, 247, 0.9)";
  const glowColor = theme === "light" ? "rgba(59, 130, 246, 0.6)" : "rgba(168, 85, 247, 0.7)";

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30 dark:opacity-20">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Glow filter for dots */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradient for paths */}
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={strokeColor} stopOpacity="0" />
            <stop offset="50%" stopColor={strokeColor} stopOpacity="1" />
            <stop offset="100%" stopColor={strokeColor} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Draw all pipeline paths */}
        {paths.map((path, index) => (
          <g key={`path-${index}`}>
            {/* Static path */}
            <path
              d={path}
              stroke={strokeColor}
              strokeWidth="0.3"
              fill="none"
              strokeLinecap="round"
            />
            
            {/* Animated path overlay */}
            <motion.path
              d={path}
              stroke="url(#pathGradient)"
              strokeWidth="0.5"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: index * 0.8,
                ease: "easeInOut",
              }}
            />
          </g>
        ))}

        {/* Animated dots traveling along paths */}
        {dots.map((dot, index) => (
          <g key={`dot-${dot.id}`}>
            <motion.circle
              r="0.8"
              fill={dotColor}
              filter="url(#glow)"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{
                duration: dot.duration,
                repeat: Infinity,
                delay: dot.delay,
                times: [0, 0.1, 0.9, 1],
              }}
            >
              <animateMotion
                dur={`${dot.duration}s`}
                repeatCount="indefinite"
                begin={`${dot.delay}s`}
                path={paths[index]}
              />
            </motion.circle>
            
            {/* Glow trail */}
            <motion.circle
              r="1.5"
              fill={glowColor}
              opacity="0.3"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0.3, 0] }}
              transition={{
                duration: dot.duration,
                repeat: Infinity,
                delay: dot.delay,
                times: [0, 0.1, 0.9, 1],
              }}
            >
              <animateMotion
                dur={`${dot.duration}s`}
                repeatCount="indefinite"
                begin={`${dot.delay}s`}
                path={paths[index]}
              />
            </motion.circle>
          </g>
        ))}

        {/* Pipeline nodes (representing stages) */}
        {[
          { cx: 35, cy: 35, label: "Build" },
          { cx: 60, cy: 35, label: "Test" },
          { cx: 80, cy: 35, label: "Deploy" },
          { cx: 40, cy: 55, label: "Monitor" },
        ].map((node, index) => (
          <g key={`node-${index}`}>
            {/* Outer pulse ring */}
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="2"
              fill="none"
              stroke={dotColor}
              strokeWidth="0.2"
              initial={{ r: 2, opacity: 0.8 }}
              animate={{ r: 4, opacity: 0 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.5,
                ease: "easeOut",
              }}
            />
            
            {/* Node circle */}
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="1.5"
              fill={dotColor}
              filter="url(#glow)"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.5,
              }}
            />
          </g>
        ))}

        {/* Data flow particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.circle
            key={`particle-${i}`}
            r="0.3"
            fill={dotColor}
            opacity="0.6"
            initial={{ 
              cx: Math.random() * 100, 
              cy: Math.random() * 100,
              opacity: 0 
            }}
            animate={{
              cx: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
              cy: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        ))}

        {/* Grid lines for technical feel */}
        {Array.from({ length: 10 }).map((_, i) => (
          <g key={`grid-${i}`}>
            <motion.line
              x1="0"
              y1={i * 10}
              x2="100"
              y2={i * 10}
              stroke={strokeColor}
              strokeWidth="0.05"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                delay: i * 0.1,
              }}
            />
            <motion.line
              x1={i * 10}
              y1="0"
              x2={i * 10}
              y2="100"
              stroke={strokeColor}
              strokeWidth="0.05"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                delay: i * 0.1,
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
