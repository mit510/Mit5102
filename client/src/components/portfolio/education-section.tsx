import { motion } from "framer-motion";
import { GraduationCap, UserRound } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/lib/portfolio-data";
import { slideInLeft, slideInRight, fadeInUp, staggerContainer } from "@/lib/animations";

export function EducationSection() {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={index % 2 === 0 ? slideInLeft : slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <motion.div
                className="bg-card/50 p-8 rounded-xl glass-effect h-full"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-6">
                  <motion.div
                    className={`w-16 h-16 ${
                      edu.color === "primary" ? "bg-primary/20" : "bg-accent/20"
                    } rounded-full flex items-center justify-center mr-4`}
                    whileHover={{ rotate: 10 }}
                  >
                    {edu.icon === "fas fa-graduation-cap" ? (
                      <GraduationCap
                        className={`w-8 h-8 ${
                          edu.color === "primary" ? "text-primary" : "text-accent"
                        }`}
                      />
                    ) : (
                      <UserRound
                        className={`w-8 h-8 ${
                          edu.color === "primary" ? "text-primary" : "text-accent"
                        }`}
                      />
                    )}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.period}</p>
                  </div>
                </div>
                <h4
                  className={`text-lg font-medium mb-2 ${
                    edu.color === "primary" ? "text-primary" : "text-accent"
                  }`}
                >
                  {edu.institution}
                </h4>
                <p className="text-muted-foreground mb-4">{edu.location}</p>
                {edu.gpa && (
                  <div className="mb-4">
                    <Badge
                      variant="secondary"
                      className={`${
                        edu.color === "primary"
                          ? "bg-primary/20 text-primary"
                          : "bg-accent/20 text-accent"
                      }`}
                    >
                      {edu.gpa}
                    </Badge>
                  </div>
                )}
                <p className="text-muted-foreground">{edu.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-center mb-8">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-card/30 p-4 rounded-lg text-center group cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className="text-2xl text-primary mb-2"
                  whileHover={{ rotate: 10 }}
                >
                  <i className={cert.icon} />
                </motion.div>
                <h4 className="font-medium mb-1 group-hover:text-primary transition-colors duration-300">
                  {cert.name}
                </h4>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
