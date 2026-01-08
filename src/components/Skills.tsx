import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Server,
  Cloud,
  Container,
  GitBranch,
  Network,
  Shield,
  Gauge,
  Code,
} from "lucide-react";
import {
  containersTools,
  cicdTools,
  iacTools,
  monitoringTools,
  securityTools,
  linuxTools,
  cloudTools,
  ToolData,
} from "./toolsData";
import { ToolCard } from "./ToolCard";
import { ToolModal } from "./ToolModal";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("containers");
  const [selectedTool, setSelectedTool] = useState<{category: string, index: number} | null>(null);

  const skillCategories = [
    {
      id: "containers",
      title: "Containers & Orchestration",
      icon: Container,
      skills: ["Docker", "Kubernetes", "ECS"],
    },
    {
      id: "cicd",
      title: "CI/CD",
      icon: GitBranch,
      skills: ["Jenkins", "GitLab CI", "GitHub Actions"],
    },
    {
      id: "iac",
      title: "Infrastructure as Code",
      icon: Code,
      skills: ["Terraform", "Ansible", "CloudFormation"],
    },
    {
      id: "monitoring",
      title: "Monitoring & Logging",
      icon: Gauge,
      skills: ["Prometheus", "Grafana", "Datadog"],
    },
    {
      id: "security",
      title: "Security & Compliance",
      icon: Shield,
      skills: ["HashiCorp Vault", "SonarQube", "Snyk", "OWASP", "SSL/TLS"],
    },
    {
      id: "linux",
      title: "Linux & Unix",
      icon: Server,
      skills: ["Ubuntu", "CentOS", "Debian", "Red Hat", "Fedora"],
    },
    {
      id: "cloud",
      title: "Cloud Services",
      icon: Cloud,
      skills: ["AWS", "Azure", "Google Cloud"],
    },
  ];

  const activeSkills = skillCategories.find((cat) => cat.id === activeCategory);

  // Get tools data for current category
  const getToolsForCategory = (category: string): ToolData[] => {
    switch (category) {
      case "containers":
        return containersTools;
      case "cicd":
        return cicdTools;
      case "iac":
        return iacTools;
      case "monitoring":
        return monitoringTools;
      case "security":
        return securityTools;
      case "linux":
        return linuxTools;
      case "cloud":
        return cloudTools;
      default:
        return [];
    }
  };

  const currentTools = getToolsForCategory(activeCategory);

  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/4 right-20 w-80 h-80 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-72 h-72 bg-pink-300/20 dark:bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="text-blue-600 dark:text-blue-400 mb-3 tracking-wide uppercase text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Technical Expertise
          </motion.p>
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Comprehensive DevOps toolkit for building, deploying, and maintaining modern cloud infrastructure
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="max-w-6xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div 
            className="flex flex-wrap justify-center gap-3 p-4 rounded-3xl"
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            }}
          >
            {skillCategories.map((category, index) => {
              const isActive = activeCategory === category.id;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? "text-white shadow-lg"
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-100/50 dark:hover:bg-gray-200/50"
                  }`}
                  style={
                    isActive
                      ? { background: "linear-gradient(135deg, #6366f1, #a855f7)" }
                      : {}
                  }
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <category.icon 
                    className={`h-5 w-5 ${isActive ? "animate-pulse" : ""}`} 
                  />
                  <span className="text-sm">{category.title}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Skills Display */}
        <motion.div
          className="max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.div 
            className="p-10 md:p-12 rounded-3xl"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(25px)",
              WebkitBackdropFilter: "blur(25px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
            }}
            key={activeCategory}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div 
                className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 text-white shadow-lg"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {activeSkills && <activeSkills.icon className="h-8 w-8" />}
              </motion.div>
              <h3 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-300">
                {activeSkills?.title}
              </h3>
            </div>

            {/* Tool cards for all categories */}
            {currentTools.length > 0 ? (
              <div className={`grid gap-4 ${
                activeCategory === "cloud" 
                  ? "md:grid-cols-3" 
                  : "md:grid-cols-3 lg:grid-cols-5"
              }`}>
                {currentTools.map((tool, index) => (
                  <ToolCard
                    key={tool.name}
                    tool={tool}
                    index={index}
                    onClick={() => setSelectedTool({ category: activeCategory, index })}
                  />
                ))}
              </div>
            ) : (
              // Fallback for categories without tool data
              <div className="flex flex-wrap gap-3">
                {activeSkills?.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <motion.div
                      className="px-5 py-2.5 rounded-xl cursor-pointer"
                      style={{
                        background: "rgba(255, 255, 255, 0.15)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                      }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 4px 16px rgba(99, 102, 241, 0.4)",
                        background: "linear-gradient(135deg, #6366f1, #a855f7)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-gray-700 dark:text-white hover:text-white transition-colors duration-300">
                        {skill}
                      </span>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: Server,
              title: "Infrastructure",
              description: "Design and manage scalable, highly available infrastructure",
              delay: 0.6,
            },
            {
              icon: Network,
              title: "Automation",
              description: "Automate deployments and streamline workflows",
              delay: 0.7,
            },
            {
              icon: Gauge,
              title: "Performance",
              description: "Monitor and optimize system performance at scale",
              delay: 0.8,
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
            >
              <motion.div 
                className="relative p-8 rounded-3xl h-full text-center"
                style={{
                  background: "rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(15px)",
                  WebkitBackdropFilter: "blur(15px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
                }}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 text-white shadow-lg mb-5"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="h-8 w-8" />
                </motion.div>

                <h4 className="text-xl md:text-2xl mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h4>

                <p className="text-gray-600 dark:text-gray-200 leading-relaxed">
                  {feature.description}
                </p>

                <motion.div
                  className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tool Modal */}
      <ToolModal
        tool={selectedTool ? getToolsForCategory(selectedTool.category)[selectedTool.index] : null}
        isOpen={selectedTool !== null}
        onClose={() => setSelectedTool(null)}
        categoryIcon={activeSkills?.icon || Cloud}
      />
    </section>
  );
}