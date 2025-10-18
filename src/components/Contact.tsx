import { Mail, MapPin, Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-blue-600 dark:text-blue-400 mb-2">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Contact Me
          </h2>
        </div>

        <div className="flex justify-center gap-8">
          <a 
            href="mailto:contact@devops.pro"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            aria-label="Email"
          >
            <Mail className="h-8 w-8" />
          </a>
          <a 
            href="https://github.com/Haidersk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-8 w-8" />
          </a>
          <a 
            href="https://www.linkedin.com/in/haiderkind3897/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-8 w-8" />
          </a>
          <a 
            href="https://www.google.com/maps/place/Kondhwa,+Pune,+Maharashtra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            aria-label="Location"
          >
            <MapPin className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
}
