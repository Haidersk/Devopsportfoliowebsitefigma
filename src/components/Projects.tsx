import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, GitBranch } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { LiquidGlassCard } from "./LiquidGlass";
import { motion } from "motion/react";

export function Projects() {
  const projects = [
    {
      title: "Multi-Cloud Kubernetes Platform",
      description:
        "Designed and implemented a multi-cloud Kubernetes infrastructure spanning AWS, Azure, and GCP. Automated deployment pipelines reduced release time by 60%.",
      image:
        "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGRhdGFjZW50ZXJ8ZW58MXx8fHwxNzYwNzExODA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Kubernetes", "Terraform", "AWS", "Azure", "GCP"],
    },
    {
      title: "CI/CD Pipeline Automation",
      description:
        "Built comprehensive CI/CD pipelines using Jenkins and GitLab CI. Integrated automated testing, security scanning, and deployment workflows for 50+ microservices.",
      image:
        "https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZGVwbG95bWVudCUyMGF1dG9tYXRpb258ZW58MXx8fHwxNzYwNzM4NTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Jenkins", "GitLab CI", "Docker", "SonarQube", "ArgoCD"],
    },
    {
      title: "Infrastructure as Code Migration",
      description:
        "Migrated legacy infrastructure to IaC using Terraform and Ansible. Achieved 100% infrastructure version control and reduced provisioning time from days to hours.",
      image:
        "https://images.unsplash.com/photo-1746893737268-81fe686e6a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjBpbmZyYXN0cnVjdHVyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwNzM4NTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Terraform", "Ansible", "AWS", "Python", "Bash"],
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
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Key projects demonstrating DevOps excellence and cloud infrastructure
            expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <LiquidGlassCard key={index} delay={index * 0.15} className="overflow-hidden">
              <div className="aspect-video overflow-hidden bg-gray-100/50 dark:bg-gray-800/50 relative">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <motion.div
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                    >
                      <Badge variant="outline">
                        {tag}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
                <div className="flex gap-2 pt-2">
                  <motion.div className="flex-1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" size="sm" className="w-full">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Details
                    </Button>
                  </motion.div>
                  <motion.div className="flex-1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" size="sm" className="w-full">
                      <GitBranch className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </motion.div>
                </div>
              </div>
            </LiquidGlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
