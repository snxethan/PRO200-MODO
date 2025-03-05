"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function HomePage() {
  return (
      <div className="min-h-screen bg-[#202C39] text-[#FAFFEB] flex flex-col">
        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <main className="flex flex-grow justify-center items-center">
          <Card className="w-3/4 bg-[#68B3DF] shadow-xl p-6">
            <CardContent className="text-center">
              <h2 className="text-4xl font-bold text-white">
                  Modo – Your AI-Powered Idea and Design Companion
              </h2>
                <br/>
                <p className="text-white text-2xl">
                    Have a spark of an idea but need help shaping it into a fully realized concept? Modo is your 
                    intelligent chatbot designed to expand your vision, refine your thoughts, and turn them into 
                    structured design documents.
                    <br/>
                    <br/>
                    
                    Whether you are brainstorming a new product, crafting a game concept, or planning a software 
                    architecture, Modo helps you:
                    <br/>
                    <br/>
                    <ul>
                        <li>Expand Your Ideas – Modo asks the right questions to push your creativity further</li>
                        <li>Generate Clear Design Documents – From technical blueprints to creative briefs, Modo <br/>
                            structures your thoughts into well-organized documents</li>
                        <li>Collaborate Seamlessly – Work faster with AI-assisted iteration and refinements</li>
                    </ul>
                    
                    <br/>
                    Turn your inspiration into reality. Let Modo bring your ideas to life

                    Start Creating with Modo Today
                </p>

              <div className="mt-6">
                  <Link href="/SignUp">
                      <Button className="bg-[#ED7E07] hover:bg-[#FAFFEB] text-[#FAFFEB] hover:text-[#ED7E07] text-2xl">
                          Start Creating with Modo and Sign Up Today!
                      </Button>
                  </Link>
                
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
  );
}
