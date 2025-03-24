"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <motion.form
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formState.name}
          onChange={handleChange}
          required
          className="bg-gray-900/50 border-cyan-900/30 focus:border-cyan-500 text-white"
        />
      </div>

      <div>
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formState.email}
          onChange={handleChange}
          required
          className="bg-gray-900/50 border-cyan-900/30 focus:border-cyan-500 text-white"
        />
      </div>

      <div>
        <Textarea
          name="message"
          placeholder="Your Message"
          value={formState.message}
          onChange={handleChange}
          required
          className="bg-gray-900/50 border-cyan-900/30 focus:border-cyan-500 text-white min-h-[120px]"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting || isSubmitted}
        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
      >
        {isSubmitting ? (
          <div className="flex items-center gap-2">
            <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
            <span>Sending...</span>
          </div>
        ) : isSubmitted ? (
          <span>Message Sent!</span>
        ) : (
          <div className="flex items-center gap-2">
            <Send className="h-4 w-4" />
            <span>Send Message</span>
          </div>
        )}
      </Button>
    </motion.form>
  )
}

