"use client"

import dynamic from "next/dynamic"

// Dynamically import the App component with no SSR to avoid hydration issues
const App = dynamic(() => import("../src/App"), { ssr: false })

export default function Home() {
  return <App />
}
