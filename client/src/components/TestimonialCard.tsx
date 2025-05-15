import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

export default function TestimonialCard({ content, author, role, company, image }: TestimonialCardProps) {
  return (
    <motion.div 
      className="bg-card rounded-xl p-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
        <div className="text-primary">
          <Quote className="h-8 w-8" />
        </div>
      </div>
      <p className="text-gray-300 mb-6">"{content}"</p>
      <div className="flex items-center">
        <div className="h-12 w-12 rounded-full bg-muted overflow-hidden mr-4">
          {image ? (
            <img src={image} alt={author} className="h-full w-full object-cover" />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-primary text-primary-foreground font-bold text-lg">
              {author.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <p className="font-medium text-white">{author}</p>
          <p className="text-sm text-gray-400">{role}, {company}</p>
        </div>
      </div>
    </motion.div>
  );
}
