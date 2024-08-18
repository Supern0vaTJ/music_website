'use client'
import Link from "next/link"
import { Button } from "../utils/ui/moving-border";
import { cn } from "../utils/cn";
import { Spotlight } from "../utils/ui/Spotlight"; 


function HeroSection() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 bg-black-900'>
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
        />
        <div className='p-4 relative z-10 w-full text-center '>
        
            <h1
            className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            >Master the art of music</h1>
            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta blanditiis quis modi deserunt vitae error quod dolorum, sapiente sunt accusantium expedita, minima debitis veniam iste consequatur ducimus. Illo, qui?</p>
            
            <div className="mt-4">
                <Link href={"/courses"}>
                    <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    Explore courses
                    </Button>
                </Link>
            </div>
        </div>

        
    </div>
  )
}

export default HeroSection