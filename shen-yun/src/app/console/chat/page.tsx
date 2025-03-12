"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Chat from "@/components/Chat";

export default function ChatPage() {
    interface Message {
        text: string;
        sender: string;
    }

    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState(""); 
    const [waitingForResponse, setWaitingForResponse] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const chatRef = useRef<HTMLDivElement>(null);

    const sendMessage = () => {
        if (!input.trim() || waitingForResponse) return;

        setMessages((prevMessages) => {
            const newMessage = { text: input, sender: "user" };

            // If it's the first user message, modify it
            if (prevMessages.filter(msg => msg.sender === "user").length === 0) {
                newMessage.text = `I need you to speak to me with a/an FWEAKY personality, with that personality on a scale from 1-10 \n
                    with you being at a/an PSCALE. You can also only respond in NUMSEN sentences or \n
                    less, and only ask 1 question at a time until it is answered. I am going to tell you about an idea and \n
                    you need to ask me questions that will help expand the design and specifications of my \n
                    idea. My idea is: \"${input}\". `;
            }

            return [...prevMessages, newMessage];
        });
        
        setInput(""); 
        setWaitingForResponse(true);

        setTimeout(() => {
            setMessages((prevMessages) => [...prevMessages, { text: "I'm thinking...", sender: "bot" }]);
            setWaitingForResponse(false);
        }, 1000);
    };

    useEffect(() => {
        if (messages.length === 0) { // Ensures message is only sent once
            setMessages([{ text: "Hello, I'm MODO! What idea would you like to start building today?", sender: "bot" }]);
        }
    }, []);
    
    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <ProtectedRoute>
            <div className="bg-[#202C39] min-h-screen flex flex-col items-center">
                <div className="w-full">
                <Navbar />
                </div>
<<<<<<< Updated upstream
                
                {/* Chat Container */}
                <Card className="w-full max-w-2xl h-[75vh] p-6 rounded-2xl shadow-lg flex flex-col mt-6 overflow-hidden bg-[#1E2A38] border-[#68B3DF] border-2">
                    {/* Messages Container */}
                    <div className="flex flex-col flex-1 space-y-4 overflow-y-auto p-4 scrollbar-hide" ref={chatRef}>
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                                <div className={`rounded-xl px-4 py-2 max-w-lg break-words ${msg.sender === "bot" ? "bg-[#E873CB] text-[#FAFFEB]" : "bg-[#68B3DF] text-[#FAFFEB]"}`}> 
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Title and Description Inputs */}
                    <div className="p-4 space-y-2">
                        <Input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter a title..."
                            className="bg-white text-black w-full p-2 rounded-md"
                        />
                        <Input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter a brief description..."
                            className="bg-white text-black w-full p-2 rounded-md"
                        />
                    </div>
                </Card>


                {/* Message Input */}
                <div className="p-4 bg-[#FAFFEB] rounded-full m-4 flex max-w-5xl mx-auto w-[100%]">
                    <Input
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
=======

                {/* Chat Messages (Scrollable) */}
                <Chat/>
>>>>>>> Stashed changes
            </div>
        </ProtectedRoute>
    );
}