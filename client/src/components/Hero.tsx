import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section id="home" className="pt-28 lg:pt-32 pb-20 relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Abstract background pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Transforming Small Businesses Through{" "}
            <span className="gradient-text">Digital Design & Innovation</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Custom solutions to help you grow and succeed.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link href="/services">
              <Button 
                size="lg" 
                className="relative group overflow-hidden rounded-full bg-card hover:bg-card/80"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 gradient-bg transition-opacity duration-300 ease-in-out" />
              </Button>
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a href="#portfolio" className="animate-bounce inline-block">
            <ArrowDown className="h-8 w-8 text-white" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
