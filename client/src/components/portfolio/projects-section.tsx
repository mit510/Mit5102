import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/lib/portfolio-data";
import { fadeInUp, staggerContainer, scaleOnHover } from "@/lib/animations";

export function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 relative">
      <style jsx>{`
        .project-border-effect {
          position: relative;
          overflow: hidden;
          border-radius: 0.75rem;
        }

        .project-border-effect::before,
        .project-border-effect::after {
          content: "";
          position: absolute;
          height: 2px;
          width: 0%;
          background: linear-gradient(to right, #7dd4ff, #a855f7, #ec4899);
          transition: width 0.4s ease;
        }

        .project-border-effect::before {
          top: 0;
          left: 0;
        }

        .project-border-effect::after {
          bottom: 0;
          right: 0;
          background: linear-gradient(to left, #7dd4ff, #a855f7, #ec4899);
          transition-delay: 0.3s;
        }

        .project-border-left,
        .project-border-right {
          position: absolute;
          top: 0;
          width: 2px;
          height: 0%;
          background: linear-gradient(to bottom, #7dd4ff, #a855f7, #ec4899);
          transition: height 0.4s ease;
        }

        .project-border-left {
          left: 0;
        }

        .project-border-right {
          right: 0;
          transition-delay: 0.6s;
        }

        .project-border-effect:hover::before,
        .project-border-effect:hover::after {
          width: 100%;
        }

        .project-border-effect:hover .project-border-left,
        .project-border-effect:hover .project-border-right {
          height: 100%;
        }
      `}</style>

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
              className="project-border-effect group"
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              {/* Side glowing bars */}
              <span className="project-border-left"></span>
              <span className="project-border-right"></span>

              <motion.div
                className="relative z-10 bg-card/50 rounded-xl overflow-hidden glass-effect h-full flex flex-col shadow-lg"
                variants={scaleOnHover}
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
              >
                {/* Project Image or Icon */}
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                >
                  {project.image ? (
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  ) : (
                    <motion.div
                      className="text-6xl text-muted-foreground"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <i className={project.icon} />
                    </motion.div>
                  )}
                </div>

                {/* Project Content */}
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
