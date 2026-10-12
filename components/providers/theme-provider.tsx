"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
// with these provider we will be able to control the theme of the application
//  and also we will be able to use the useTheme hook to get the current theme and also we will be able to set the theme
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}