import { motion } from "framer-motion";
import { GraduationCap, UserRound, Database, Cloud, Search, Bot } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/lib/portfolio-data";
import { slideInLeft, slideInRight, fadeInUp, staggerContainer } from "@/lib/animations";

export function EducationSection() {
  const { education } = portfolioData;

  const certifications = [
    {
      name: "Spark SQL & DataFrames",
      issuer: "Dan Sullivan",
      Icon: Database,
      url: "https://www.linkedin.com/learning/certificates/c2a755da277258f4aec08901c52a064cd2295276990fc3862e3eb98287473d14?u=56973065",
    },
    {
      name: "Microsoft Azure Essentials",
      issuer: "Jim Cheshire",
      Icon: Cloud,
      url: "https://www.linkedin.com/learning/certificates/271853a0c529f2da5293d1a2765101853621b3a0796fb51e1c713ff5f66e5642?u=56973065",
    },
    {
      name: "Intermediate SQL Queries",
      issuer: "Scott Simpson",
      Icon: Search,
      url: "https://www.linkedin.com/learning/certificates/5fc0b6876cf69566f36f9101aaa4d3617b107964d7b5b49334937f590b47bfbe?u=56973065",
    },
    {
      name: "Selenium Essential Training",
      issuer: "Meaghan Lewis",
      Icon: Bot,
      url: "https://www.linkedin.com/learning/certificates/1cc8d4e774d322acd1ba5cdfe4eb246f88d4f27eff42a0024690f4271218ec80?u=56973065",
    },
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
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

        {/* Education Cards */}
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
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.a
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`${cert.name} — ${cert.issuer}`}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-card/30 p-4 rounded-lg text-center group cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <cert.Icon className="w-8 h-8 mx-auto text-primary mb-2 group-hover:text-secondary transition-colors" />
                <h4 className="font-medium mb-1 group-hover:text-primary transition-colors duration-300">
                  {cert.name}
                </h4>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
