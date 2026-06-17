'use client'

import { Button } from '@/components/ui/button'
import { Gamepad2 } from 'lucide-react'

export default function Games() {
  const games = [
    {
      name: 'Free Fire',
      icon: '🔥',
      players: '15,234',
      prize: '₹25,00,000',
      color: 'from-orange-500 to-red-600',
      accent: 'rgba(249, 115, 22, 0.3)',
    },
    {
      name: 'BGMI',
      icon: '🎮',
      players: '12,456',
      prize: '₹20,00,000',
      color: 'from-cyan-500 to-blue-600',
      accent: 'rgba(6, 182, 212, 0.3)',
    },
    {
      name: 'Call of Duty Mobile',
      icon: '💥',
      players: '8,932',
      prize: '₹18,00,000',
      color: 'from-purple-500 to-pink-600',
      accent: 'rgba(168, 85, 247, 0.3)',
    },
  ]

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="neon-cyan">Featured</span>
            <br />
            <span className="gradient-text">Games</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Play your favorite games and compete for massive prize pools
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {games.map((game, index) => (
            <div
              key={index}
              className="group glass-effect overflow-hidden rounded-2xl hover-lift relative"
              style={{
                boxShadow: `0 0 40px ${game.accent}`,
              }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-10`} />

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Game Icon */}
                <div className="text-5xl mb-4">{game.icon}</div>

                {/* Game Name */}
                <h3 className="text-2xl font-bold text-white mb-6 flex-1">{game.name}</h3>

                {/* Stats */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Active Players</span>
                    <span className="font-bold text-white">{game.players}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Prize Pool</span>
                    <span className="font-bold neon-purple">{game.prize}</span>
                  </div>
                </div>

                {/* Play Button */}
                <Button
                  className={`w-full bg-gradient-to-r ${game.color} hover:opacity-90 text-white font-bold rounded-lg py-5`}
                >
                  <Gamepad2 className="mr-2 h-4 w-4" />
                  Play Now
                </Button>
              </div>

              {/* Glowing border effect */}
              <div className={`absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r ${game.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none`} />
            </div>
          ))}
        </div>

        {/* View All Games */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-2 border-purple-500/50 hover:border-purple-400 bg-transparent hover:bg-purple-500/10 text-purple-300 px-8 py-6 rounded-full font-bold"
          >
            View All Games
          </Button>
        </div>
      </div>
    </section>
  )
}
