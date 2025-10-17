import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
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

export function Skills() {
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

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-blue-600 dark:text-blue-400 mb-2">Technical Expertise</p>
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive DevOps toolkit for building, deploying, and maintaining
            modern cloud infrastructure
          </p>
        </div>

        <Tabs defaultValue="cloud" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8 bg-white dark:bg-gray-800 p-2 gap-2 h-auto border dark:border-gray-700">
            {skillCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-3 py-3 sm:py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 rounded-lg group"
              >
                <category.icon className="h-5 w-5 group-data-[state=active]:animate-pulse" />
                <span className="text-xs sm:text-sm">{category.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="animate-in fade-in-50 duration-500">
              <Card className="p-8 border-2 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                    <category.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, index) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-4 py-2 text-base hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          <Card className="p-6 text-center">
            <Server className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h4 className="text-xl mb-2 dark:text-white">Infrastructure</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Design and manage scalable, highly available infrastructure
            </p>
          </Card>
          <Card className="p-6 text-center">
            <Network className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h4 className="text-xl mb-2 dark:text-white">Automation</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Automate deployments and streamline workflows
            </p>
          </Card>
          <Card className="p-6 text-center">
            <Gauge className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h4 className="text-xl mb-2 dark:text-white">Performance</h4>
            <p className="text-gray-600 dark:text-gray-300">
              Monitor and optimize system performance at scale
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
