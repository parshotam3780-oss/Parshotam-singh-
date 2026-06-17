'use client'

import Hero from '@/components/hero'
import Features from '@/components/features'
import Games from '@/components/games'
import Tournaments from '@/components/tournaments'
import Leaderboard from '@/components/leaderboard'
import HowItWorks from '@/components/how-it-works'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <Hero />
      <Features />
      <Games />
      <Tournaments />
      <Leaderboard />
      <HowItWorks />
      <Footer />
    </main>
  )
}

