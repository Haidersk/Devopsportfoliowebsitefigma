import { motion } from "motion/react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import {
  CheckCircle2,
  TrendingUp,
  Zap,
  Code,
} from "lucide-react";
import { ToolData } from "./toolsData";

interface ToolModalProps {
  tool: ToolData | null;
  isOpen: boolean;
  onClose: () => void;
  categoryIcon: React.ComponentType<{ className?: string }>;
}

export function ToolModal({ tool, isOpen, onClose, categoryIcon: CategoryIcon }: ToolModalProps) {
  if (!tool) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
        <div className="relative">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-4 pb-4 border-b border-gray-200 dark:border-gray-700">
              <motion.div
                className={`p-3 rounded-xl bg-gradient-to-br ${tool.color}`}
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <CategoryIcon className="h-8 w-8 text-white" />
              </motion.div>
              <div>
                <h3 className={`text-3xl bg-gradient-to-r ${tool.color} bg-clip-text text-transparent`}>
                  {tool.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {tool.fullName}
                </p>
              </div>
            </DialogTitle>
            <DialogDescription className="sr-only">
              Detailed information about {tool.name}, including experience, key skills, and highlights.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 space-y-6">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                {tool.description}
              </p>
            </motion.div>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Zap className={`h-5 w-5 bg-gradient-to-r ${tool.color} bg-clip-text text-transparent`} style={{ color: 'currentColor' }} />
                <h4 className="text-lg text-gray-900 dark:text-white">Key Highlights</h4>
              </div>
              <div className="space-y-3">
                {tool.highlights.map((highlight, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                  >
                    <CheckCircle2 className={`h-5 w-5 mt-0.5 flex-shrink-0 bg-gradient-to-r ${tool.color} bg-clip-text text-transparent`} style={{ color: 'currentColor' }} />
                    <p className="text-sm text-gray-700 dark:text-gray-300">{highlight}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Code className={`h-5 w-5 bg-gradient-to-r ${tool.color} bg-clip-text text-transparent`} style={{ color: 'currentColor' }} />
                <h4 className="text-lg text-gray-900 dark:text-white">Technical Skills</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {tool.keySkills.map((skill, idx) => (
                  <motion.span
                    key={skill}
                    className={`px-4 py-2 text-sm rounded-full border-2 ${tool.borderColor} ${tool.bgColor} text-gray-700 dark:text-gray-200`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + idx * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}