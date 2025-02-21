"use client";

import { useAuth } from "@/lib/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

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
            {/* Navigation Bar */}
            <nav className="w-full flex items-center justify-between bg-[#68B3DF] p-4 rounded-lg shadow-md">
                {/* Logo */}
                <div className="flex items-center">
                    <div className="w-14 h-14 rounded-full bg-[#E873CB] flex items-center justify-center">
                        <img src="/images/logo.png" alt="Logo" className="w-10 h-10" />
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex gap-4">
                    {["Home", "Chat", "Docs"].map((item, index) => (
                        <Button
                            key={index}
                            variant="outline"
                            className="border-[#ED7E07] text-ivory hover:bg-[#ED7E07] hover:border-[#202C39]"
                        >
                            {item}
                        </Button>
                    ))}
                </div>

                {/* Login and Settings */}
                <div className="flex gap-4">
                    <Button
                        variant="outline"
                        className="border-[#ED7E07] text-ivory hover:bg-[#ED7E07] hover:border-[#202C39]"
                    >
                        Login
                    </Button>
                    <Button
                        variant="outline"
                        className="border-[#ED7E07] text-ivory hover:bg-[#ED7E07] hover:border-[#202C39]"
                    >
                        ⚙
                    </Button>
                </div>
            </nav>

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
