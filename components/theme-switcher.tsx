"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import { CircleIcon, MoonIcon } from "lucide-react"
export function ThemeSwitcher() {
  const { setTheme,theme } = useTheme()

  return (
    <>
    <button onClick={()=>setTheme(theme==="dark"?"light":"dark")}  className="cursor-pointer">
        {theme==="dark"?<MoonIcon className="fill-white stroke-0" />:<CircleIcon className="fill-black stroke-0"/>}
    </button>
    </>
  )
}
