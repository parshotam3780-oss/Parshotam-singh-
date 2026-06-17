'use client'

import { Mail, MessageCircle, Send } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'Discord', icon: '🎮', url: '#' },
    { name: 'Telegram', icon: '✈️', url: '#' },
  ]

  const links = [
    { label: 'Contact Us', icon: Mail },
    { label: 'Privacy Policy', icon: MessageCircle },
    { label: 'Terms & Conditions', icon: Send },
  ]

  return (
    <footer className="relative py-16 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Newsletter Section */}
        <div className="mb-16 glass-effect rounded-2xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated with <span className="gradient-text">Warr Battle</span>
            </h3>
            <p className="text-gray-400 mb-6">Get the latest tournaments, tips, and exclusive offers delivered to your inbox</p>
            <div className="flex gap-2 md:flex-row flex-col">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold rounded-lg transition-all duration-300 hover-lift">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="text-3xl font-black gradient-text mb-4">⚔️ Warr Battle</div>
            <p className="text-gray-400 text-sm mb-6">
              The ultimate competitive gaming platform for mobile esports
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-lg hover-lift transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Tournaments
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Leaderboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Games
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Status Page
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-white/10 pt-8 pb-4">
          <div className="grid md:grid-cols-3 gap-4 md:gap-0">
            {links.map((link, index) => {
              const Icon = link.icon
              return (
                <a
                  key={index}
                  href="#"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                >
                  <Icon className="h-4 w-4 group-hover:text-purple-400 transition-colors" />
                  <span className="text-sm">{link.label}</span>
                </a>
              )
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm">
            © {currentYear} Warr Battle. All rights reserved. | Designed with ⚔️ for competitive gamers
          </p>
        </div>
      </div>
    </footer>
  )
}
