import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function CTASection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Abstract creative background pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-20" 
        style={{ 
          backgroundImage: "radial-gradient(circle at 30% 50%, rgba(0, 240, 255, 0.3), transparent 40%), radial-gradient(circle at 70% 50%, rgba(157, 0, 255, 0.3), transparent 40%)" 
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join hundreds of small businesses that have accelerated their growth with our digital design and innovation solutions.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link href="/services">
              <Button className="gradient-bg hover:opacity-90 rounded-full" size="lg">
                Explore Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="rounded-full" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
