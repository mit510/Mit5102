import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/lib/portfolio-data";
import { fadeInUp, staggerContainer, scaleOnHover } from "@/lib/animations";

export function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                className="bg-card/50 rounded-xl overflow-hidden glass-effect h-full flex flex-col"
                variants={scaleOnHover}
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                {/* Project icon/image */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <motion.div
                    className="text-6xl text-muted-foreground"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className={project.icon} />
                  </motion.div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-4 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex items-center gap-2"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button
                        size="sm"
                        asChild
                        className="flex items-center gap-2"
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
