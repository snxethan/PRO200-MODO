"use client";

import { useAuth } from "@/lib/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
    const { signIn, user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (user) {
            router.push("/console");
        }
    }, [user, router]);

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={signIn}>Sign In with Google</button>
        </div>
    );
}
