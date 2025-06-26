import { Navigation } from "@/components/portfolio/navigation";
import { HeroSection } from "@/components/portfolio/hero-section";
import { AboutSection } from "@/components/portfolio/about-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { EducationSection } from "@/components/portfolio/education-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <motion.footer
        className="py-8 border-t border-border"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Mitkumar Patel. Built with passion and lots of coffee ☕
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
