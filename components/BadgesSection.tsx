"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface Badge {
  id: string
  name: string
  description: string
  image: string
  earnedDate: string
  isOfficial?: boolean
}

const badges: Badge[] = [
  {
    id: "yolo",
    name: "YOLO",
    description: "You pushed a commit without a CI check. Live dangerously.",
    image: "https://github.githubassets.com/assets/yolo-default-be0bbff04951.png",
    earnedDate: "December 15, 2024",
    isOfficial: true,
  },
  {
    id: "pair-extraordinaire",
    name: "Pair Extraordinaire",
    description: "Coauthored commits on a merged pull request.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pair-extraordinaire-default-BzzjejuLGQrctckH4sVZUgdwBCYrvV.png",
    earnedDate: "January 8, 2025",
    isOfficial: true,
  },
  {
    id: "polyglot",
    name: "Polyglot Developer",
    description: "Mastered multiple programming languages: Python, JavaScript, TypeScript, Rust, C, C++, Swift, and Go.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9eb4588351e650e8bb6e4cb1796cd515-SX3eC46J0OyfOo69EClJeFrP0yl8Bf.jpg",
    earnedDate: "March 1, 2025",
    isOfficial: false,
  },
  {
    id: "framework-master",
    name: "Framework Master",
    description: "Expert in modern frameworks: Astro, React, Svelte, PyTorch, TensorFlow, Transformers, Unsloth, and Axolotl.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a0dac6655ded54b7cfaa0d50abd83c21-dVMx8HKdzb3Yfu5rBMeYynl6TsY9wE.jpg",
    earnedDate: "February 20, 2025",
    isOfficial: false,
  },
]

export function BadgesSection() {
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null)

  return (
    <>
      <div className="mt-6 pt-4 border-t border-[#21262d]">
        <h2 className="text-xs font-semibold text-[#8b949e] mb-3">Achievements</h2>
        <div className="flex gap-2 flex-wrap">
          {badges.map((badge) => (
            <button
              key={badge.id}
              onClick={() => setSelectedBadge(badge)}
              className="group relative w-14 h-14 rounded-full bg-[#21262d] border border-[#30363d] hover:border-[#8b949e] transition-all hover:scale-105 overflow-hidden"
              title={badge.name}
            >
              <Image
                src={badge.image}
                alt={badge.name}
                width={56}
                height={56}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedBadge && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
          onClick={() => setSelectedBadge(null)}
        >
          <div 
            className="relative bg-[#161b22] border border-[#30363d] rounded-lg p-6 max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedBadge(null)}
              className="absolute top-4 right-4 text-[#8b949e] hover:text-[#e6edf3]"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full bg-[#21262d] border-2 border-[#30363d] overflow-hidden mb-4">
                <Image
                  src={selectedBadge.image}
                  alt={selectedBadge.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold text-[#e6edf3] mb-1">
                {selectedBadge.name}
              </h3>

              {selectedBadge.isOfficial && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-[#238636]/20 text-[#3fb950] rounded-full mb-2">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                    <path fillRule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.78 5.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L4.22 8.28a.75.75 0 011.06-1.06l1.72 1.72 3.72-3.72a.75.75 0 011.06 0z"/>
                  </svg>
                  Official GitHub Badge
                </span>
              )}

              <p className="text-sm text-[#8b949e] mb-4">
                {selectedBadge.description}
              </p>

              <div className="text-xs text-[#8b949e]">
                Earned: <span className="text-[#e6edf3]">{selectedBadge.earnedDate}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
