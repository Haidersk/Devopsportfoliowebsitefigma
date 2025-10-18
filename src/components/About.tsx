import { Card } from "./ui/card";
import { Brain, Rocket, Users, Code2, GitBranch, Workflow } from "lucide-react";

export function About() {
  const uniqueTraits = [
    {
      icon: Brain,
      title: "Problem Solver First",
      description: "I don't just implement tools - I solve business problems. Every automation I build is driven by real impact metrics and ROI.",
    },
    {
      icon: Code2,
      title: "Developer Empathy",
      description: "I understand developers because I code. This bridges the gap between ops and dev, making truly collaborative DevOps possible.",
    },
    {
      icon: Workflow,
      title: "End-to-End Ownership",
      description: "From infrastructure design to production monitoring, I take full ownership. No handoffs, no gaps - just seamless delivery.",
    },
    {
      icon: Rocket,
      title: "Innovation Mindset",
      description: "I stay ahead by experimenting with cutting-edge tools and practices, then bringing proven innovations to production.",
    },
    {
      icon: Users,
      title: "Knowledge Sharing",
      description: "I believe in building teams, not dependencies. Documentation, mentoring, and knowledge transfer are core to my approach.",
    },
    {
      icon: GitBranch,
      title: "Infrastructure as Art",
      description: "Clean, maintainable, and elegant infrastructure code. I treat IaC with the same rigor as application development.",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-blue-600 dark:text-blue-400 mb-2">What Sets Me Apart</p>
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Beyond Traditional DevOps
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm not just another DevOps engineer who follows playbooks. I bring a unique blend of deep technical expertise, 
            business acumen, and a passion for building systems that developers love to use.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {uniqueTraits.map((trait, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow border-2 border-transparent hover:border-blue-500 dark:hover:border-blue-400"
            >
              <div className="mb-4">
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                  <trait.icon className="h-6 w-6" />
                </div>
              </div>
              <h3 className="mb-2 text-gray-900 dark:text-white">{trait.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {trait.description}
              </p>
            </Card>
          ))}
        </div>

        <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 border-2 border-blue-200 dark:border-blue-900">
          <div className="text-center">
            <h3 className="text-2xl mb-4 text-gray-900 dark:text-white">My DevOps Philosophy</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              "DevOps isn't about tools - it's about culture, automation, and continuous improvement. 
              I build systems that are reliable, scalable, and maintainable, while fostering a culture 
              where failures are learning opportunities and collaboration is the default."
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              My goal is simple: <span className="text-blue-600 dark:text-blue-400">make deployments boring</span>, 
              <span className="text-purple-600 dark:text-purple-400"> incidents rare</span>, and 
              <span className="text-pink-600 dark:text-pink-400"> developer experience exceptional</span>.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
