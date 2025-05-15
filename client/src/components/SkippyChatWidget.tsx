import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: number;
  sender: "user" | "skippy";
  text: string;
  timestamp: Date;
}

interface SkippyChatWidgetProps {
  onClose: () => void;
}

export default function SkippyChatWidget({ onClose }: SkippyChatWidgetProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "skippy",
      text: "👋 Hi there! I'm Skippy, your design and innovation assistant. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Sample responses based on user input
  const getSkippyResponse = (userMessage: string): string => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes("website") || lowerCaseMessage.includes("web design")) {
      return "Our web design and development services create responsive, conversion-focused websites tailored to your brand. Would you like me to explain our web development process or show you some example projects?";
    } 
    else if (lowerCaseMessage.includes("brand") || lowerCaseMessage.includes("logo")) {
      return "We offer comprehensive branding services including logo design, identity systems, and brand guidelines. A strong brand can make all the difference for small businesses. What aspects of branding are you most interested in?";
    }
    else if (lowerCaseMessage.includes("pricing") || lowerCaseMessage.includes("cost") || lowerCaseMessage.includes("quote")) {
      return "Our pricing varies based on project scope and requirements. We offer flexible options including project-based quotes and monthly retainers. Let me know what you're looking for, and I can help give you a ballpark estimate.";
    }
    else if (lowerCaseMessage.includes("contact") || lowerCaseMessage.includes("speak to") || lowerCaseMessage.includes("talk to")) {
      return "You can reach our team at hello@skippyworks.com or (555) 123-4567. You can also fill out the contact form on our website. Would you like me to direct you to our contact page?";
    }
    else if (lowerCaseMessage.includes("social media") || lowerCaseMessage.includes("marketing")) {
      return "Our social media marketing strategies help businesses build a strong online presence. We handle content creation, posting schedules, and engagement strategies. Would you like to know more about our social media services?";
    }
    else if (lowerCaseMessage.includes("ai") || lowerCaseMessage.includes("artificial intelligence")) {
      return "We integrate cutting-edge AI tools to enhance your digital experiences and streamline operations. This can include chatbots, content generation, and data analysis. How are you thinking of using AI in your business?";
    }
    else if (lowerCaseMessage.includes("portfolio") || lowerCaseMessage.includes("examples") || lowerCaseMessage.includes("work")) {
      return "We've worked with clients across various industries, from e-commerce to healthcare. You can check out our portfolio for examples of our recent projects. Is there a particular type of project you're interested in seeing?";
    }
    else if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi") || lowerCaseMessage.includes("hey")) {
      return "Hello! It's great to connect with you. I'm Skippy, your design assistant at SkippyWorks. How can I help with your digital design or innovation needs today?";
    }
    else if (lowerCaseMessage.includes("thank")) {
      return "You're very welcome! If you have any other questions in the future, don't hesitate to reach out. We're here to help your business succeed.";
    }
    else {
      return "That's an interesting point. At SkippyWorks, we focus on custom solutions tailored to your business needs. Would you like to tell me more about your project so I can provide more specific information?";
    }
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;
    
    // Add user message
    const newUserMessage: Message = {
      id: messages.length + 1,
      sender: "user",
      text: inputValue,
      timestamp: new Date()
    };
    
    setMessages([...messages, newUserMessage]);
    setInputValue("");
    
    // Simulate Skippy typing
    setIsTyping(true);
    
    // Simulate response delay (1-2 seconds)
    setTimeout(() => {
      const skippy_response = getSkippyResponse(newUserMessage.text);
      
      const newSkippyMessage: Message = {
        id: messages.length + 2,
        sender: "skippy",
        text: skippy_response,
        timestamp: new Date()
      };
      
      setMessages(prevMessages => [...prevMessages, newSkippyMessage]);
      setIsTyping(false);
    }, Math.random() * 1000 + 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <motion.div
      className="fixed bottom-24 right-6 z-50 w-[350px] bg-card rounded-xl shadow-xl overflow-hidden flex flex-col"
      style={{ maxHeight: "80vh" }}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="bg-muted px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 gradient-bg rounded-full flex items-center justify-center">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <h3 className="font-bold text-white">Skippy AI</h3>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onClose}
          className="h-8 w-8"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ maxHeight: "calc(80vh - 8rem)" }}>
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`flex items-start max-w-[80%] ${message.sender === "user" ? "flex-row-reverse" : ""}`}>
                <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center mr-2 ${
                  message.sender === "skippy" ? "gradient-bg" : "bg-muted"
                }`}>
                  {message.sender === "skippy" ? (
                    <Bot className="h-5 w-5 text-white" />
                  ) : (
                    <User className="h-5 w-5 text-gray-300" />
                  )}
                </div>
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    message.sender === "skippy"
                      ? "bg-muted text-gray-200"
                      : "gradient-bg text-white"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              className="flex justify-start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start max-w-[80%]">
                <div className="flex-shrink-0 h-8 w-8 rounded-full gradient-bg flex items-center justify-center mr-2">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div className="rounded-2xl px-4 py-3 bg-muted text-gray-200">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "600ms" }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input area */}
      <div className="p-4 border-t border-muted">
        <div className="flex items-center space-x-2">
          <Input
            type="text"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1"
          />
          <Button 
            onClick={handleSendMessage} 
            disabled={inputValue.trim() === ""}
            className="gradient-bg hover:opacity-90"
            size="icon"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          Skippy is an AI assistant designed to help with your design and innovation questions.
        </p>
      </div>
    </motion.div>
  );
}