"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface SkillBadgeProps {
  icon: ReactNode
  name: string
  level: number
}

export default function SkillBadge({ icon, name, level }: SkillBadgeProps) {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-gradient-to-br from-gray-900 to-gray-950 border border-cyan-900/30 rounded-xl p-4 group"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">{icon}</div>
        <h3 className="font-medium text-white">{name}</h3>
      </div>

      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-cyan-500 to-purple-600"
        />
      </div>
      <div className="mt-2 text-right text-xs text-gray-400">{level}%</div>
    </motion.div>
  )
}

