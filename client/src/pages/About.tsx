import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Users, Target, Sparkles, Award } from "lucide-react";
import SkippyChat from "@/components/SkippyChat";
import CTASection from "@/components/CTASection";
import { staggerContainer, fadeInUpVariants } from "@/lib/utils";

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Digital Design & Innovation for <span className="gradient-text">Small Businesses</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              SkippyWorks is a digital design agency focused on helping small businesses thrive in the digital landscape.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants()}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-muted text-sm font-medium text-muted-foreground mb-3">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                We're More Than Just a Design Agency
              </h2>
              <p className="text-muted-foreground mb-6">
                Founded in 2020, SkippyWorks was born from a simple idea: small businesses deserve big agency quality without the big agency prices. Our founder, after years working with major corporations, noticed that smaller businesses were often priced out of quality digital services.
              </p>
              <p className="text-muted-foreground mb-6">
                Today, we're a team of passionate designers, developers, and digital strategists dedicated to one mission: helping small businesses succeed through innovative design and technology solutions.
              </p>
              <div className="mt-8">
                <Link href="/contact">
                  <Button className="gradient-bg hover:opacity-90 rounded-full">
                    Get to Know Us
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              className="rounded-xl overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants(0.2)}
            >
              <img 
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="SkippyWorks team collaborating"
                className="w-full h-auto rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission and Values */}
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
              Mission & Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Drives Us</h2>
            <p className="text-xl text-muted-foreground">
              Our approach to digital design, innovation, and customer-focused solutions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-card p-8 rounded-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants()}
            >
              <div className="h-14 w-14 bg-muted rounded-lg flex items-center justify-center mb-6">
                <Target className="h-8 w-8 gradient-text" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-muted-foreground mb-6">
                To democratize access to high-quality digital design and technology solutions for small businesses, enabling them to compete effectively in the digital market regardless of their size.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-1 mr-3" />
                  <span className="text-muted-foreground">Make professional design accessible to all businesses</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-1 mr-3" />
                  <span className="text-muted-foreground">Empower small business growth through digital innovation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-1 mr-3" />
                  <span className="text-muted-foreground">Build lasting partnerships with our clients</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-card p-8 rounded-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants(0.2)}
            >
              <div className="h-14 w-14 bg-muted rounded-lg flex items-center justify-center mb-6">
                <Sparkles className="h-8 w-8 gradient-text" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="h-10 w-10 bg-muted rounded flex items-center justify-center mr-4">
                    <Award className="h-5 w-5 gradient-text" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Excellence</h4>
                    <p className="text-muted-foreground">We strive for excellence in every pixel, line of code, and client interaction.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-10 w-10 bg-muted rounded flex items-center justify-center mr-4">
                    <Users className="h-5 w-5 gradient-text" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Collaboration</h4>
                    <p className="text-muted-foreground">We believe the best results come from working closely with our clients as partners.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-10 w-10 bg-muted rounded flex items-center justify-center mr-4">
                    <Sparkles className="h-5 w-5 gradient-text" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Innovation</h4>
                    <p className="text-muted-foreground">We embrace new technologies and approaches to solve problems creatively.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Meet Skippy Section */}
      <section className="py-24 bg-card relative overflow-hidden">
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
      
      <CTASection />
    </div>
  );
}
