import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";
import { fadeInUpVariants } from "@/lib/utils";

export default function Contact() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-10 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
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
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's <span className="gradient-text">Work Together</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to transform your business? We're here to help you achieve your digital goals.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUpVariants()}
              >
                <span className="inline-block py-1 px-3 rounded-full bg-muted text-sm font-medium text-muted-foreground mb-3">
                  Contact Information
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Reach Out to Us</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Have a project in mind or just want to explore possibilities? We're always happy to chat about how we can help your business grow.
                </p>
                
                <div className="space-y-8">
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
                
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday:</span>
                      <span className="text-white">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday:</span>
                      <span className="text-white">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday:</span>
                      <span className="text-white">Closed</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section (Simplified) */}
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
              Our Location
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Find Us</h2>
            <p className="text-xl text-muted-foreground">
              Located in the heart of the Creative District, we're easily accessible for in-person meetings.
            </p>
          </motion.div>
          
          <div className="rounded-xl overflow-hidden h-[400px] bg-muted">
            {/* A placeholder for a map */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-xl text-muted-foreground">
                Interactive Map: 123 Design Avenue, Creative District, CA 90210
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
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
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to questions we often receive from potential clients.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="bg-background p-6 rounded-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants()}
            >
              <h3 className="text-lg font-bold text-white mb-2">What is your typical project timeline?</h3>
              <p className="text-muted-foreground">
                Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while larger projects with custom features could take 8-12 weeks or more. We'll provide a detailed timeline during our initial consultation.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-background p-6 rounded-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants(0.1)}
            >
              <h3 className="text-lg font-bold text-white mb-2">Do you offer ongoing maintenance?</h3>
              <p className="text-muted-foreground">
                Yes, we offer monthly maintenance packages to keep your digital assets secure, updated, and performing optimally. These packages include regular updates, security checks, and technical support.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-background p-6 rounded-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants(0.2)}
            >
              <h3 className="text-lg font-bold text-white mb-2">What information do you need to provide a quote?</h3>
              <p className="text-muted-foreground">
                To provide an accurate quote, we need to understand your project goals, target audience, desired features, timeline, and budget range. The more details you can provide, the more precise our estimate will be.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-background p-6 rounded-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants(0.3)}
            >
              <h3 className="text-lg font-bold text-white mb-2">Do you work with clients outside your local area?</h3>
              <p className="text-muted-foreground">
                Absolutely! We work with clients nationwide and internationally. Our collaborative process includes regular video calls, shared project management tools, and clear communication to ensure smooth project execution regardless of location.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <CTASection />
    </div>
  );
}
