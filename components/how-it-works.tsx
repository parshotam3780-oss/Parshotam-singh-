'use client'

import { Check } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Register Account',
      description: 'Sign up with your email or phone number in just 60 seconds',
      icon: '📝',
      color: 'from-purple-500 to-purple-600',
    },
    {
      number: '02',
      title: 'Join Match',
      description: 'Browse tournaments and join matches that match your skill level',
      icon: '🎮',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      number: '03',
      title: 'Battle Opponents',
      description: 'Compete with skilled players and showcase your gaming abilities',
      icon: '⚔️',
      color: 'from-orange-500 to-orange-600',
    },
    {
      number: '04',
      title: 'Win Rewards',
      description: 'Earn real money instantly and withdraw to your bank account',
      icon: '💰',
      color: 'from-red-500 to-red-600',
    },
  ]

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="neon-cyan">How It</span>
            <br />
            <span className="gradient-text">Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get started with Warr Battle in just 4 simple steps
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-orange-500 -translate-y-1/2 -z-10" />

          {/* Steps Grid */}
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="glass-effect rounded-2xl p-8 text-center hover-lift h-full flex flex-col">
                  {/* Circle Number */}
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center font-black text-2xl text-white relative z-10`}>
                    {step.icon}
                  </div>

                  {/* Step Number */}
                  <div className="text-sm font-bold text-gray-400 mb-2">{step.number}</div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-6 flex-1">{step.description}</p>

                  {/* Checkmark */}
                  <div className="inline-flex justify-center">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-background rounded-full flex items-center justify-center border-2 border-purple-500/50">
                      <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold rounded-full text-lg hover-lift transition-all duration-300">
            Get Started Now →
          </button>
        </div>
      </div>
    </section>
  )
}
