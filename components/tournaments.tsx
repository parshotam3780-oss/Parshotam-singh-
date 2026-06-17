'use client'

import { Button } from '@/components/ui/button'
import { Users, Trophy, Zap } from 'lucide-react'

export default function Tournaments() {
  const tournaments = [
    {
      title: 'Elite Squad Championship',
      game: 'Free Fire',
      entryFee: '₹49',
      prizePool: '₹50,000',
      playersJoined: '1,234/2,000',
      timeLeft: '3h 45m',
      difficulty: 'Pro',
      bgGradient: 'from-orange-500/20 to-red-500/20',
      borderColor: 'border-orange-500/30',
    },
    {
      title: 'Tactical Masters',
      game: 'BGMI',
      entryFee: '₹99',
      prizePool: '₹1,00,000',
      playersJoined: '856/1,500',
      timeLeft: '5h 12m',
      difficulty: 'Elite',
      bgGradient: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'border-cyan-500/30',
    },
    {
      title: 'Warfare Challenge',
      game: 'Call of Duty Mobile',
      entryFee: '₹149',
      prizePool: '₹1,50,000',
      playersJoined: '423/1,000',
      timeLeft: '8h 30m',
      difficulty: 'Legendary',
      bgGradient: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30',
    },
    {
      title: 'Beginner Bonanza',
      game: 'Free Fire',
      entryFee: '₹9',
      prizePool: '₹10,000',
      playersJoined: '2,456/3,000',
      timeLeft: '2h 15m',
      difficulty: 'Beginner',
      bgGradient: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/30',
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'text-green-400'
      case 'Pro':
        return 'text-orange-400'
      case 'Elite':
        return 'text-cyan-400'
      case 'Legendary':
        return 'text-purple-400'
      default:
        return 'text-gray-400'
    }
  }

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="neon-red">Live</span>
            <br />
            <span className="gradient-text">Tournaments</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join tournaments right now and compete with players worldwide
          </p>
        </div>

        {/* Tournaments Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {tournaments.map((tournament, index) => (
            <div
              key={index}
              className={`glass-effect rounded-2xl p-6 hover-lift border ${tournament.borderColor} relative group overflow-hidden`}
              style={{
                boxShadow: `0 0 30px rgba(0, 0, 0, 0.5)`,
              }}
            >
              {/* Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tournament.bgGradient} opacity-50`} />

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{tournament.title}</h3>
                    <p className="text-sm text-gray-400">{tournament.game}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold ${getDifficultyColor(tournament.difficulty)} bg-black/30 border border-current/30`}>
                    {tournament.difficulty}
                  </div>
                </div>

                {/* Timer */}
                <div className="mb-4 inline-block px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-lg text-xs font-semibold neon-red">
                  ⏱️ {tournament.timeLeft} remaining
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3 mb-6 pt-4 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-1">Entry Fee</div>
                    <div className="text-lg font-bold neon-purple">{tournament.entryFee}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-1">Prize Pool</div>
                    <div className="text-lg font-bold text-cyan-400">{tournament.prizePool}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-1">Players</div>
                    <div className="text-lg font-bold text-orange-400">{tournament.playersJoined}</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-cyan-500"
                      style={{
                        width: `${(parseInt(tournament.playersJoined.split('/')[0]) / parseInt(tournament.playersJoined.split('/')[1])) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Join Button */}
                <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold rounded-lg py-5">
                  <Trophy className="mr-2 h-4 w-4" />
                  Join Tournament
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Tournaments */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-2 border-cyan-500/50 hover:border-cyan-400 bg-transparent hover:bg-cyan-500/10 text-cyan-300 px-8 py-6 rounded-full font-bold"
          >
            View All Tournaments
          </Button>
        </div>
      </div>
    </section>
  )
}
