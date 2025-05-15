import { Link } from "wouter";
import { Zap, Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background pt-16 pb-8 border-t border-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="text-2xl text-white">
                <Zap className="h-6 w-6 gradient-text" />
              </div>
              <span className="text-xl font-bold text-white">SkippyWorks</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Transforming small businesses through digital design and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-muted-foreground hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-white transition-colors">About</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-muted-foreground hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Services</h3>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-muted-foreground hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-white transition-colors">Digital Design</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-white transition-colors">Social Media</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-white transition-colors">Brand Building</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-white transition-colors">AI Tools</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mt-0.5 mr-3 text-muted-foreground" />
                <a href="mailto:hello@skippyworks.com" className="text-muted-foreground hover:text-white transition-colors">hello@skippyworks.com</a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mt-0.5 mr-3 text-muted-foreground" />
                <a href="tel:+15551234567" className="text-muted-foreground hover:text-white transition-colors">(555) 123-4567</a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mt-0.5 mr-3 text-muted-foreground" />
                <span className="text-muted-foreground">123 Design Avenue, Creative District, CA 90210</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-muted pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} SkippyWorks. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
