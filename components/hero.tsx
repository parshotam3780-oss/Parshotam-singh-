'use client'

import { Button } from '@/components/ui/button'
import { Download, LogIn } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Glow orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl opacity-20" />

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        {/* Live Badge */}
        <div className="mb-6 inline-block">
          <div className="glass-effect px-4 py-2 rounded-full flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold neon-red">Platform Live Now</span>
          </div>
        </div>

        {/* Logo */}
        <div className="mb-8 inline-block">
          <div className="text-6xl md:text-8xl font-black gradient-text drop-shadow-2xl">
            ⚔️
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-black mb-6 text-pretty leading-tight">
          <span className="neon-purple">Welcome to</span>
          <br />
          <span className="gradient-text">Warr Battle</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto text-pretty leading-relaxed">
          Compete in epic battles, join tournaments, climb leaderboards, and win exciting cash prizes.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-8 py-6 text-lg font-bold rounded-full hover-lift neon-glow cursor-pointer"
          >
            <a href="https://drive.google.com/file/d/1Q6CiI-TLb4Y4Zz44Yi85ZeVf6Oz23mm_/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" />
              Download APK
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-cyan-500/50 hover:border-cyan-400 bg-transparent hover:bg-cyan-500/10 text-cyan-300 px-8 py-6 text-lg font-bold rounded-full hover-lift"
          >
            <LogIn className="mr-2 h-5 w-5" />
            Web Login
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
          <div className="glass-effect p-4 rounded-xl">
            <div className="text-2xl font-bold neon-purple">50K+</div>
            <p className="text-xs text-gray-400 mt-1">Active Players</p>
          </div>
          <div className="glass-effect p-4 rounded-xl">
            <div className="text-2xl font-bold neon-cyan">₹50L+</div>
            <p className="text-xs text-gray-400 mt-1">Prize Pool</p>
          </div>
          <div className="glass-effect p-4 rounded-xl">
            <div className="text-2xl font-bold neon-red">24/7</div>
            <p className="text-xs text-gray-400 mt-1">Tournaments</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-sm text-gray-400">Scroll to explore</span>
        <svg
          className="w-5 h-5 text-purple-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
