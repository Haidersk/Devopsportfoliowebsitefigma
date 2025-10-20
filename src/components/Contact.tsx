import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { LiquidGlass } from "./LiquidGlass";
import { motion } from "motion/react";

export function Contact() {
  const contactLinks = [
    { href: "mailto:contact@devops.pro", icon: Mail, label: "Email" },
    { href: "https://github.com/Haidersk", icon: Github, label: "GitHub", external: true },
    { href: "https://www.linkedin.com/in/haiderkind3897/", icon: Linkedin, label: "LinkedIn", external: true },
    { href: "https://www.google.com/maps/place/Kondhwa,+Pune,+Maharashtra", icon: MapPin, label: "Location", external: true },
  ];

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-600 dark:text-blue-400 mb-2">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Contact Me
          </h2>
        </motion.div>

        <LiquidGlass delay={0.3} className="max-w-md mx-auto p-8">
          <div className="flex justify-center gap-8">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                aria-label={link.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon className="h-8 w-8" />
              </motion.a>
            ))}
          </div>
        </LiquidGlass>
      </div>
    </section>
  );
}
