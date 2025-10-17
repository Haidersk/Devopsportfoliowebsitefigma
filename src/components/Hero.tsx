import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "figma:asset/ab102c8ae3b1e8c540fc805a93a01e7e0434e570.png";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-blue-600 dark:text-blue-400">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                DevOps Engineer
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Automating infrastructure, optimizing pipelines, and building reliable systems at scale
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button onClick={scrollToContact} size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/Haidersk"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/haiderkind3897/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="p-2 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border dark:border-gray-700">
              <div className="text-center">
                <div className="text-3xl text-blue-600 dark:text-blue-400">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
