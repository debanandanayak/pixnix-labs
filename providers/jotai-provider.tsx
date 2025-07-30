'use client'

import { Provider } from "jotai"
import React from "react"
import type { ReactNode } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <Provider>
            {children}
        </Provider>
    )
}