import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/data";
import { staggerContainer, fadeInUpVariants } from "@/lib/utils";

export default function Services() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-10 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive <span className="gradient-text">Digital Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A suite of services designed to help small businesses stand out and succeed in the digital landscape.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Services Overview */}
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
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground">
              Each service is tailored to bring maximum value to your small business.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/contact">
              <Button className="gradient-bg hover:opacity-90 rounded-full">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Detailed Service Sections */}
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
              Deep Dive
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Service Details</h2>
            <p className="text-xl text-muted-foreground">
              Explore our core services in depth to find the perfect fit for your business needs.
            </p>
          </motion.div>
          
          {/* Web Development */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants()}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Web Development</h3>
              <p className="text-muted-foreground mb-6">
                Custom websites built for performance, functionality, and design that drive results for your business. Our web development services focus on creating responsive, fast-loading sites that convert visitors into customers.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full gradient-bg flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <span className="text-muted-foreground">Custom website design tailored to your brand</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full gradient-bg flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <span className="text-muted-foreground">Responsive layouts that work on all devices</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full gradient-bg flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <span className="text-muted-foreground">E-commerce functionality and payment integration</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full gradient-bg flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <span className="text-muted-foreground">Content management systems for easy updates</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              className="rounded-xl overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants(0.2)}
            >
              <img 
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Web Development"
                className="w-full h-auto rounded-xl"
              />
            </motion.div>
          </div>
          
          {/* Digital Design */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              className="order-2 lg:order-1 rounded-xl overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants()}
            >
              <img 
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Digital Design"
                className="w-full h-auto rounded-xl"
              />
            </motion.div>
            
            <motion.div
              className="order-1 lg:order-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants(0.2)}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Digital Design</h3>
              <p className="text-muted-foreground mb-6">
                Tailored graphics, branding, and user interfaces that captivate and engage your audience. Our design approach combines aesthetics with functionality to create memorable visual experiences.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full gradient-bg flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <span className="text-muted-foreground">Logo design and brand identity development</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full gradient-bg flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <span className="text-muted-foreground">UI/UX design for websites and applications</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full gradient-bg flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <span className="text-muted-foreground">Marketing materials and social media graphics</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full gradient-bg flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <span className="text-muted-foreground">Brand style guides and visual identity systems</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          {/* Additional services would follow the same pattern */}
        </div>
      </section>
      
      {/* Pricing Section - Simplified Version */}
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
              Flexible Options
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pricing Approach</h2>
            <p className="text-xl text-muted-foreground">
              We believe in transparent, flexible pricing that fits your business needs and budget.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-background rounded-xl p-8 border border-muted"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants()}
            >
              <h3 className="text-xl font-bold text-white mb-2">Project-Based</h3>
              <p className="text-muted-foreground mb-6">
                Fixed price for specific, well-defined projects with clear deliverables and timelines.
              </p>
              <Link href="/contact">
                <Button variant="outline" className="w-full">
                  Get a Quote
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              className="bg-background rounded-xl p-8 border border-primary relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants(0.1)}
            >
              <div className="absolute top-0 right-4 transform -translate-y-1/2">
                <span className="gradient-bg px-3 py-1 rounded-full text-white text-xs font-bold">
                  POPULAR
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Monthly Retainer</h3>
              <p className="text-muted-foreground mb-6">
                Ongoing support and development with a set number of hours each month for continuous improvements.
              </p>
              <Link href="/contact">
                <Button className="w-full gradient-bg hover:opacity-90">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              className="bg-background rounded-xl p-8 border border-muted"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants(0.2)}
            >
              <h3 className="text-xl font-bold text-white mb-2">Custom Solutions</h3>
              <p className="text-muted-foreground mb-6">
                Tailored pricing structures for complex or long-term projects with varying requirements.
              </p>
              <Link href="/contact">
                <Button variant="outline" className="w-full">
                  Let's Discuss
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      <CTASection />
    </div>
  );
}
