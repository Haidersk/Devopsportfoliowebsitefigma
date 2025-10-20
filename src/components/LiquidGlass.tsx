import { motion } from "motion/react";
import { ReactNode } from "react";

interface LiquidGlassProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export function LiquidGlass({ children, className = "", delay = 0, hover = true }: LiquidGlassProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      whileHover={hover ? {
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.3, ease: "easeOut" }
      } : undefined}
      className={`relative ${className}`}
      style={{
        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "20px",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
      }}
    >
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 rounded-[20px] opacity-0"
        style={{
          background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))",
        }}
        whileHover={hover ? { opacity: 1 } : undefined}
        transition={{ duration: 0.5 }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

export function LiquidGlassCard({ children, className = "", delay = 0 }: LiquidGlassProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: -10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      whileHover={{
        y: -8,
        rotateX: 2,
        scale: 1.03,
        transition: { duration: 0.4, ease: "easeOut" }
      }}
      className={`relative ${className}`}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      <div
        className="relative overflow-hidden rounded-2xl"
        style={{
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          border: "1px solid rgba(255, 255, 255, 0.25)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.3)",
        }}
      >
        {/* Animated shine effect */}
        <motion.div
          className="absolute inset-0 opacity-0"
          style={{
            background: "linear-gradient(110deg, transparent 25%, rgba(255, 255, 255, 0.2) 50%, transparent 75%)",
          }}
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
          }}
        />
        
        {/* Liquid gradient background */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.3), transparent 70%)",
          }}
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
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

export function LiquidGlassButton({ children, className = "", onClick }: { children: ReactNode; className?: string; onClick?: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative overflow-hidden ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        borderRadius: "12px",
        boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.2)",
      }}
    >
      {/* Ripple effect on hover */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)",
        }}
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 2, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />
      
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
