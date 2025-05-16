import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Bot, User, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { fadeInUpVariants } from "@/lib/utils";

type Message = {
  id: number;
  sender: "user" | "skippy";
  text: string;
  timestamp: Date;
};

export default function SkippyChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "skippy",
      text: "👋 Hi there! I'm Skippy, your design and innovation assistant from SkippyWorks. How can I help you today?",
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
    
    setMessages(prevMessages => [...prevMessages, newUserMessage]);
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
    <div className="pt-24 pb-20 min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants()}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-muted text-sm font-medium text-muted-foreground mb-3">
            AI Assistant
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Chat with Skippy</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your personal design and innovation assistant. Ask anything about digital design, web development, or how SkippyWorks can help your business.
          </p>
        </motion.div>
        
        {/* Chat Container */}
        <motion.div 
          className="max-w-4xl mx-auto bg-card rounded-xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Messages area */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
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
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                    <p className="text-xs opacity-60 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
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
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input area */}
          <div className="p-4 border-t border-border">
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
                disabled={inputValue.trim() === "" || isTyping}
                className="gradient-bg hover:opacity-90"
              >
                <Send className="h-4 w-4 mr-2" />
                Send
              </Button>
            </div>
          </div>
        </motion.div>
        
        {/* Chat Suggestions */}
        <motion.div 
          className="max-w-4xl mx-auto mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">Try asking about:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "What services does SkippyWorks offer?",
              "How can you help my small business?",
              "What's your approach to web design?",
              "Tell me about your pricing",
              "How do you integrate AI tools?",
              "What makes SkippyWorks different?"
            ].map((suggestion, index) => (
              <Button
                key={index}
                variant="outline"
                className="text-left h-auto py-3 px-4"
                onClick={() => {
                  setInputValue(suggestion);
                }}
              >
                {suggestion}
              </Button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}