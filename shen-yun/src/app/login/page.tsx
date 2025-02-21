"use client";

import { useAuth } from "@/lib/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

export default function LoginPage() {
    const { signIn, user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (user) {
            router.push("/console");
        }
    }, [user, router]);

    return (
        <div className="bg-[#202C39] min-h-screen flex flex-col items-center p-6">
            {/* Navbar */}
            <div className="w-full">
                <Navbar/>
            </div>
            
            

            {/* Login Form */}
            <div className="bg-gray-700 p-8 mt-10 rounded-xl shadow-md w-[400px] text-center">
                <h2 className="text-[#FAFFEB] text-lg mb-4">Login</h2>

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

                <Button
                    onClick={signIn}
                    className="bg-[#ED7E07] text-[#FAFFEB] w-full py-2 rounded-full mb-4"
                >
                    &lt;Sign In with Google&gt;
                </Button>

                <Button
                    variant="outline"
                    className="border-[#ED7E07] text-ivory w-full mb-4"
                >
                    Don't Have an Account? Sign Up Today!
                </Button>

                <Button className="bg-[#ED7E07] text-[#FAFFEB] w-full py-2 rounded-full">
                    Sign Up Today
                </Button>
            </div>
        </div>
    );
}
