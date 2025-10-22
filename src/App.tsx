import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { DevOpsPipelineAnimation } from "./components/DevOpsPipelineAnimation";
import { motion } from "motion/react";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-blue-950 dark:to-purple-950 bw:from-white bw:via-gray-50 bw:to-white transition-colors">
        {/* DevOps Pipeline SVG Animation */}
        <DevOpsPipelineAnimation />
        
        {/* Animated background blobs */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/20 bw:bg-gray-400/10 rounded-full blur-3xl pointer-events-none"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-0 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/20 bw:bg-gray-500/10 rounded-full blur-3xl pointer-events-none"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-400/20 dark:bg-pink-600/20 bw:bg-gray-600/10 rounded-full blur-3xl pointer-events-none"
          animate={{
            x: [0, -50, 0],
            y: [0, 100, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <div className="relative z-10">
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
