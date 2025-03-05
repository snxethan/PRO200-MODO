import React, { useState } from 'react';
import { Slider } from "@/components/ui/slider";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Settings } from 'lucide-react';

export default function PopoverConfig({ isHidden }: { isHidden: boolean }) {
    // State for storing values
    const [personality, setPersonality] = useState<string | undefined>(undefined);
    const [personalityStrength, setPersonalityStrength] = useState<number>(33);
    const [yapness, setYapness] = useState<number>(33);

    return (
        <div className={`flex ${isHidden ? "hidden" : ""}`}>
            <Popover>
                <PopoverTrigger>
                    <Settings className="text-[#FAFFEB] cursor-pointer hover:text-[#ED7E07]" size={24} />
                </PopoverTrigger>
                <PopoverContent className="bg-[#68B3DF] text-[#FAFFEB] mt-5 rounded-md border-2 border-orange-500 w-60 pb-4">
                    <div className="text-center mb-2">MODO Config</div>

                    {/* Select Dropdown for Personality (with state binding) */}
                    <Select value={personality} onValueChange={setPersonality}>
                        <SelectTrigger className="w-[180px] text-black mb-1">
                            <SelectValue placeholder="Personality" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Personalities</SelectLabel>
                                <SelectItem value="freaky">Freaky</SelectItem>
                                <SelectItem value="silly">Silly</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    {/* Sliders */}
                    <div className="mb-2">
                        Personality Strength
                        <Slider
                            className="mb-2"
                            value={[personalityStrength]}
                            max={100}
                            step={1}
                            onValueChange={(val) => setPersonalityStrength(val[0])}
                        />
                    </div>

                    <div>
                        Yapness
                        <Slider
                            value={[yapness]}
                            max={100}
                            step={1}
                            onValueChange={(val) => setYapness(val[0])}
                        />
                    </div>

                    {/*/!* Debug Output (Remove in Production) *!/*/}
                    {/*<div className="text-sm mt-2 text-white">*/}
                    {/*    <p>Personality: {personality}</p>*/}
                    {/*    <p>Personality Strength: {personalityStrength}</p>*/}
                    {/*    <p>Yapness: {yapness}</p>*/}
                    {/*</div>*/}
                </PopoverContent>
            </Popover>
        </div>
    );
}
