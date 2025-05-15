import { motion } from "framer-motion";
import { Shield, Award, Users, Clock } from "lucide-react";
import { fadeInUpVariants } from "@/lib/utils";

export default function TrustSection() {
  const trustItems = [
    {
      id: 1,
      icon: Shield,
      title: "Trusted Results",
      description: "Over 95% client satisfaction rate with our proven track record of delivering results."
    },
    {
      id: 2,
      icon: Award,
      title: "Industry Recognition",
      description: "Award-winning designs and innovative solutions recognized by leading industry platforms."
    },
    {
      id: 3,
      icon: Users,
      title: "Experienced Team",
      description: "Our team combines decades of experience across design, development, and marketing."
    },
    {
      id: 4,
      icon: Clock,
      title: "On-Time Delivery",
      description: "We pride ourselves on meeting deadlines with quality work, every single time."
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Abstract pattern background */}
      <div 
        className="absolute inset-0 z-0 opacity-10" 
        style={{ 
          backgroundImage: "radial-gradient(circle at 20% 30%, rgba(0, 240, 255, 0.15), transparent 30%), radial-gradient(circle at 80% 70%, rgba(157, 0, 255, 0.15), transparent 30%)" 
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants()}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-muted text-sm font-medium text-muted-foreground mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built on Trust and Excellence</h2>
          <p className="text-xl text-muted-foreground">
            We're more than just a digital agency. We're your strategic partner in achieving digital success.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={item.id}
                className="bg-card rounded-xl p-6 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUpVariants(0.1 * index)}
              >
                <div className="h-16 w-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 bg-card rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants()}
            >
              <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-2">300+</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants(0.1)}
            >
              <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-2">120+</h3>
              <p className="text-muted-foreground">Happy Clients</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants(0.2)}
            >
              <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-2">10+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants(0.3)}
            >
              <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-2">15+</h3>
              <p className="text-muted-foreground">Industry Awards</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}