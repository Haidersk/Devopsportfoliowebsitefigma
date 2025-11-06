import { Brain, Rocket, Users, Code2, GitBranch, Workflow, Target, Heart, Lightbulb } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export function About() {
  const [activeCategory, setActiveCategory] = useState("mindset");

  const traitCategories = [
    {
      id: "mindset",
      title: "Mindset & Approach",
      icon: Brain,
      traits: [
        {
          icon: Brain,
          title: "Problem Solver First",
          description: "I don't just implement tools - I solve business problems. Every automation I build is driven by real impact metrics and ROI.",
        },
        {
          icon: Rocket,
          title: "Innovation Mindset",
          description: "I stay ahead by experimenting with cutting-edge tools and practices, then bringing proven innovations to production.",
        },
      ],
    },
    {
      id: "collaboration",
      title: "Team & Culture",
      icon: Users,
      traits: [
        {
          icon: Code2,
          title: "Developer Empathy",
          description: "I understand developers because I code. This bridges the gap between ops and dev, making truly collaborative DevOps possible.",
        },
        {
          icon: Users,
          title: "Knowledge Sharing",
          description: "I believe in building teams, not dependencies. Documentation, mentoring, and knowledge transfer are core to my approach.",
        },
      ],
    },
    {
      id: "excellence",
      title: "Technical Excellence",
      icon: GitBranch,
      traits: [
        {
          icon: Workflow,
          title: "End-to-End Ownership",
          description: "From infrastructure design to production monitoring, I take full ownership. No handoffs, no gaps - just seamless delivery.",
        },
        {
          icon: GitBranch,
          title: "Infrastructure as Art",
          description: "Clean, maintainable, and elegant infrastructure code. I treat IaC with the same rigor as application development.",
        },
      ],
    },
  ];

  const activeTraits = traitCategories.find((cat) => cat.id === activeCategory);

  const philosophyPrinciples = [
    {
      icon: Target,
      title: "Automation First",
      description: "Automate everything that can be automated, then automate the automation.",
      color: "from-blue-500 via-blue-600 to-blue-700",
    },
    {
      icon: Heart,
      title: "Developer Experience",
      description: "Build systems that developers love to use, not just tolerate.",
      color: "from-purple-500 via-purple-600 to-purple-700",
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description: "Failures are learning opportunities, every incident makes us stronger.",
      color: "from-pink-500 via-pink-600 to-pink-700",
    },
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-96 h-96 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-10 w-80 h-80 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-300/20 dark:bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="text-blue-600 dark:text-blue-400 mb-3 tracking-wide uppercase text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            What Sets Me Apart
          </motion.p>
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Beyond Traditional DevOps
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I'm not just another DevOps engineer who follows playbooks. I bring a unique blend of deep technical expertise, 
            business acumen, and a passion for building systems that developers love to use.
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="max-w-6xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div 
            className="flex flex-wrap justify-center gap-3 p-4 rounded-3xl"
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            }}
          >
            {traitCategories.map((category, index) => {
              const isActive = activeCategory === category.id;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? "text-white shadow-lg"
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-100/50 dark:hover:bg-gray-200/50"
                  }`}
                  style={
                    isActive
                      ? { background: "linear-gradient(135deg, #6366f1, #a855f7)" }
                      : {}
                  }
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <category.icon 
                    className={`h-5 w-5 ${isActive ? "animate-pulse" : ""}`} 
                  />
                  <span className="text-sm">{category.title}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Traits Display */}
        <div className="max-w-5xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                {activeTraits?.traits.map((trait, index) => (
                  <motion.div
                    key={trait.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                  >
                    <motion.div
                      className="p-6 rounded-2xl h-full"
                      style={{
                        background: "rgba(255, 255, 255, 0.15)",
                        backdropFilter: "blur(15px)",
                        WebkitBackdropFilter: "blur(15px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                      }}
                      whileHover={{
                        y: -4,
                        boxShadow: "0 8px 24px rgba(99, 102, 241, 0.3)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div 
                        className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 text-white shadow-md mb-4"
                        whileHover={{ 
                          rotate: [0, -10, 10, -10, 0],
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <trait.icon className="h-6 w-6" />
                      </motion.div>

                      <h4 className="text-xl mb-2 text-gray-900 dark:text-white">
                        {trait.title}
                      </h4>

                      <p className="text-gray-600 dark:text-gray-200 leading-relaxed">
                        {trait.description}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Philosophy Section */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* Philosophy Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.p 
              className="text-blue-600 dark:text-blue-400 mb-3 tracking-wide uppercase text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.75 }}
            >
              Core Principles
            </motion.p>
            <motion.h3 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              My DevOps Philosophy
            </motion.h3>
          </motion.div>

          {/* Philosophy Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {philosophyPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.85 + index * 0.1 }}
              >
                <motion.div 
                  className="relative p-8 rounded-3xl h-full text-center"
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(15px)",
                    WebkitBackdropFilter: "blur(15px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
                  }}
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.2)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${principle.color} text-white shadow-lg mb-5`}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <principle.icon className="h-8 w-8" />
                  </motion.div>

                  <h4 className="text-xl md:text-2xl mb-3 text-gray-900 dark:text-white">
                    {principle.title}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-200 leading-relaxed">
                    {principle.description}
                  </p>

                  <motion.div
                    className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Philosophy Statement */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.15 }}
          >
            {/* Background glow */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Philosophy Card */}
            <motion.div 
              className="relative p-10 md:p-12 rounded-3xl overflow-hidden"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(25px)",
                WebkitBackdropFilter: "blur(25px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
              }}
              whileHover={{
                boxShadow: "0 30px 80px rgba(0, 0, 0, 0.15)",
              }}
            >
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 opacity-30"
                style={{
                  background: "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1), transparent 70%)",
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <div className="relative z-10 text-center">
                {/* Quote */}
                <motion.p 
                  className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed mb-6 italic"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  "DevOps isn't about tools - it's about culture, automation, and continuous improvement. 
                  I build systems that are reliable, scalable, and maintainable, while fostering a culture 
                  where failures are learning opportunities and collaboration is the default."
                </motion.p>

                {/* Goal Statement */}
                <motion.p 
                  className="text-lg md:text-xl text-gray-800 dark:text-gray-100 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.25 }}
                >
                  My goal is simple:{" "}
                  <motion.span 
                    className="text-blue-600 dark:text-blue-400"
                    whileHover={{ scale: 1.05 }}
                    style={{ display: "inline-block" }}
                  >
                    make deployments boring
                  </motion.span>
                  ,{" "}
                  <motion.span 
                    className="text-red-500 dark:text-red-400"
                    whileHover={{ scale: 1.05 }}
                    style={{ display: "inline-block" }}
                  >
                    incidents rare
                  </motion.span>
                  , and{" "}
                  <motion.span 
                    className="text-pink-600 dark:text-pink-400"
                    whileHover={{ scale: 1.05 }}
                    style={{ display: "inline-block" }}
                  >
                    developer experience exceptional
                  </motion.span>
                  .
                </motion.p>
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"
                animate={{
                  x: [0, 20, 0],
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
                animate={{
                  x: [0, -20, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
