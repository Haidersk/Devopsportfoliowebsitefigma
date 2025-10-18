import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl mb-4">
              <span className="text-blue-400">DevOps</span>
            </div>
            <p className="text-gray-400 dark:text-gray-500">
              Building and optimizing cloud infrastructure for the modern web
            </p>
          </div>

          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-blue-400 transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-blue-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-700 dark:border-gray-800 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-900 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-700 dark:border-gray-800 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-900 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:haidershaikh2050@gmail.com"
                className="p-2 border border-gray-700 dark:border-gray-800 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-900 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-900 pt-8 text-center text-gray-400 dark:text-gray-500">
          <p className="flex items-center justify-center gap-2">
            © 2025 Made with <Heart size={16} className="text-red-500" /> by Haider Shaikh. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
