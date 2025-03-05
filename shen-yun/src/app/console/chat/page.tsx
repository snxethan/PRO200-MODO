"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

export default function ChatPage() {
    interface Message {
        text: string;
        sender: string;
    }

    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState(""); 
    const [waitingForResponse, setWaitingForResponse] = useState(false);
    const chatRef = useRef<HTMLDivElement>(null);

    // Function to send message
    const sendMessage = () => {
        if (!input.trim() || waitingForResponse) return;

        setMessages((prevMessages) => {
            const newMessage = { text: input, sender: "user" };

            

            return [...prevMessages, newMessage];
        });
        
        setInput(""); 
        setWaitingForResponse(true);

        // Simulate AI response (Replace with actual API call)
        setTimeout(() => {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: "I'm thinking...", sender: "bot" },
            ]);
            setWaitingForResponse(false);
        }, 1000);
    };

    

    
    
    // Auto-scroll to the latest message
    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <ProtectedRoute>
            <div className="bg-[#202C39] min-h-screen flex flex-col">
                {/* Navbar */}
                <div className="w-full">
                    <Navbar />
                </div>

                {/* Chat Messages (Scrollable) */}
                <div ref={chatRef} className="flex-1 p-6 space-y-4 overflow-y-auto max-h-[70vh]">
                    {messages.map((msg, index) => (
                        <div key={index} className="flex justify-start">
                            <div
                                className={`rounded-xl px-4 py-2 max-w-lg break-words ${
                                    msg.sender === "bot"
                                        ? "bg-[#E873CB] text-[#FAFFEB]"
                                        : "bg-[#68B3DF] text-[#FAFFEB]"
                                }`}
                                style={{ wordBreak: "break-word" }} // Ensure words wrap inside the box
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Message Input */}
                <div className="p-4 bg-[#FAFFEB] rounded-full m-4 flex max-w-2xl mx-auto w-full">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && !waitingForResponse && sendMessage()}
                        placeholder="Type Here..."
                        className="bg-transparent w-full outline-none px-4 text-black"
                    />
                    <Button
                        onClick={sendMessage}
                        className="ml-2 bg-[#68B3DF] text-white"
                        disabled={waitingForResponse}
                    >
                        Send
                    </Button>
                </div>
            </div>
        </ProtectedRoute>
    );
}
