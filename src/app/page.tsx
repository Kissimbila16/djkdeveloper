"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Code, Database, Github, Globe, Layers, Linkedin, Mail, Server, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "./components/theme-provider"
import ProjectCard from "./components/project-card"
import SkillBadge from "./components/skill-badge"
import ContactForm from "./components/contact-form"
import HeroSection from "./components/hero-section"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <div className="min-h-screen bg-black text-white overflow-hidden">
        {/* Custom cursor */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
          <div className="cursor-dot hidden md:block absolute h-4 w-4 rounded-full bg-cyan-500 opacity-75 transform -translate-x-1/2 -translate-y-1/2 mix-blend-screen"></div>
        </div>

        {/* Background grid */}
        <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 w-full z-40 backdrop-blur-md bg-black/30 border-b border-cyan-900/30">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600"
            >
              DEV.Djk
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm hover:text-cyan-400 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
            <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-950">
              Resume
            </Button>
          </div>
        </nav>

        <main>
          {/* Hero Section */}
          <HeroSection />

          {/* About Section */}
          <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto"
              >
                <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                  About Me
                </h2>
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div className="relative">
                    <div className="aspect-square rounded-xl overflow-hidden border-2 border-cyan-500/30 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20"></div>
                      <img
                        src="/placeholder.svg?height=400&width=400"
                        alt="Developer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full opacity-50 blur-xl"></div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-300">
                      I'm a passionate Full Stack JavaScript Developer with 5+ years of experience building modern web
                      applications. I specialize in creating seamless user experiences with cutting-edge technologies.
                    </p>
                    <p className="text-gray-300">
                      My journey in tech started when I built my first website at 15. Since then, I've worked with
                      startups and established companies to deliver scalable, efficient solutions that solve real-world
                      problems.
                    </p>
                    <div className="flex space-x-4 pt-4">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950"
                      >
                        <Github className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950"
                      >
                        <Linkedin className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950"
                      >
                        <Twitter className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-20 bg-gradient-to-b from-black to-gray-950 relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                  Tech Stack
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  <SkillBadge icon={<Code />} name="JavaScript" level={95} />
                  <SkillBadge icon={<Code />} name="TypeScript" level={90} />
                  <SkillBadge icon={<Code />} name="React" level={95} />
                  <SkillBadge icon={<Code />} name="Next.js" level={90} />
                  <SkillBadge icon={<Server />} name="Node.js" level={85} />
                  <SkillBadge icon={<Database />} name="MongoDB" level={80} />
                  <SkillBadge icon={<Database />} name="PostgreSQL" level={75} />
                  <SkillBadge icon={<Layers />} name="GraphQL" level={85} />
                  <SkillBadge icon={<Code />} name="Tailwind CSS" level={90} />
                  <SkillBadge icon={<Globe />} name="AWS" level={70} />
                  <SkillBadge icon={<Server />} name="Docker" level={75} />
                  <SkillBadge icon={<Code />} name="Redux" level={85} />
                </div>
              </motion.div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 relative">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                  Featured Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <ProjectCard
                    title="AI Content Platform"
                    description="A platform for generating and managing AI-powered content with advanced analytics."
                    image="/placeholder.svg?height=300&width=500"
                    tags={["React", "Node.js", "MongoDB", "OpenAI"]}
                    link="https://example.com"
                  />
                  <ProjectCard
                    title="E-commerce Dashboard"
                    description="Real-time dashboard for e-commerce businesses with inventory management and sales analytics."
                    image="/placeholder.svg?height=300&width=500"
                    tags={["Next.js", "TypeScript", "PostgreSQL", "Redis"]}
                    link="https://example.com"
                  />
                  <ProjectCard
                    title="Crypto Tracker"
                    description="Live cryptocurrency tracking app with portfolio management and price alerts."
                    image="/placeholder.svg?height=300&width=500"
                    tags={["React", "GraphQL", "Node.js", "WebSockets"]}
                    link="https://example.com"
                  />
                  <ProjectCard
                    title="Social Media Platform"
                    description="A niche social platform for developers to share code snippets and collaborate."
                    image="/placeholder.svg?height=300&width=500"
                    tags={["React", "Firebase", "TypeScript", "Tailwind"]}
                    link="https://example.com"
                  />
                  <ProjectCard
                    title="Task Management App"
                    description="Collaborative task management tool with real-time updates and automation features."
                    image="/placeholder.svg?height=300&width=500"
                    tags={["Next.js", "MongoDB", "Socket.io", "Redux"]}
                    link="https://example.com"
                  />
                  <ProjectCard
                    title="Weather Visualization"
                    description="Interactive weather visualization app with 3D maps and historical data analysis."
                    image="/placeholder.svg?height=300&width=500"
                    tags={["React", "Three.js", "D3.js", "Weather API"]}
                    link="https://example.com"
                  />
                </div>
              </motion.div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 bg-gradient-to-b from-gray-950 to-black relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto"
              >
                <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                  Get In Touch
                </h2>

                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-cyan-400">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Mail className="text-cyan-500 h-5 w-5" />
                        <span className="text-gray-300">developer@example.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Globe className="text-cyan-500 h-5 w-5" />
                        <span className="text-gray-300">San Francisco, CA</span>
                      </div>
                    </div>

                    <div className="pt-4">
                      <h3 className="text-xl font-semibold text-cyan-400 mb-4">Follow Me</h3>
                      <div className="flex space-x-4">
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full border-cyan-500 text-cyan-400 hover:bg-cyan-950"
                        >
                          <Github className="h-5 w-5" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full border-cyan-500 text-cyan-400 hover:bg-cyan-950"
                        >
                          <Linkedin className="h-5 w-5" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full border-cyan-500 text-cyan-400 hover:bg-cyan-950"
                        >
                          <Twitter className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <ContactForm />
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-8 border-t border-cyan-900/30 backdrop-blur-md bg-black/30">
          <div className="container mx-auto px-6 text-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} DEV.FUTURE. All rights reserved.</p>
            <p className="text-gray-600 text-xs mt-2">Built with Next.js and Tailwind CSS</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

