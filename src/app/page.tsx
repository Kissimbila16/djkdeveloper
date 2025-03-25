"use client"
import Link from 'next/link';
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Code, Database, Github, Globe, Layers, Linkedin, Mail, Server, Twitter,SendHorizontal } from "lucide-react"
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
              Dev kissimbila
            </motion.div>
            <div className="hidden md:flex space-x-8">
  {[
    { id: "home", name: "Home" },
    { id: "about", name: "Sobre me" },
    { id: "skills", name: "Habilidades" },
    { id: "projects", name: "Projetos" },
    { id: "contact", name: "Contatos" }
  ].map((item) => (
    <motion.a
      key={item.id}
      href={`#${item.id}`}
      className="text-sm hover:text-cyan-400 transition-colors"
      whileHover={{ y: -2 }}
    >
      {item.name}
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
                Sobre mim
                </h2>
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div className="relative">
                    <div className="aspect-square rounded-xl overflow-hidden border-2 border-cyan-500/30 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20"></div>
                      <img
                        src="https://avatars.githubusercontent.com/u/95512079?v=4"
                        alt="Developer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full opacity-50 blur-xl"></div>
                  </div>
                  <div className="space-y-4">
                  <p className="text-gray-300">
Sou um apaixonado desenvolvedor Full Stack JavaScript com mais de 5 anos de experiência na criação de aplicativos web
modernos. Sou especialista em criar experiências de usuário perfeitas com tecnologias de ponta.
</p>
<p className="text-gray-300">
Minha jornada na tecnologia começou quando criei meu primeiro site aos 15 anos. Desde então, trabalhei com
startups e empresas estabelecidas para fornecer soluções escaláveis ​​e eficientes que resolvem problemas
do mundo real.
</p>
                    <div className="flex space-x-4 pt-4">
                    <Link href="https://github.com/Kissimbila16">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950"
                      >
                        <Github className="h-5 w-5" />
                      </Button>
                      </Link>
                      <Link href="https://www.linkedin.com/in/domingos-jo%C3%A3o-kissimbila-b4622a292">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950"
                      >
                        <Linkedin className="h-5 w-5" />
                      </Button>
                      </Link>
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
               Habilidades
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  <SkillBadge icon={<Code />} name="JavaScript" level={85} />
                  <SkillBadge icon={<Code />} name="HTML" level={95} />
                  <SkillBadge icon={<Code />} name="TypeScript" level={80} />
                  <SkillBadge icon={<Code />} name="React" level={75} />
                  <SkillBadge icon={<Code />} name="Next.js" level={90} />
                  <SkillBadge icon={<Server />} name="Node.js" level={95} />
                  <SkillBadge icon={<Database />} name="MongoDB" level={70} />
                  <SkillBadge icon={<Code />} name="Bootstrap 5" level={98} />
                  <SkillBadge icon={<Code />} name="PHP" level={80} />
                  <SkillBadge icon={<Code />} name="LARAVEL" level={80} />
                  <SkillBadge icon={<Server />} name="Docker" level={75} />
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
       Projectos
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <ProjectCard
                    title="API de verifição de bilhete de identidade"
                    description="A platform for generating and managing AI-powered content with advanced analytics."
                    image="/proj/biv.png"
                    tags={["React", "Node.js", "OpenAI"]}
                    link="https://api-biv.vercel.app/"
                  />
                  <ProjectCard
                    title="Minha framework Quick.js"
                    description="Real-time dashboard for e-commerce businesses with inventory management and sales analytics."
                    image="/proj/quick.png"
                    tags={["Next.js", "TypeScript"]}
                    link="https://quick-js.vercel.app/"
                  />
                  <ProjectCard
                    title="Modelo de machine learnig chamado dunamis.IA"
                    description="Live cryptocurrency tracking app with portfolio management and price alerts."
                    image="/proj/duna.png"
                    tags={["React", "Node.js", "WebSockets"]}
                    link="https://dunamisia.vercel.app/"
                  />
                  <ProjectCard
                    title="Rede social para usuarios de Github chamdo gitChat"
                    description="A niche social platform for developers to share code snippets and collaborate."
                    image="/proj/git.png"
                    tags={["Node.js", "TypeScript", "Bootstrap"]}
                    link="https://gitchat-via2-2.onrender.com/"
                  />
                  <ProjectCard
                    title="Plataforma de Arquitetura Nimana"
                    description="Collaborative task management tool with real-time updates and automation features."
                    image="/proj/nima.png"
                    tags={["Next.js","TypeScript", "Bootstrap", "WebSockets"]}
                    link="https://nimana-arq.vercel.app/"
                  />
                  <ProjectCard
                    title="Site de apresentação da JFtech"
                    description="Interactive weather visualization app with 3D maps and historical data analysis."
                    image="/proj/jftech.png"
                    tags={["Next.js","TypeScript", "Bootstrap"]}
                    link="https://jftech2-0.vercel.app/"
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
                Envie-me uma mensagem
                </h2>

                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-cyan-400">Informações de contato</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Mail className="text-cyan-500 h-5 w-5" />
                        <span className="text-gray-300">doncajoblack@gmail.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Globe className="text-cyan-500 h-5 w-5" />
                        <span className="text-gray-300">Angola/luanda</span>
                      </div>
                    </div>

                    <div className="pt-4">
                      <h3 className="text-xl font-semibold text-cyan-400 mb-4">Seguir me</h3>
                      <div className="flex space-x-4">
                      <Link href="https://github.com/Kissimbila16">
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full border-cyan-500 text-cyan-400 hover:bg-cyan-950"
                        >
                          <Github className="h-5 w-5" />
                        </Button>
                        </Link>
                        <Link href="https://ao.linkedin.com/in/domingos-jo%C3%A3o-kissimbila-b4622a292">
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full border-cyan-500 text-cyan-400 hover:bg-cyan-950"
                        >
                          <Linkedin className="h-5 w-5" />
                        </Button>
                        </Link>
                        <Link href="mailto:doncajoblack@gmail.com?subject=Hello&body=Hello i want work win">
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full border-cyan-500 text-cyan-400 hover:bg-cyan-950"
                        >
                          <SendHorizontal className="h-5 w-5" />
                        </Button>
                        </Link>
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
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Domingos J.Kissimbila. Todos os direitos reservados.</p>
            <p className="text-gray-600 text-xs mt-2">Domingos J.Kissimbila.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

