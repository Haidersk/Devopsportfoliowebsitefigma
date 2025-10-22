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

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20 bw:from-white bw:via-gray-50 bw:to-white pointer-events-none" />

      {/* Floating DevOps Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10 dark:opacity-5 bw:opacity-5">
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
                className="text-blue-600 dark:text-blue-400 bw:text-gray-700"
              />
            </motion.div>
          ),
        )}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            {/* Greeting */}
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-lg md:text-xl text-gray-600 dark:text-gray-400 bw:text-gray-700 tracking-wide">
                Hello, I'm
              </span>
            </motion.div>

            {/* Name with Gradient */}
            <div className="space-y-3">
              <motion.h1
                className="text-6xl md:text-7xl lg:text-8xl text-gray-900 dark:text-white bw:text-black tracking-tight leading-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="relative inline-block">
                  Haider Shaikh
                  {/* Animated underline */}
                  <motion.span
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bw:from-gray-700 bw:via-gray-800 bw:to-black"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </span>
              </motion.h1>

              {/* Role with gradient */}
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bw:from-gray-700 bw:via-gray-800 bw:to-black bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                DevOps Engineer
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 bw:text-gray-700 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Automating infrastructure, optimizing pipelines,
              and building reliable systems at scale
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
                  className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 bw:from-gray-800 bw:to-black bw:hover:from-gray-700 bw:hover:to-gray-800 shadow-lg shadow-blue-500/50 dark:shadow-blue-400/30 bw:shadow-gray-500/50"
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
                  className="text-lg px-8 py-6 border-2 border-gray-300 dark:border-gray-700 bw:border-gray-400 hover:border-blue-600 dark:hover:border-blue-400 bw:hover:border-black hover:text-blue-600 dark:hover:text-blue-400 bw:hover:text-black bg-white/80 dark:bg-gray-900/80 bw:bg-white/90 backdrop-blur-sm"
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
                  className="p-3 rounded-xl bg-white/80 dark:bg-gray-900/80 bw:bg-white/90 backdrop-blur-sm border border-gray-300 dark:border-gray-700 bw:border-gray-400 hover:border-blue-600 dark:hover:border-blue-400 bw:hover:border-black text-gray-600 dark:text-gray-400 bw:text-gray-700 hover:text-blue-600 dark:hover:text-blue-400 bw:hover:text-black transition-all hover:shadow-lg hover:shadow-blue-500/20 bw:hover:shadow-gray-500/20"
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
                className="absolute -inset-8 bg-gradient-to-br from-blue-400/30 via-purple-400/30 to-pink-400/30 dark:from-blue-600/20 dark:via-purple-600/20 dark:to-pink-600/20 bw:from-gray-300/20 bw:via-gray-400/20 bw:to-gray-500/20 rounded-3xl blur-3xl"
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
                className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(147, 197, 253, 0.3), rgba(196, 181, 253, 0.3), rgba(251, 207, 232, 0.3))",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
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
                  className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-pink-400/10 pointer-events-none"
                />
              </motion.div>

              {/* Floating Stats Cards */}
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="absolute p-5 rounded-2xl backdrop-blur-xl shadow-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85))",
                    backdropFilter: "blur(30px)",
                    WebkitBackdropFilter: "blur(30px)",
                    border:
                      "1px solid rgba(255, 255, 255, 0.6)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
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
                      className="text-3xl md:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bw:from-gray-800 bw:to-black bg-clip-text text-transparent"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-gray-600 dark:text-gray-700 bw:text-gray-700 mt-1">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-400/30 dark:bg-blue-500/20 bw:bg-gray-400/20 rounded-full blur-3xl"
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
              className="absolute -top-8 -right-8 w-40 h-40 bg-purple-400/30 dark:bg-purple-500/20 bw:bg-gray-500/20 rounded-full blur-3xl"
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
