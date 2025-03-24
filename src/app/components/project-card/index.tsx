"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

export default function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950 border border-cyan-900/30 group"
    >
      <div className="relative overflow-hidden">
        <div className="aspect-video overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full flex justify-between items-center">
            <Button variant="ghost" size="icon" className="text-white hover:text-cyan-400 hover:bg-gray-800/50">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-cyan-400 hover:bg-gray-800/50">
              <ExternalLink className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-gray-800/50 text-cyan-400 border-cyan-900/50 text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

