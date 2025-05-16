import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

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
  const { toast } = useToast();

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputValue.trim() === "" || isTyping) return;
    
    // Add user message
    const newUserMessage: Message = {
      id: messages.length + 1,
      sender: "user",
      text: inputValue,
      timestamp: new Date()
    };
    
    setMessages([...messages, newUserMessage]);
    setInputValue("");
    
    // Start loading indicator for Skippy's response
    setIsTyping(true);
    
    try {
      // Send message to API and get response
      const response = await apiRequest<{ success: boolean; response: string }>({
        url: "/api/chat",
        method: "POST",
        data: { message: inputValue },
      });
      
      // Add Skippy's response
      if (response.success && response.response) {
        const newSkippyMessage: Message = {
          id: messages.length + 2,
          sender: "skippy",
          text: response.response,
          timestamp: new Date()
        };
        
        setMessages(prevMessages => [...prevMessages, newSkippyMessage]);
      } else {
        throw new Error("Invalid response from AI service");
      }
    } catch (error) {
      console.error("Chat API error:", error);
      toast({
        title: "Oops!",
        description: "Skippy is taking a coffee break. Please try again in a moment.",
        variant: "destructive",
      });
      
      // Add fallback message in case of error
      const errorMessage: Message = {
        id: messages.length + 2,
        sender: "skippy",
        text: "I'm having trouble connecting to my brain right now. Could you try again in a moment?",
        timestamp: new Date()
      };
      
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsTyping(false);
    }
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