import { Badge } from "./ui/badge";
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
import { useState } from "react";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("cloud");

  const skillCategories = [
    {
      id: "cloud",
      title: "Cloud Platforms",
      icon: Cloud,
      skills: ["AWS", "Azure", "Google Cloud", "DigitalOcean", "Heroku"],
    },
    {
      id: "containers",
      title: "Containers & Orchestration",
      icon: Container,
      skills: ["Docker", "Kubernetes", "Helm", "Docker Swarm", "ECS"],
    },
    {
      id: "cicd",
      title: "CI/CD",
      icon: GitBranch,
      skills: ["Jenkins", "GitLab CI", "GitHub Actions", "CircleCI", "ArgoCD"],
    },
    {
      id: "iac",
      title: "Infrastructure as Code",
      icon: Code,
      skills: ["Terraform", "Ansible", "CloudFormation", "Pulumi", "Chef"],
    },
    {
      id: "monitoring",
      title: "Monitoring & Logging",
      icon: Gauge,
      skills: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic"],
    },
    {
      id: "security",
      title: "Security & Compliance",
      icon: Shield,
      skills: ["HashiCorp Vault", "SonarQube", "Snyk", "OWASP", "SSL/TLS"],
    },
  ];

  const activeSkills = skillCategories.find((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-blue-300/20 dark:bg-blue-500/10 bw:bg-gray-300/10 rounded-full blur-3xl"
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
          className="absolute top-1/4 right-20 w-80 h-80 bg-purple-300/20 dark:bg-purple-500/10 bw:bg-gray-400/10 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-1/4 w-72 h-72 bg-pink-300/20 dark:bg-pink-500/10 bw:bg-gray-500/10 rounded-full blur-3xl"
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
            className="text-blue-600 dark:text-blue-400 bw:text-gray-700 mb-3 tracking-wide uppercase text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Technical Expertise
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bw:from-gray-700 bw:via-gray-800 bw:to-black bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 bw:text-gray-700 max-w-3xl mx-auto leading-relaxed"
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
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
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
                      : "text-gray-700 dark:text-gray-800 bw:text-gray-700 hover:bg-gray-100/50 dark:hover:bg-gray-200/50 bw:hover:bg-gray-200/50"
                  }`}
                  style={
                    isActive
                      ? {
                          background: "linear-gradient(135deg, #6366f1, #a855f7)",
                        }
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
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85))",
              backdropFilter: "blur(30px)",
              WebkitBackdropFilter: "blur(30px)",
              border: "1px solid rgba(255, 255, 255, 0.6)",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
            }}
            key={activeCategory}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-8">
              <motion.div 
                className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 text-white shadow-lg"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {activeSkills && <activeSkills.icon className="h-8 w-8" />}
              </motion.div>
              <h3 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-700 bw:text-black">
                {activeSkills?.title}
              </h3>
            </div>

            {/* Skills Badges */}
            <div className="flex flex-wrap gap-3">
              {activeSkills?.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <motion.div
                    className="px-5 py-2.5 rounded-xl text-gray-700 dark:text-gray-800 bw:text-gray-800 cursor-pointer"
                    style={{
                      background: "linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(245, 245, 245, 0.9))",
                      border: "1px solid rgba(200, 200, 200, 0.3)",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 4px 16px rgba(99, 102, 241, 0.3)",
                      background: "linear-gradient(135deg, #6366f1, #a855f7)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="hover:text-white transition-colors duration-300">
                      {skill}
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
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
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
                }}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
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

                {/* Title */}
                <h4 className="text-xl md:text-2xl mb-3 text-gray-900 dark:text-gray-800">
                  {feature.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-700 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative glow */}
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
    </section>
  );
}
