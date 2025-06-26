import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";
import { slideInLeft, slideInRight, fadeInUp } from "@/lib/animations";

export function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="relative flex items-center"
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Timeline dot */}
                <motion.div
                  className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 ${
                    exp.type === "primary" ? "bg-primary" : "bg-secondary"
                  } rounded-full border-4 border-background z-10`}
                  whileHover={{ scale: 1.2 }}
                />

                {/* Card */}
                <div
                  className={`ml-12 md:ml-0 ${
                    index % 2 === 0
                      ? "md:w-1/2 md:pr-8"
                      : "md:w-1/2 md:ml-auto md:pl-8"
                  }`}
                >
                  <motion.div
                    className="bg-card/50 p-6 rounded-xl glass-effect"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3
                        className={`text-xl font-semibold ${
                          exp.type === "primary" ? "text-primary" : "text-secondary"
                        }`}
                      >
                        {exp.title}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                    <h4 className="text-lg font-medium mb-3">
                      {exp.company} - {exp.location}
                    </h4>
                    <ul className="text-muted-foreground space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: (index * 0.2) + (idx * 0.1) }}
                        >
                          <ChevronRight
                            className={`mr-2 mt-1 flex-shrink-0 w-4 h-4 ${
                              exp.type === "primary" ? "text-primary" : "text-secondary"
                            }`}
                          />
                          {responsibility}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
