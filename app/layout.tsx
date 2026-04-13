import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Aniket Pradhan - Best Freelancer for Building High-Performance Websites & Full-Stack Apps",
  description: "Looking for the best freelancer to build your website? Aniket Pradhan is a Senior Full-Stack Developer specializing in React, Next.js, and Node.js. Expert in custom WordPress themes, Shopify storefronts, and advanced marketing tracking (GTM/GA4) for high-converting results.",
  keywords: "best freelancer for build website, affordable web developer, hire full-stack developer, professional web design freelancer, next.js developer for hire, custom wordpress developer, shopify theme expert, marketing tracking specialist, GTM GA4 freelancer, conversion rate optimization expert",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


import './globals.css'