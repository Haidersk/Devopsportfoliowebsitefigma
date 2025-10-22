import { Brain, Rocket, Users, Code2, GitBranch, Workflow } from "lucide-react";
import { motion } from "motion/react";

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
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl"
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
          className="absolute top-1/3 right-10 w-80 h-80 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-400/10 dark:bg-pink-500/10 rounded-full blur-3xl"
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
            className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
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

        {/* Traits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-20">
          {uniqueTraits.map((trait, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Card */}
              <motion.div 
                className="relative p-8 rounded-3xl h-full overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
                }}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(168, 85, 247, 0.05))",
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div 
                    className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 text-white shadow-lg mb-5"
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <trait.icon className="h-7 w-7" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl mb-3 text-gray-900 dark:text-gray-800">
                    {trait.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-700 leading-relaxed">
                    {trait.description}
                  </p>
                </div>

                {/* Decorative corner element */}
                <motion.div
                  className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Section */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85))",
              backdropFilter: "blur(30px)",
              WebkitBackdropFilter: "blur(30px)",
              border: "1px solid rgba(255, 255, 255, 0.6)",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
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
              {/* Heading */}
              <motion.h3 
                className="text-3xl md:text-4xl mb-6 text-gray-900 dark:text-gray-800"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                My DevOps Philosophy
              </motion.h3>

              {/* Quote */}
              <motion.p 
                className="text-lg md:text-xl text-gray-700 dark:text-gray-700 leading-relaxed mb-6 italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                "DevOps isn't about tools - it's about culture, automation, and continuous improvement. 
                I build systems that are reliable, scalable, and maintainable, while fostering a culture 
                where failures are learning opportunities and collaboration is the default."
              </motion.p>

              {/* Goal Statement */}
              <motion.p 
                className="text-lg md:text-xl text-gray-800 dark:text-gray-800 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                My goal is simple:{" "}
                <motion.span 
                  className="text-blue-600 dark:text-blue-600"
                  whileHover={{ scale: 1.05 }}
                  style={{ display: "inline-block" }}
                >
                  make deployments boring
                </motion.span>
                ,{" "}
                <motion.span 
                  className="text-red-500 dark:text-red-500"
                  whileHover={{ scale: 1.05 }}
                  style={{ display: "inline-block" }}
                >
                  incidents rare
                </motion.span>
                , and{" "}
                <motion.span 
                  className="text-pink-600 dark:text-pink-600"
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
      </div>
    </section>
  );
}
