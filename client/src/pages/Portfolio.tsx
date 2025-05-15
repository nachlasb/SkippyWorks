import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import { projects } from "@/lib/data";
import { staggerContainer, fadeInUpVariants } from "@/lib/utils";

export default function Portfolio() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-10 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
          }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants()}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-muted text-sm font-medium text-muted-foreground mb-3">
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="gradient-text">Portfolio</span> Showcase
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our collection of projects that have helped clients achieve success through design and innovation.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Portfolio Grid */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants()}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-muted text-sm font-medium text-muted-foreground mb-3">
              Featured Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Projects</h2>
            <p className="text-xl text-muted-foreground">
              Each project represents our commitment to quality, creativity, and results.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
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
        </div>
      </section>
      
      {/* Case Study Highlight */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants()}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-muted text-sm font-medium text-muted-foreground mb-3">
              Case Study
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Project Spotlight</h2>
            <p className="text-xl text-muted-foreground">
              A deeper look at one of our most successful projects.
            </p>
          </motion.div>
          
          <div className="bg-card rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <motion.div 
                className="p-8 lg:p-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUpVariants()}
              >
                <h3 className="text-2xl font-bold text-white mb-4">E-commerce Redesign for Fashion Retailer</h3>
                <p className="text-muted-foreground mb-6">
                  Our client, a boutique fashion retailer, was struggling with an outdated website that was difficult to navigate and had poor conversion rates. They approached us for a complete redesign focused on improving user experience and increasing sales.
                </p>
                
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-white mb-2">The Challenge</h4>
                  <p className="text-muted-foreground mb-4">
                    The existing site had confusing navigation, slow load times, and a checkout process that was causing high cart abandonment rates. Mobile users, who made up 60% of their traffic, had an especially poor experience.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-white mb-2">Our Solution</h4>
                  <p className="text-muted-foreground mb-4">
                    We rebuilt the site from the ground up with a focus on mobile-first design, streamlined navigation, improved product filtering, and a simplified checkout process. We also implemented better product photography guidelines and integrated with their inventory management system.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-white mb-2">The Results</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="h-5 w-5 rounded-full gradient-bg flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-xs">✓</span>
                      </div>
                      <span className="text-muted-foreground">42% increase in conversion rate</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-5 w-5 rounded-full gradient-bg flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-xs">✓</span>
                      </div>
                      <span className="text-muted-foreground">67% reduction in cart abandonment</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-5 w-5 rounded-full gradient-bg flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-xs">✓</span>
                      </div>
                      <span className="text-muted-foreground">53% increase in average order value</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-5 w-5 rounded-full gradient-bg flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-xs">✓</span>
                      </div>
                      <span className="text-muted-foreground">89% improvement in mobile user satisfaction</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUpVariants(0.2)}
                className="relative min-h-[400px]"
              >
                <img 
                  src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80"
                  alt="E-commerce redesign case study"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants()}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-muted text-sm font-medium text-muted-foreground mb-3">
              How We Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground">
              A streamlined approach to ensure every project's success.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="bg-background rounded-xl p-6 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants()}
            >
              <div className="h-16 w-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Discovery</h3>
              <p className="text-muted-foreground">
                We listen, research, and understand your business goals, audience, and competitive landscape.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-background rounded-xl p-6 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants(0.1)}
            >
              <div className="h-16 w-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Strategy</h3>
              <p className="text-muted-foreground">
                We develop a comprehensive plan that aligns with your objectives and sets clear measurable outcomes.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-background rounded-xl p-6 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants(0.2)}
            >
              <div className="h-16 w-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Creation</h3>
              <p className="text-muted-foreground">
                Our team designs and develops your solution with regular checkpoints and feedback integration.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-background rounded-xl p-6 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants(0.3)}
            >
              <div className="h-16 w-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Launch & Optimize</h3>
              <p className="text-muted-foreground">
                We deliver, deploy, and continue to monitor and refine for optimal performance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <CTASection />
    </div>
  );
}
