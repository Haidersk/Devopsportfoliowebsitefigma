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
              <span className="text-lg md:text-xl text-gray-600 dark:text-gray-400 tracking-wide">
                Hello, I'm
              </span>
            </motion.div>

            {/* Name with Gradient */}
            <div className="space-y-3">
              <motion.h1
                className="text-6xl md:text-7xl lg:text-8xl text-gray-900 dark:text-white tracking-tight leading-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="relative inline-block">
                  Haider Shaikh
                  {/* Animated underline */}
                  <motion.span
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </span>
              </motion.h1>

              {/* Role with gradient */}
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                DevOps Engineer
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl"
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
                  className="text-lg px-8 py-6 border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400"
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
                  className="p-3 rounded-xl border border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:shadow-lg hover:shadow-blue-500/20"
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
                className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 blur-2xl"
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
                className="relative aspect-square rounded-3xl overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
                }}
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.4 }}
              >
                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.3), transparent 70%)",
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Orbiting particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 rounded-full bg-blue-500 dark:bg-blue-400"
                    style={{
                      filter: "blur(1px)",
                    }}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 10 + i * 2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.5,
                    }}
                  >
                    <motion.div
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        width: "100%",
                        height: "100%",
                        transformOrigin: `${100 + i * 30}px 0px`,
                      }}
                    />
                  </motion.div>
                ))}

                <img
                  src={profileImage}
                  alt="Haider Shaikh - DevOps Engineer"
                  className="w-full h-full object-cover relative z-10"
                />
              </motion.div>

              {/* Floating Stats Cards */}
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="absolute p-4 rounded-2xl backdrop-blur-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border:
                      "1px solid rgba(255, 255, 255, 0.5)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                    ...(index === 0 && {
                      top: "10%",
                      right: "-10%",
                    }),
                    ...(index === 1 && {
                      bottom: "40%",
                      left: "-10%",
                    }),
                    ...(index === 2 && {
                      bottom: "5%",
                      right: "-8%",
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
                  <div className="text-center min-w-[100px]">
                    <motion.div
                      className="text-2xl md:text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-xs md:text-sm text-gray-600 dark:text-gray-700 mt-1">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"
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
              className="absolute -top-8 -right-8 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"
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