import { motion } from "framer-motion";
import { SkillBar } from "@/components/ui/skill-bar";
import { portfolioData } from "@/lib/portfolio-data";
import { slideInLeft, slideInRight, fadeInUp, staggerContainer } from "@/lib/animations";

export function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Frontend Skills */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Frontend Development
            </h3>
            <div className="space-y-6">
              {skills.frontend.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Backend & DevOps
            </h3>
            <div className="space-y-6">
              {skills.backend.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color="accent"
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Technology Icons */}
        <motion.div
          className="mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-center mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {skills.technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center group cursor-pointer"
                variants={fadeInUp}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`text-4xl ${tech.color} mb-2 transition-colors duration-300 group-hover:scale-110`}>
                  <tech.icon />
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
