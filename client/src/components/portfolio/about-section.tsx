import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { portfolioData } from "@/lib/portfolio-data";
import { slideInLeft, slideInRight, fadeInUp } from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export function AboutSection() {
  const { summary, stats } = portfolioData;
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/40 rounded-xl shadow-inner">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
          {/* Profile Image */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <motion.div
              className="relative w-72 h-72 rounded-full p-1 bg-gradient-to-tr from-[#7dd4ff] to-purple-400 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="../../../public/profile.jpg" // ✅ Replace with your image path
                alt="Mitkumar Patel"
                className="w-full h-full object-cover rounded-full border-4 border-background"
              />
            </motion.div>
          </motion.div>

          {/* About Text */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Software Developer & Problem Solver
            </h3>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
              <motion.p variants={fadeInUp}>
                With hands-on experience in React Native, MERN stack, and cloud
                platforms like Azure, I specialize in creating scalable,
                end-to-end solutions. My passion lies in writing clean,
                efficient code and delivering features that solve real-world
                challenges.
              </motion.p>
              <motion.p variants={fadeInUp}>
                Currently pursuing my Master's in Applied Computing at the
                University of Windsor, I'm always eager to learn emerging
                technologies and collaborate with cross-functional teams to
                deliver exceptional user experiences.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              ref={ref}
              className="grid grid-cols-3 gap-6"
              variants={fadeInUp}
              initial="hidden"
              animate={isIntersecting ? "visible" : "hidden"}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-extrabold text-[#7dd4ff] tracking-tight mb-1">
                    <AnimatedCounter end={stat.value} />
                    {stat.label === "Years Experience" && "+"}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
