"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
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
        <div className="min-h-screen flex flex-col bg-[#202C39]"> {/* Background applied here */}
            {/* Navbar */}
            <div className="w-full">
                <Navbar />
            </div>

            {/* Document Container */}
            <main className="p-6 flex-grow">
                <h1 className="text-2xl text-[#FAFFEB] mb-4">Documents</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {documents.map((doc) => (
                        <Card key={doc.id} className="shadow-md">
                            <CardHeader>
                                <CardTitle className="text-[#202C39]">{doc.title}</CardTitle>
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
