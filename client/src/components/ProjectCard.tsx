import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  link: string;
}

export default function ProjectCard({ title, description, image, alt, link }: ProjectCardProps) {
  return (
    <motion.div 
      className="portfolio-card group bg-card rounded-xl overflow-hidden transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img 
          src={image} 
          alt={alt} 
          className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <a href={link} className="inline-block text-sm font-medium gradient-text">
          View Project <ArrowRight className="inline-block ml-1 h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
}
