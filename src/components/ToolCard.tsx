import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { ToolData } from "./toolsData";

interface ToolCardProps {
  tool: ToolData;
  index: number;
  onClick: () => void;
}

export function ToolCard({ tool, index, onClick }: ToolCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group"
    >
      <motion.div
        className={`relative p-4 rounded-xl border ${tool.borderColor} ${tool.bgColor} backdrop-blur-sm overflow-hidden cursor-pointer`}
        onClick={onClick}
        whileHover={{
          scale: 1.05,
          boxShadow: `0 12px 24px ${tool.hoverShadow}`,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated gradient background */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
        />

        {/* Tool name with gradient - centered */}
        <div className="relative z-10 text-center">
          <motion.div
            className={`text-xl bg-gradient-to-r ${tool.color} bg-clip-text text-transparent`}
            whileHover={{ scale: 1.1 }}
          >
            {tool.name}
          </motion.div>
        </div>

        {/* Corner decoration */}
        <motion.div
          className={`absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br ${tool.color} rounded-full opacity-20 blur-xl`}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Click indicator */}
        <motion.div
          className="absolute top-2 right-2 text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          Details
        </motion.div>
      </motion.div>
    </motion.div>
  );
}