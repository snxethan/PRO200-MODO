"use client";

import { useAuth } from "@/lib/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Link from "next/link";



export default function SignUpPage() {

    return (
        <div className="bg-[#202C39] min-h-screen flex flex-col items-center p-6">
            {/* Navbar */}
            <div className="w-full">
                <Navbar/>
            </div>
            
            {/* Sign Up Form */}
            <div className="bg-gray-700 p-8 mt-10 rounded-xl shadow-md w-[400px] text-center">
                <h2 className="text-[#FAFFEB] text-lg mb-4">Sign Up</h2>

                <div className="text-left text-[#FAFFEB] mb-2">Email</div>
                <input
                    type="text"
                    className="w-full p-2 rounded-md mb-4 bg-white text-black"
                    defaultValue={""}
                />

                <div className="text-left text-[#FAFFEB] mb-2">Password</div>
                <input
                    type="password"
                    className="w-full p-2 rounded-md mb-4 bg-white text-black"
                    defaultValue={""}
                />

                <div className="text-left text-[#FAFFEB] mb-2">Confirm Password</div>
                <input
                    type="password"
                    className="w-full p-2 rounded-md mb-4 bg-white text-black"
                    defaultValue={""}
                />

                <Button
                    className="bg-[#ED7E07] text-[#FAFFEB] w-full py-2 rounded-full mb-4"
                >
                    &lt;Sign Up with Google&gt;
                </Button>

                <Link href="/login">
                    <Button
                        variant="outline"
                        className="border-[#ED7E07] text-ivory w-full mb-4">
                        Already have an account? Log In!
                    </Button>
                </Link>
            </div>
        </div>
    );
}