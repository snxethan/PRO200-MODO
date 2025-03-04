"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
      <div className="min-h-screen bg-[#202C39] text-[#FAFFEB] flex flex-col">
        {/* Navbar */}
        <Navbar />
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
