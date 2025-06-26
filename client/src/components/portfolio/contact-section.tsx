import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { portfolioData } from "@/lib/portfolio-data";
import { slideInLeft, slideInRight, fadeInUp } from "@/lib/animations";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactSection() {
  const { personal } = portfolioData;
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactForm) => apiRequest("POST", "/api/contact", data),
    onSuccess: async (response) => {
      const result = await response.json();
      toast({
        title: "Message Sent!",
        description: result.message,
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const downloadResume = () => {
    // In a real application, you would have a proper resume PDF file
    // For now, we'll just show a toast
    toast({
      title: "Resume Download",
      description: "Resume download feature would be implemented with actual PDF file.",
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. 
            Let's connect and create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8">Let's Connect</h3>
            <div className="space-y-6">
              <motion.div
                className="flex items-center group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary/30 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {personal.email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-accent/30 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href={`tel:${personal.phone}`}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300"
                  >
                    {personal.phone}
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-secondary/30 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">{personal.location}</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <motion.a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
              </div>
            </div>

            {/* Resume Download */}
            <div className="mt-8">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={downloadResume}
                  className="bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                  size="lg"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 bg-muted/50 border-muted-foreground/20 focus:border-primary"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 bg-muted/50 border-muted-foreground/20 focus:border-primary"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-2 bg-muted/50 border-muted-foreground/20 focus:border-primary"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="mt-2 bg-muted/50 border-muted-foreground/20 focus:border-primary resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                  size="lg"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
