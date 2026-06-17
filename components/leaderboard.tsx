'use client'

import { Medal, Flame } from 'lucide-react'

export default function Leaderboard() {
  const leaderboardData = [
    {
      rank: 1,
      name: 'ShadowGamer',
      game: 'Free Fire',
      wins: 456,
      earnings: '₹2,34,500',
      rating: '2,890',
      trending: 'up',
    },
    {
      rank: 2,
      name: 'NinjaKing',
      game: 'BGMI',
      wins: 423,
      earnings: '₹1,98,300',
      rating: '2,756',
      trending: 'up',
    },
    {
      rank: 3,
      name: 'PhantomStrike',
      game: 'Call of Duty Mobile',
      wins: 389,
      earnings: '₹1,76,800',
      rating: '2,634',
      trending: 'down',
    },
    {
      rank: 4,
      name: 'ZeroWolf',
      game: 'Free Fire',
      wins: 367,
      earnings: '₹1,54,200',
      rating: '2,512',
      trending: 'up',
    },
    {
      rank: 5,
      name: 'CyberXF',
      game: 'BGMI',
      wins: 342,
      earnings: '₹1,42,600',
      rating: '2,389',
      trending: 'down',
    },
  ]

  const getMedalColor = (rank: number) => {
    switch (rank) {
      case 1:
        return 'text-yellow-400'
      case 2:
        return 'text-gray-300'
      case 3:
        return 'text-orange-400'
      default:
        return 'text-purple-400'
    }
  }

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="neon-purple">Top</span>
            <br />
            <span className="gradient-text">Players</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Meet the best players on Warr Battle. Will you be next?
          </p>
        </div>

        {/* Leaderboard */}
        <div className="space-y-3">
          {leaderboardData.map((player, index) => (
            <div
              key={index}
              className="glass-effect rounded-xl p-4 hover-lift border border-white/10 group transition-all duration-300"
              style={{
                boxShadow: player.rank <= 3 ? `0 0 20px rgba(${player.rank === 1 ? '234, 179, 8' : player.rank === 2 ? '148, 163, 184' : '217, 119, 6'}, 0.3)` : 'none',
              }}
            >
              <div className="flex items-center justify-between gap-4">
                {/* Rank & Name */}
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className={`text-2xl font-black ${getMedalColor(player.rank)} flex-shrink-0`}>
                    {player.rank <= 3 ? <Medal className="h-8 w-8" /> : <span>#{player.rank}</span>}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-white text-lg truncate">{player.name}</h3>
                    <p className="text-sm text-gray-400">{player.game}</p>
                  </div>
                </div>

                {/* Stats - Hidden on mobile, shown on md+ */}
                <div className="hidden md:grid grid-cols-3 gap-6 text-right">
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Wins</div>
                    <div className="text-lg font-bold neon-cyan">{player.wins}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Earnings</div>
                    <div className="text-lg font-bold neon-purple">{player.earnings}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Rating</div>
                    <div className="flex items-center justify-end gap-1">
                      <Flame className="h-4 w-4 text-orange-400" />
                      <span className="text-lg font-bold text-orange-400">{player.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Trending - Mobile view */}
                <div className="md:hidden text-right">
                  <div className="text-xs text-gray-400 mb-1">Earnings</div>
                  <div className="text-lg font-bold neon-purple">{player.earnings}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Leaderboard */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-cyan-500/50 hover:border-cyan-400 bg-transparent hover:bg-cyan-500/10 text-cyan-300 rounded-full font-bold transition-all duration-300 hover-lift">
            View Full Leaderboard
          </button>
        </div>
      </div>
    </section>
  )
}
