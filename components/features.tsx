'use client'

import { Zap, Wallet, Shield, Trophy } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Trophy,
      title: 'Daily Tournaments',
      description: 'Compete in fresh tournaments every single day with increasing rewards',
      color: 'from-purple-500 to-purple-600',
      glow: 'rgba(168, 85, 247, 0.5)',
    },
    {
      icon: Wallet,
      title: 'Instant Withdrawals',
      description: 'Withdraw your winnings instantly to your bank account, anytime',
      color: 'from-cyan-500 to-cyan-600',
      glow: 'rgba(6, 182, 212, 0.5)',
    },
    {
      icon: Shield,
      title: 'Secure Matches',
      description: 'Bank-level security ensures fair gameplay and protected transactions',
      color: 'from-orange-500 to-orange-600',
      glow: 'rgba(249, 115, 22, 0.5)',
    },
    {
      icon: Zap,
      title: 'Real Cash Rewards',
      description: 'Win real money by demonstrating your gaming skills and strategy',
      color: 'from-red-500 to-red-600',
      glow: 'rgba(239, 68, 68, 0.5)',
    },
  ]

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="neon-purple">Why Choose</span>
            <br />
            <span className="gradient-text">Warr Battle?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the ultimate competitive gaming platform with exclusive features
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group glass-effect p-8 rounded-2xl hover-lift relative overflow-hidden"
                style={{
                  boxShadow: `0 0 30px ${feature.glow}`,
                }}
              >
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-purple-500 via-cyan-500 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
