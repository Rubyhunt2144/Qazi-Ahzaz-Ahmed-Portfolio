import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"
import { SocialBar } from "@/components/social-bar"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Ahzaz Ahmed - Full Stack Developer",
  description:
    "Computer Science student and full-stack developer specializing in modern web applications, mobile apps, and IoT solutions.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>
          <SmoothScroll>
            <CustomCursor />
            <div className="fade-in">{children}</div>
            <SocialBar />
          </SmoothScroll>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
