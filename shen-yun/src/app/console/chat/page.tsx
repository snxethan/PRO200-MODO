import ProtectedRoute from "@/components/ProtectedRoute";

export default function ChatPage() {
    return (
        <ProtectedRoute>
            <h1>Chat Console</h1>
        </ProtectedRoute>
    );
}
