import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CircleUser } from "lucide-react";

type Message = {
  id: number;
  sender: "user" | "skippy";
  text: string;
  typing?: boolean;
};

const initialMessages: Message[] = [
  {
    id: 1,
    sender: "user",
    text: "Hi Skippy! I need help with my website's color scheme. I want something modern but still approachable."
  },
  {
    id: 2,
    sender: "skippy",
    text: "Hi there! For a modern yet approachable feel, I'd recommend a base of neutral tones like soft whites or light grays, paired with accent colors like teal or coral. Would you like me to create a sample palette?"
  },
  {
    id: 3,
    sender: "user",
    text: "That sounds great! I'd love to see what you come up with."
  }
];

export default function SkippyChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    // Simulate messages loading one by one
    const loadMessages = async () => {
      for (let i = 0; i < initialMessages.length; i++) {
        await new Promise((resolve) => {
          timeout = setTimeout(() => {
            setMessages(prev => [...prev, initialMessages[i]]);
            resolve(null);
          }, 1000);
        });
      }
      
      // Show typing indicator at the end
      setIsTyping(true);
      
      // Show the last message after typing
      timeout = setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [
          ...prev, 
          {
            id: 4,
            sender: "skippy",
            text: "Perfect! Here's a palette I've designed for you with HEX codes. It includes a light base (#F8F9FA), subtle accents (#E9ECEF), and two vibrant colors (#17A2B8, #FF7851) for buttons and highlights."
          }
        ]);
      }, 3000);
    };
    
    loadMessages();
    
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <motion.div 
      className="bg-card rounded-2xl p-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="chat-animation">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white">Chat with Skippy</h3>
          <div className="flex space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        
        <div className="space-y-4 min-h-[300px]">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`flex items-start ${message.sender === 'skippy' ? 'justify-end' : ''}`}
            >
              <div className={`p-3 max-w-xs rounded-lg ${
                message.sender === 'skippy' 
                  ? 'bg-gradient-to-r from-primary to-accent text-white' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                <p className="text-sm">{message.text}</p>
                {message.id === 4 && (
                  <div className="flex space-x-2 mt-2">
                    <div className="h-6 w-6 rounded bg-gray-100"></div>
                    <div className="h-6 w-6 rounded bg-gray-200"></div>
                    <div className="h-6 w-6 rounded bg-primary"></div>
                    <div className="h-6 w-6 rounded bg-red-400"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex items-center justify-center">
              <div className="text-xs text-gray-500">Skippy is typing...</div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
