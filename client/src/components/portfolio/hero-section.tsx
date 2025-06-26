import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolio-data";
import { fadeInDown, fadeInUp, floatAnimation } from "@/lib/animations";

export function HeroSection() {
  const { personal, summary } = portfolioData;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={floatAnimation}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          variants={fadeInDown}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.h1 className="text-5xl md:text-7xl font-bold">
            Hi, I'm{" "}
            <span className="gradient-text">{personal.name}</span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl text-muted-foreground h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.span
              className="typing-animation inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.8 }}
            >
              {personal.title}
            </motion.span>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            {summary}
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-full font-semibold"
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-6"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          <motion.a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-primary transition-colors duration-300"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github />
          </motion.a>
          <motion.a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-primary transition-colors duration-300"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin />
          </motion.a>
          <motion.a
            href={`mailto:${personal.email}`}
            className="text-2xl hover:text-primary transition-colors duration-300"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <ChevronDown className="text-2xl text-muted-foreground" />
      </motion.div>
    </section>
  );
}
