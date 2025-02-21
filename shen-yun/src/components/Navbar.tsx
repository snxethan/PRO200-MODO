"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Settings } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/lib/AuthProvider";

export default function Navbar() {
    const { user, logout } = useAuth();

    return (
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
                <Link href="/chat">
                    <Button className="border-2 border-[#ED7E07] text-[#FAFFEB] hover:bg-[#ED7E07] hover:border-[#202C39]">
                        Chat
                    </Button>
                </Link>
                <Link href="/about">
                    <Button className="border-2 border-[#ED7E07] text-[#FAFFEB] hover:bg-[#ED7E07] hover:border-[#202C39]">
                        About
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
    );
}
