'use client'
// import React from 'react'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../utils/ui/navbar-menu"; 
import { cn } from "../utils/cn";
import Link from "next/link";



function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div 
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}

    >
      <Menu setActive={setActive} >
        <Link href={"/"}>
        
        <MenuItem setActive={setActive} active= {active} item="Home">
        </MenuItem>
        </Link>

      
      
        <Link href={"/"}>
        
        <MenuItem setActive={setActive} active= {active} item="Our Courses">
        <div className="flex flex-col space-y-4 text-sm">
        <HoveredLink href="/courses">All Courses</HoveredLink>
        <HoveredLink href="/courses">Basic Music theory</HoveredLink>
        <HoveredLink href="/courses">Advanced Composition</HoveredLink>
        <HoveredLink href="/courses">Song Writing</HoveredLink>
        <HoveredLink href="/courses">Music production</HoveredLink>
        </div>
        </MenuItem>
        </Link>

        <MenuItem setActive={setActive} active= {active} item="Contact us">
        </MenuItem>
        <Link href={"/contact"}></Link>
      </Menu>

    </div>
  )
}

export default Navbar