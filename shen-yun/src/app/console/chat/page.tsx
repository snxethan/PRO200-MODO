"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";


export default function ChatPage() {
    const [messages, setMessages] = useState([
        { text: "Hello, I’m Modo, what idea would you like help with today?", sender: "bot" },
        { text: "Nothing right now, Thank you", sender: "user" },
    ]);

    return (
        <ProtectedRoute>
            



            <div className="bg-[#202C39] min-h-screen flex flex-col">

                


                {/* Navbar */}
                <div className="w-full">
                    <Navbar />
                    
                </div>
                
                

                {/* Chat Messages */}
                <div className="flex-1 p-6 space-y-4">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`rounded-full px-4 py-2 max-w-lg ${
                                msg.sender === "bot"
                                    ? "bg-[#E873CB] text-[#FAFFEB] self-start"
                                    : "bg-[#68B3DF] text-[#FAFFEB] self-end"
                            }`}
                        >
                            {msg.text}
                        </div>
                    ))}
                </div>

                {/* Message Input */}
                <div className="p-4 bg-[#FAFFEB] rounded-full m-4">
                    <input
                        type="text"
                        placeholder="Type Here..."
                        className="bg-transparent w-full outline-none px-4 text-black"
                    />
                </div>
            </div>
        </ProtectedRoute>
    );
}
