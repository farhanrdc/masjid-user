"use client"

import { useTheme } from "next-themes";
import React from "react";
import {SunIcon, MoonIcon} from "@heroicons/react/24/solid"

const DarkModeToogle = () => {
  const { resolvedTheme, setTheme } = useTheme()
  return (
      <button 
        aria-label="Toogle Darkmode"
        type="button"
        className="flex items-center justify-center rounded-lg transition-all duration-300"
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light': 'dark')}
      >
        {resolvedTheme === 'dark' ? 
          (<SunIcon className="w-7 h-7 text-orange-600 "/> )
          : 
          (<MoonIcon className="w-7 h-7 text-slate-800 "/> )
        }
      </button>  
    
    
  )
}

export default DarkModeToogle