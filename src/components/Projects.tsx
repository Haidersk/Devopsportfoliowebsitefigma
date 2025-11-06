import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, GitBranch, X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { LiquidGlassCard } from "./LiquidGlass";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Multi-Cloud Kubernetes Platform",
      description:
        "Designed and implemented a multi-cloud Kubernetes infrastructure spanning AWS, Azure, and GCP. Automated deployment pipelines reduced release time by 60%.",
      fullDescription: "Led the design and implementation of a comprehensive multi-cloud Kubernetes infrastructure spanning AWS EKS, Azure AKS, and Google GKE. Architected a unified deployment strategy that enabled seamless workload migration across cloud providers. Implemented automated CI/CD pipelines using GitOps principles with ArgoCD, reducing release time by 60% and deployment errors by 85%. Established centralized monitoring and logging using Prometheus, Grafana, and ELK stack. Created disaster recovery procedures and implemented automated failover mechanisms ensuring 99.99% uptime.",
      image:
        "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGRhdGFjZW50ZXJ8ZW58MXx8fHwxNzYwNzExODA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Kubernetes", "Terraform", "AWS", "Azure", "GCP"],
      achievements: [
        "60% reduction in release time",
        "85% reduction in deployment errors",
        "99.99% uptime achieved",
        "Seamless multi-cloud workload migration"
      ]
    },
    {
      title: "CI/CD Pipeline Automation",
      description:
        "Built comprehensive CI/CD pipelines using Jenkins and GitLab CI. Integrated automated testing, security scanning, and deployment workflows for 50+ microservices.",
      fullDescription: "Engineered comprehensive CI/CD pipelines using Jenkins and GitLab CI for 50+ microservices. Integrated automated testing frameworks (Jest, PyTest, JUnit), security scanning (SonarQube, Snyk, Trivy), and deployment workflows. Implemented blue-green deployments and canary releases to minimize downtime. Created self-service deployment portals reducing manual intervention by 70%. Established code quality gates and automated rollback mechanisms ensuring production stability.",
      image:
        "https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZGVwbG95bWVudCUyMGF1dG9tYXRpb258ZW58MXx8fHwxNzYwNzM4NTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Jenkins", "GitLab CI", "Docker", "SonarQube", "ArgoCD"],
      achievements: [
        "50+ microservices automated",
        "70% reduction in manual deployments",
        "Zero-downtime deployments",
        "Integrated security scanning"
      ]
    },
    {
      title: "Infrastructure as Code Migration",
      description:
        "Migrated legacy infrastructure to IaC using Terraform and Ansible. Achieved 100% infrastructure version control and reduced provisioning time from days to hours.",
      fullDescription: "Led a comprehensive migration of legacy infrastructure to Infrastructure as Code using Terraform and Ansible. Developed modular Terraform configurations for AWS, implementing best practices for state management and workspace organization. Created Ansible playbooks for configuration management across 200+ servers. Established automated testing for infrastructure code using Terratest and Kitchen. Implemented GitOps workflows for infrastructure changes, achieving 100% version control and audit trails. Reduced infrastructure provisioning time from days to hours while improving consistency and reliability.",
      image:
        "https://images.unsplash.com/photo-1746893737268-81fe686e6a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjBpbmZyYXN0cnVjdHVyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwNzM4NTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Terraform", "Ansible", "AWS", "Python", "Bash"],
      achievements: [
        "200+ servers migrated to IaC",
        "100% infrastructure version control",
        "Days to hours provisioning time",
        "Automated infrastructure testing"
      ]
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-600 dark:text-blue-400 mb-2">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent leading-tight">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Key projects demonstrating DevOps excellence and cloud infrastructure
            expertise
          </p>
        </motion.div>

        {/* Compact Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(index)}
              className="cursor-pointer"
            >
              <LiquidGlassCard delay={index * 0.15} className="overflow-hidden group h-full">
                {/* Project Image/Icon */}
                <div className="aspect-square overflow-hidden bg-gray-100/50 dark:bg-[#2a2c2d]/50 relative">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-blue-600/80 via-purple-600/40 to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Click hint */}
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                  >
                    <div className="bg-white dark:bg-gray-900 px-4 py-2 rounded-full shadow-lg">
                      <p className="text-sm text-gray-900 dark:text-white">Click to view details</p>
                    </div>
                  </motion.div>
                </div>

                {/* Project Title & Quick Info */}
                <div className="p-4 space-y-2">
                  <h3 className="text-lg dark:text-white line-clamp-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{project.description}</p>
                  
                  {/* Tag Preview - Show first 2 tags */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {project.tags.slice(0, 2).map((tag) => (
                      <Badge 
                        key={tag}
                        variant="outline"
                        className="border-gray-400 dark:border-gray-500 text-gray-900 dark:text-white bg-white/50 dark:bg-white/10 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 2 && (
                      <Badge 
                        variant="outline"
                        className="border-gray-400 dark:border-gray-500 text-gray-900 dark:text-white bg-white/50 dark:bg-white/10 text-xs"
                      >
                        +{project.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                </div>
              </LiquidGlassCard>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              />
              
              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-hidden"
              >
                <LiquidGlassCard className="h-full overflow-y-auto">
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 transition-colors"
                  >
                    <X className="h-5 w-5 text-gray-900 dark:text-white" />
                  </button>

                  {/* Project Image */}
                  <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-[#2a2c2d]">
                    <ImageWithFallback
                      src={projects[selectedProject].image}
                      alt={projects[selectedProject].title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="p-6 md:p-8 space-y-6">
                    <div>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl dark:text-white mb-2">
                        {projects[selectedProject].title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300">
                        {projects[selectedProject].fullDescription}
                      </p>
                    </div>

                    {/* Key Achievements */}
                    <div>
                      <h3 className="text-xl dark:text-white mb-3">Key Achievements</h3>
                      <ul className="space-y-2">
                        {projects[selectedProject].achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                          >
                            <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* All Tags */}
                    <div>
                      <h3 className="text-xl dark:text-white mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {projects[selectedProject].tags.map((tag, idx) => (
                          <motion.div
                            key={tag}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                          >
                            <Badge 
                              variant="outline"
                              className="border-gray-400 dark:border-gray-500 text-gray-900 dark:text-white bg-white/50 dark:bg-white/10"
                            >
                              {tag}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button 
                          variant="outline" 
                          className="w-full border-gray-400 dark:border-gray-500 text-gray-900 dark:text-white bg-white/50 dark:bg-white/10 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Live Demo
                        </Button>
                      </motion.div>
                      <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button 
                          variant="outline" 
                          className="w-full border-gray-400 dark:border-gray-500 text-gray-900 dark:text-white bg-white/50 dark:bg-white/10 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          <GitBranch className="h-4 w-4 mr-2" />
                          View Code
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </LiquidGlassCard>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}