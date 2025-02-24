"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/lib/AuthProvider";

// Sample documents data
const documents = [
    { id: "1", title: "Project Proposal", content: "This is the initial project proposal outlining key features." },
    { id: "2", title: "Meeting Notes", content: "Summary of our last meeting and action items." },
    { id: "3", title: "Technical Specs", content: "Details on the tech stack and implementation plan." },
];

export default function DocsPage() {
    const { user, logout } = useAuth();

    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <nav className="bg-[#68B3DF] p-4 flex justify-between items-center shadow-md">
                <div className="flex items-center gap-4">
                    <Avatar className="bg-[#E873CB] p-1">
                    <AvatarImage src="/images/ModoLogo.png" alt="Chatbot Logo" />
                        <AvatarFallback>CB</AvatarFallback>
                    </Avatar>

                    <Link href="/">
                        <Button className="border-2 border-[#ED7E07] text-[#FAFFEB] hover:bg-[#ED7E07] hover:border-[#202C39]">
                            Home
                        </Button>
                    </Link>
                    <Link href="/console/chat">
                        <Button className="border-2 border-[#ED7E07] text-[#FAFFEB] hover:bg-[#ED7E07] hover:border-[#202C39]">
                            Chat
                        </Button>
                    </Link>
                    <Link href="/console/docs">
                        <Button className="border-2 border-[#ED7E07] text-[#FAFFEB] hover:bg-[#ED7E07] hover:border-[#202C39]">
                            Docs
                        </Button>
                    </Link>
                </div>

                <div className="flex gap-4">
                    {user ? (
                        <Button onClick={logout} className="border-2 border-[#ED7E07] text-[#FAFFEB] hover:bg-[#ED7E07] hover:border-[#202C39]">
                            Logout
                        </Button>
                    ) : (
                        <Link href="/login">
                            <Button className="border-2 border-[#ED7E07] text-[#FAFFEB] hover:bg-[#ED7E07] hover:border-[#202C39]">
                                Login
                            </Button>
                        </Link>
                    )}

                    <Settings className="text-[#FAFFEB] cursor-pointer hover:text-[#ED7E07]" size={24} />
                </div>
            </nav>

            {/* Document Container */}
            <main className="p-6 flex-grow">
                <h1 className="text-2xl text-[#FAFFEB] mb-4">Documents</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {documents.map((doc) => (
                        <Card key={doc.id} className="shadow-md">
                            <CardHeader>
                                <CardTitle className="text-black">{doc.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="bg-[#68B3DF] text-[#202C39] p-4 rounded-b-lg">
                                <p>{doc.content}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    );
}
