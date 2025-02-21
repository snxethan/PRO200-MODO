import ProtectedRoute from "@/components/ProtectedRoute";

export default function DocsPage() {
    return (
        <ProtectedRoute>
            <h1>Docs Console</h1>
        </ProtectedRoute>
    );
}
