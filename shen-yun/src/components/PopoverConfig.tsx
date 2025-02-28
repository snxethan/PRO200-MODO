import React from 'react'
import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
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
      } from "@/components/ui/select"
import { Settings } from 'lucide-react';

export default function PopoverConfig( {isHidden } : any) {
  // const [hidden, setHidden] = React.useState(false);
  // React.useEffect = () => {
  //   setHidden(hidden)
  // }
  return (
      <div className={`flex ${isHidden? "hidden" : ""}`}>    <Popover>
                <PopoverTrigger><Settings className="text-[#FAFFEB] cursor-pointer hover:text-[#ED7E07]" size={24} /></PopoverTrigger>
                <PopoverContent className="bg-[#68B3DF] text-[#FAFFEB] mt-5 rounded-md border-2 border-orange-500 w-60 pb-4">
                    <div className="text-center mb-2">MODO Config</div>
                    <Select>
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
                    Personality Strength<Slider className="mb-2" defaultValue={[33]} max={100} step={1} />
                    Yapness<Slider defaultValue={[33]} max={100} step={1} />
                </PopoverContent>
    </Popover>
    </div>

  )
}
