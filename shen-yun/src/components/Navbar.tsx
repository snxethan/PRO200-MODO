"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Settings } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/lib/AuthProvider";
import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
import {
        Popover,
        PopoverContent,
        PopoverTrigger,
      } from "@/components/ui/popover";
import {
        Select,
        SelectContent,
        SelectGroup,
        SelectItem,
        SelectLabel,
        SelectTrigger,
        SelectValue,
      } from "@/components/ui/select"

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

                <Popover>
                <PopoverTrigger><Settings className="text-[#FAFFEB] cursor-pointer hover:text-[#ED7E07]" size={24} /></PopoverTrigger>
                <PopoverContent className="bg-[#68B3DF] text-[#FAFFEB] mt-5 rounded-md border-2 border-orange-500 w-60 pb-4">
                    <div className="text-center mb-2">MODO Config</div>
                    <Select>
                        <SelectTrigger className="w-[180px] text-black mb-1">
                            <SelectValue placeholder="Personality" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                            <SelectLabel>Personalities</SelectLabel>
                            <SelectItem value="freaky">Freaky</SelectItem>
                            <SelectItem value="silly">Silly</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    Personality Strength<Slider className="mb-2" defaultValue={[33]} max={100} step={1} />
                    Yapness<Slider defaultValue={[33]} max={100} step={1} />
                </PopoverContent>
                </Popover>
                    
                
            </div>
        </nav>
    );
}
