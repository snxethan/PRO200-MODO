import ProtectedRoute from "@/components/ProtectedRoute";
import Link from "next/link";

export default function ConsolePage() {
    return (
        <ProtectedRoute>
            <div>
                <h1>Welcome to the Console</h1>
                <nav>
                    <Link href="/console/chat">Go to Chat</Link>
                    <Link href="/console/docs">Go to Docs</Link>
                </nav>
            </div>
        </ProtectedRoute>
    );
}
