import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Settings } from "lucide-react";

export default function ChatbotUI() {
  return (
    <div className="min-h-screen bg-[#202C39] text-[#FAFFEB] flex flex-col">
      {/* Navbar */}
      <nav className="bg-[#68B3DF] p-4 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-4">
          <Avatar className="bg-[#E873CB] p-1">
            <AvatarImage src="@\images\ModoLogo.png" alt="Chatbot Logo" />
            <AvatarFallback>CB</AvatarFallback>
          </Avatar>
          <Button className="border-2 border-[#ED7E07] text-[#FAFFEB] hover:bg-[#ED7E07] hover:border-[#202C39]">
            Home
          </Button>
          <Button className="border-2 border-[#ED7E07] text-[#FAFFEB] hover:bg-[#ED7E07] hover:border-[#202C39]">
            Chat
          </Button>
          <Button className="border-2 border-[#ED7E07] text-[#FAFFEB] hover:bg-[#ED7E07] hover:border-[#202C39]">
            About
          </Button>
        </div>
        <div className="flex gap-4">

        <Button className="border-2 border-[#ED7E07] text-[#FAFFEB] hover:bg-[#ED7E07] hover:border-[#202C39]">
            Login
          </Button>

          <Settings className="text-[#FAFFEB] cursor-pointer hover:text-[#ED7E07]" size={24} />
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="flex flex-grow justify-center items-center">
        <Card className="w-3/4 bg-[#68B3DF] shadow-xl p-6">
          <CardContent className="text-center">
            <h2 className="text-2xl font-bold">Product Description here</h2>

            <div className="mt-6">
              <Button className="bg-[#ED7E07] hover:bg-[#FAFFEB] text-[#FAFFEB] hover:text-[#ED7E07]">
                Sign Up Today!
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
