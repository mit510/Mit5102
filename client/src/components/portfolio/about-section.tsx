import { motion } from "framer-motion";
import { User } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { portfolioData } from "@/lib/portfolio-data";
import { slideInLeft, slideInRight, fadeInUp } from "@/lib/animations";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export function AboutSection() {
  const { summary, stats } = portfolioData;
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section id="about" className="py-20 bg-muted/30">
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Professional headshot placeholder */}
            <div className="relative">
              <motion.div
                className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <User className="w-32 h-32 text-muted-foreground" />
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              />
            </div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              Full-Stack Developer & Problem Solver
            </h3>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
              <p>
                With hands-on experience in React Native, MERN stack, and cloud platforms like Azure, 
                I specialize in creating scalable, end-to-end solutions. My passion lies in writing 
                clean, efficient code and delivering features that solve real-world challenges.
              </p>
              <p>
                Currently pursuing my Master's in Applied Computing at University of Windsor, 
                I'm always eager to learn emerging technologies and collaborate with cross-functional teams 
                to deliver exceptional user experiences.
              </p>
            </div>

            {/* Stats Counter */}
            <motion.div
              ref={ref}
              className="grid grid-cols-3 gap-6"
              variants={fadeInUp}
              initial="hidden"
              animate={isIntersecting ? "visible" : "hidden"}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl font-bold text-${stat.color} mb-2`}>
                    <AnimatedCounter end={stat.value} />
                    {stat.label === "Years Experience" && "+"}
                  </div>
                  <div className="text-sm text-muted-foreground">
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
