import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, Phone, MessageCircle, Bot } from "lucide-react";
import SkippyChatWidget from "./SkippyChatWidget";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="gradient-bg p-1.5 rounded-md">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">SkippyWorks</span>
            </Link>
            
            <div className="flex md:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleMenu} 
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
            
            <nav className="hidden md:flex space-x-6 items-center">
              <Link href="/" className={`nav-item text-gray-300 hover:text-white text-sm font-medium ${isActive('/') ? 'active' : ''}`}>
                Home
              </Link>
              <Link href="/about" className={`nav-item text-gray-300 hover:text-white text-sm font-medium ${isActive('/about') ? 'active' : ''}`}>
                About
              </Link>
              <Link href="/services" className={`nav-item text-gray-300 hover:text-white text-sm font-medium ${isActive('/services') ? 'active' : ''}`}>
                Services
              </Link>
              <Link href="/portfolio" className={`nav-item text-gray-300 hover:text-white text-sm font-medium ${isActive('/portfolio') ? 'active' : ''}`}>
                Portfolio
              </Link>
              <Link href="/skippy-chat" className={`nav-item text-gray-300 hover:text-white text-sm font-medium ${isActive('/skippy-chat') ? 'active' : ''}`}>
                <Bot className="h-4 w-4 mr-1 inline-block" /> Skippy AI
              </Link>
              <Link href="/contact" className={`nav-item text-gray-300 hover:text-white text-sm font-medium ${isActive('/contact') ? 'active' : ''}`}>
                Contact
              </Link>
              <a href="tel:+15551234567" className="ml-4 p-2 rounded-full gradient-bg">
                <Phone className="h-4 w-4 text-white" />
              </a>
            </nav>
          </div>
        </div>
        
        {/* Mobile navigation menu */}
        <div className={`md:hidden bg-card transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-60' : 'max-h-0'}`}>
          <div className="flex flex-col space-y-2 px-4 py-2">
            <Link 
              href="/" 
              className={`text-gray-300 hover:text-white block px-3 py-2 rounded-md font-medium ${isActive('/') ? 'bg-muted' : ''}`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`text-gray-300 hover:text-white block px-3 py-2 rounded-md font-medium ${isActive('/about') ? 'bg-muted' : ''}`}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className={`text-gray-300 hover:text-white block px-3 py-2 rounded-md font-medium ${isActive('/services') ? 'bg-muted' : ''}`}
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link 
              href="/portfolio" 
              className={`text-gray-300 hover:text-white block px-3 py-2 rounded-md font-medium ${isActive('/portfolio') ? 'bg-muted' : ''}`}
              onClick={closeMenu}
            >
              Portfolio
            </Link>
            <Link 
              href="/contact" 
              className={`text-gray-300 hover:text-white block px-3 py-2 rounded-md font-medium ${isActive('/contact') ? 'bg-muted' : ''}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
            <a 
              href="tel:+15551234567" 
              className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium"
            >
              <Phone className="h-4 w-4 mr-2" /> Call Us
            </a>
          </div>
        </div>
      </header>

      {/* Floating Chat Button */}
      <button 
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 gradient-bg p-3 rounded-full shadow-lg hover:opacity-90 transition-all duration-300"
        aria-label="Chat with Skippy AI"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </button>

      {/* Skippy Chat Widget - Will be implemented soon */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[350px] bg-card rounded-xl shadow-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <div className="gradient-bg p-2 rounded-full">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-bold text-white">Skippy AI</h3>
            </div>
            <Button variant="ghost" size="icon" onClick={toggleChat} className="h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-white mb-4">Hello! I'm Skippy, your design AI assistant. How can I help you today?</p>
        </div>
      )}
    </>
  );
}
