import ProtectedRoute from "@/components/ProtectedRoute";
import Navbar from "@/components/Navbar";

export default function DocsPage() {
    return (
        <ProtectedRoute>
            <div className="bg-[#202C39] min-h-screen flex flex-col">
                {/* Navbar */}
                <div className="w-full">
                    <Navbar/>
                </div>
                
                
            </div>
        </ProtectedRoute>
    );
}
