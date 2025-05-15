import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import SkippyChat from "@/components/SkippyChat";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import { projects, services, testimonials } from "@/lib/data";
import { Check, MapPin, Mail, Phone } from "lucide-react";
import { staggerContainer, fadeInUpVariants } from "@/lib/utils";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const scrollElements = document.querySelectorAll(".scroll-reveal");
    scrollElements.forEach((el) => observer.observe(el));

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div ref={scrollRef}>
      <Hero />

      {/* Portfolio Preview */}
      <section id="portfolio" className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants()}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-muted text-sm font-medium text-muted-foreground mb-3">
              Our Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">
              Explore our latest digital designs and innovations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                alt={project.alt}
                link={project.link}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button variant="outline" className="rounded-full">
                See More Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants()}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-muted text-sm font-medium text-muted-foreground mb-3">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Elevate Your Business</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive digital solutions designed for small businesses.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="gradient-bg hover:opacity-90 rounded-full">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Meet Skippy Section */}
      <section id="about" className="py-24 bg-card relative overflow-hidden">
        {/* Abstract tech pattern background */}
        <div 
          className="absolute inset-0 z-0 opacity-10 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
          }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants()}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-muted text-sm font-medium text-muted-foreground mb-3">
                Meet Your AI Assistant
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Introducing Skippy</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Your design-focused AI assistant who is an expert in all areas that SkippyWorks manages. Available 24/7 as part of our premium monthly subscription.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-1 mr-3" />
                  <span className="text-muted-foreground">Unlimited creative inspiration and guidance</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-1 mr-3" />
                  <span className="text-muted-foreground">Expert advice on design trends and best practices</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-1 mr-3" />
                  <span className="text-muted-foreground">Instant feedback on your digital projects</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-1 mr-3" />
                  <span className="text-muted-foreground">Personalized recommendations for your business</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button className="gradient-bg hover:opacity-90 rounded-full">
                  Get Skippy Now
                </Button>
              </Link>
            </motion.div>
            
            <SkippyChat />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants()}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-muted text-sm font-medium text-muted-foreground mb-3">
              Client Feedback
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Hear from businesses that have transformed with our help.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                content={testimonial.content}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUpVariants()}
              >
                <span className="inline-block py-1 px-3 rounded-full bg-muted text-sm font-medium text-muted-foreground mb-3">
                  Get In Touch
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Work Together</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Ready to transform your business? Send us a message and we'll get back to you within 24 hours.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="h-12 w-12 flex items-center justify-center bg-muted rounded-lg mr-4">
                      <Mail className="h-5 w-5 gradient-text" />
                    </div>
                    <div>
                      <p className="font-medium text-white mb-1">Email Us</p>
                      <a href="mailto:hello@skippyworks.com" className="text-muted-foreground hover:text-primary">hello@skippyworks.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-12 w-12 flex items-center justify-center bg-muted rounded-lg mr-4">
                      <Phone className="h-5 w-5 gradient-text" />
                    </div>
                    <div>
                      <p className="font-medium text-white mb-1">Call Us</p>
                      <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary">(555) 123-4567</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-12 w-12 flex items-center justify-center bg-muted rounded-lg mr-4">
                      <MapPin className="h-5 w-5 gradient-text" />
                    </div>
                    <div>
                      <p className="font-medium text-white mb-1">Visit Us</p>
                      <p className="text-muted-foreground">123 Design Avenue, Creative District, CA 90210</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
