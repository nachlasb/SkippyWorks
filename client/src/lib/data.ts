import { Code, Paintbrush, Share2, Shield, Zap, Bot, Wrench } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type Service = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  link: string;
};

export type Testimonial = {
  id: number;
  content: string;
  author: string;
  role: string;
  company: string;
};

export const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom websites built for performance, functionality, and design that drive results for your business.",
    icon: Code
  },
  {
    id: 2,
    title: "Digital Design",
    description: "Tailored graphics, branding, and user interfaces that captivate and engage your audience.",
    icon: Paintbrush
  },
  {
    id: 3,
    title: "Social Media Marketing",
    description: "Strategies that grow your online presence and engage your audience on the platforms that matter.",
    icon: Share2
  },
  {
    id: 4,
    title: "Reputation Management",
    description: "Building and maintaining a positive online reputation that builds trust with your customers.",
    icon: Shield
  },
  {
    id: 5,
    title: "Brand Building",
    description: "Developing strong, memorable brands that connect with your target market and drive loyalty.",
    icon: Zap
  },
  {
    id: 6,
    title: "Generative AI Tools",
    description: "Cutting-edge AI tools to enhance your digital experiences and streamline operations.",
    icon: Bot
  },
  {
    id: 7,
    title: "Tech Implementation",
    description: "Seamlessly integrating tech solutions to improve efficiency and scalability for your business.",
    icon: Wrench
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Redesign",
    description: "Complete overhaul of a fashion retail platform with improved UX and conversion optimization.",
    image: "https://pixabay.com/get/g5b8eb114546db55824d66296ae3ebd9bcdb2aa80b9448c2e8cdf4101ce5336fbc4d8e1a1a380aab0aa7db3d82d243edf091a4cbccb5e4288177d250f3ed20ff9_1280.jpg",
    alt: "E-commerce website redesign",
    link: "/portfolio"
  },
  {
    id: 2,
    title: "Health App Development",
    description: "Intuitive mobile application for health tracking with real-time analytics and personalized insights.",
    image: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    alt: "Mobile app development",
    link: "/portfolio"
  },
  {
    id: 3,
    title: "Brand Identity System",
    description: "Comprehensive brand identity development including logo design, typography, and visual guidelines.",
    image: "https://images.unsplash.com/photo-1524055988636-436cfa46e59e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    alt: "Brand identity design",
    link: "/portfolio"
  },
  {
    id: 4,
    title: "Restaurant Website",
    description: "Modern website with online ordering system and reservation management for a fine dining restaurant.",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    alt: "Restaurant website design",
    link: "/portfolio"
  },
  {
    id: 5,
    title: "Real Estate Platform",
    description: "Custom property listing and management system with virtual tours and agent dashboard.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    alt: "Real estate platform",
    link: "/portfolio"
  },
  {
    id: 6,
    title: "Non-profit Rebrand",
    description: "Complete visual identity refresh and website redesign for an environmental non-profit organization.",
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    alt: "Non-profit rebrand",
    link: "/portfolio"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "SkippyWorks transformed our outdated website into a modern platform that truly represents our brand. The increase in leads has been remarkable.",
    author: "Sarah Johnson",
    role: "CEO",
    company: "SJ Boutique"
  },
  {
    id: 2,
    content: "Working with SkippyWorks on our branding was an incredible experience. They truly understood our vision and delivered beyond our expectations.",
    author: "David Rodriguez",
    role: "Marketing Director",
    company: "Innovate Tech"
  },
  {
    id: 3,
    content: "The AI tools SkippyWorks implemented for our business have streamlined our workflow and increased productivity by over 40%. Game-changer!",
    author: "Lisa Chang",
    role: "Operations Manager",
    company: "Forward Solutions"
  },
  {
    id: 4,
    content: "After SkippyWorks redesigned our social media strategy, we saw engagement increase by 200% in just two months. Their expertise is unmatched.",
    author: "Michael Patel",
    role: "Social Media Manager",
    company: "Bright Horizons"
  }
];
