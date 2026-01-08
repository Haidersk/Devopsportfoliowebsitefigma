import {
  Github,
  Linkedin,
  Mail,
  Download,
  Terminal,
  Code,
  Cpu,
  Server,
} from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import profileImage from "figma:asset/ab102c8ae3b1e8c540fc805a93a01e7e0434e570.png";
import { useState, useEffect } from "react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Continuous Typewriter effect for DevOps Engineer
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "DevOps Engineer";
  
  useEffect(() => {
    const typeSpeed = 100; // Typing speed
    const deleteSpeed = 50; // Deleting speed
    const pauseTime = 2000; // Pause before deleting
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < fullText.length) {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(fullText.slice(0, displayedText.length - 1));
        } else {
          // Finished deleting, start typing again
          setIsDeleting(false);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);
    
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting]);

  // Floating icons data
  const floatingIcons = [
    { Icon: Terminal, delay: 0, duration: 20, x: 10, y: 20 },
    { Icon: Code, delay: 2, duration: 25, x: 80, y: 15 },
    { Icon: Cpu, delay: 4, duration: 22, x: 15, y: 70 },
    { Icon: Server, delay: 6, duration: 24, x: 85, y: 75 },
  ];

  // Statistics data
  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "5+", label: "Projects Deployed" },
  ];

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-screen flex items-center"
    >
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-black dark:via-black dark:to-black pointer-events-none" />

      {/* Floating DevOps Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10 dark:opacity-5">
        {floatingIcons.map(
          ({ Icon, delay, duration, x, y }, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{ left: `${x}%`, top: `${y}%` }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: "easeInOut",
              }}
            >
              <Icon
                size={80}
                className="text-blue-600 dark:text-blue-400"
              />
            </motion.div>
          ),
        )}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content (This part was mostly correct) */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >

            
            {/* Greeting - Continuous Fade in/out */}
            <motion.div
              className="inline-block"
              animate={{ 
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-lg md:text-xl text-gray-600 dark:text-gray-400 tracking-wide">
                Hello, I'm
              </span>
            </motion.div>

            {/* Name with Gradient - Continuous Slide + Scale */}
            <div className="space-y-3">
              <motion.h1
                className="text-6xl md:text-7xl lg:text-8xl text-gray-900 dark:text-white tracking-tight leading-none"
                animate={{ 
                  y: [0, -5, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="relative inline-block">
                  Haider Shaikh
                  {/* Animated underline - Continuous pulse */}
                  <motion.span
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400"
                    animate={{ 
                      width: ["0%", "100%", "100%", "0%"],
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{ 
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </span>
              </motion.h1>

              {/* Role with Continuous Typewriter effect */}
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent leading-tight min-h-[1.2em]">
                {displayedText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ 
                    duration: 0.8, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="inline-block w-1 h-[0.8em] ml-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400"
                />
              </div>
            </div>

            {/* Description */}
            <motion.p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.span
                animate={{
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Automating infrastructure, optimizing pipelines,
                and building reliable systems at scale
              </motion.span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 shadow-lg shadow-blue-500/50 dark:shadow-blue-400/30"
                >
                  Get In Touch
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 border-2 border-gray-400 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 bg-white/90 dark:bg-black/50 backdrop-blur-sm"
                >
                  <Download className="mr-2" size={20} />
                  Download CV
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {[
                {
                  Icon: Github,
                  href: "https://github.com/Haidersk",
                },
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/in/haiderkind3897/",
                },
                {
                  Icon: Mail,
                  href: "mailto:haidershaikh2050@gmail.com",
                },
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target={
                    href.startsWith("mailto:")
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="p-3 rounded-xl bg-white/80 dark:bg-[#232526]/80 backdrop-blur-sm border border-gray-300 dark:border-[#414345] hover:border-blue-600 dark:hover:border-blue-400 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:shadow-lg hover:shadow-blue-500/20"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
            
          </motion.div>

          {/* Right Content - Profile Image & Stats */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            {/* Main Profile Card */}
            <div className="relative">
              {/* Glow effect background */}
              <motion.div
                className="absolute -inset-8 bg-gradient-to-br from-blue-400/30 via-purple-400/30 to-pink-400/30 dark:from-blue-600/20 dark:via-purple-600/20 dark:to-pink-600/20 rounded-3xl blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Image Container */}
              <motion.div
                className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl 
                           bg-gradient-to-br from-blue-200/30 via-purple-200/30 to-pink-200/30
                           dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30
                           border border-white/30 dark:border-gray-700/50
                           backdrop-blur-xl"
                
                // 1. FIX: REMOVED THE HARDCODED STYLE PROP
                // style={{
                //   background:
                //     "linear-gradient(135deg, rgba(147, 197, 253, 0.3), rgba(196, 181, 253, 0.3), rgba(251, 207, 232, 0.3))",
                //   backdropFilter: "blur(20px)",
                //   WebkitBackdropFilter: "blur(20px)",
                //   border: "1px solid rgba(255, 255, 255, 0.3)",
                // }}
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.4 }}
              >
                {/* Profile Image */}
                <img
                  src={profileImage}
                  alt="Haider Shaikh - DevOps Engineer"
                  className="w-full h-full object-cover relative z-10"
                  style={{
                    objectPosition: "center",
                  }}
                />

                {/* Gradient Overlay for better blending */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-pink-400/10 
                             dark:from-blue-400/10 dark:to-pink-400/10
                             pointer-events-none"
                />
              </motion.div>

              {/* Floating Stats Cards */}
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="absolute p-5 rounded-2xl backdrop-blur-xl 
                             bg-white/85 dark:bg-[#2a2c2d]/85
                             border border-white/60 dark:border-[#414345]/80
                             shadow-xl dark:shadow-[#232526]/50"
                  style={{
                    // 3. FIX: REMOVED background, border, and boxShadow from here
                    backdropFilter: "blur(30px)",
                    WebkitBackdropFilter: "blur(30px)",
                    // Keep the positioning logic
                    ...(index === 0 && {
                      top: "15%",
                      right: "-12%",
                    }),
                    ...(index === 1 && {
                      bottom: "35%",
                      left: "-12%",
                    }),
                  }}
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.8 + index * 0.1,
                  }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <div className="text-center min-w-[120px]">
                    <motion.div
                      className="text-3xl md:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative Elements (These were correct) */}
            <motion.div
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-400/30 dark:bg-blue-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -top-8 -right-8 w-40 h-40 bg-purple-400/30 dark:bg-purple-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}