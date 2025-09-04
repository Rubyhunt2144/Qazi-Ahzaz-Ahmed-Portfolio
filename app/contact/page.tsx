"use client"

import type React from "react"
import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle, ExternalLink } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create mailto link with form data
      const mailtoLink = `mailto:zeework2144@gmail.com?subject=${encodeURIComponent(
        formData.subject,
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
      )}`

      // Open default email client
      window.location.href = mailtoLink

      // Reset form after a short delay
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" })
        setIsSubmitting(false)
        alert("Email client opened! Please send the email from your default email application.")
      }, 1000)
    } catch (error) {
      setIsSubmitting(false)
      alert(
        "There was an error opening your email client. Please try again or contact me directly at zeework2144@gmail.com",
      )
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "zeework2144@gmail.com",
      href: "mailto:zeework2144@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 332 0960621",
      href: "tel:+923320960621",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Islamabad, Pakistan",
      href: "#",
    },
  ]

  const services = [
    "Full-Stack Web Development",
    "Mobile App Development",
    "IoT Solutions",
    "Database Design",
    "UI/UX Design",
    "System Integration",
  ]

  const faqs = [
    {
      question: "What's your typical project timeline?",
      answer:
        "Project timelines vary based on complexity, but most web applications take 2-4 weeks, while mobile apps typically require 4-8 weeks.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes, I work with clients globally and am comfortable with remote collaboration across different time zones.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "I specialize in React, Node.js, React Native, Python, and various databases. I'm always learning new technologies based on project needs.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, I offer maintenance and support packages to ensure your application continues to run smoothly after deployment.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12 fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 bounce-in">
              Let's Work <span className="text-primary pulse-glow">Together</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto slide-in-up">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life with
              modern technology and innovative solutions.
            </p>

            <div className="mt-8">
              <Button
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/1L3y2Gp0lmGw2UmTDZFE6HzbVYputQqU4wOpcAjj6rG4/edit",
                    "_blank",
                  )
                }
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg hover:scale-105 transition-all duration-300 pulse-glow"
              >
                <ExternalLink size={20} className="mr-2" />
                Free Consultation
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                Book a free 30-minute consultation to discuss your project
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="glass-card p-8 slide-in-left pulse-glow">
                <div className="flex items-center gap-3 mb-6">
                  <MessageCircle className="text-primary animate-bounce-slow" size={28} />
                  <h2 className="text-2xl font-bold text-foreground">Send Me a Message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="slide-in-left stagger-1">
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-background/50 border-primary/30 focus:border-primary transition-all duration-300 hover:border-primary/50"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="slide-in-right stagger-2">
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-background/50 border-primary/30 focus:border-primary transition-all duration-300 hover:border-primary/50"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="slide-in-up stagger-3">
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-background/50 border-primary/30 focus:border-primary transition-all duration-300 hover:border-primary/50"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="slide-in-up stagger-4">
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-background/50 border-primary/30 focus:border-primary resize-none transition-all duration-300 hover:border-primary/50"
                      placeholder="Tell me about your project or how I can help you..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 hover:scale-105 transition-all duration-300 pulse-glow bounce-in stagger-5"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Opening Email Client...
                      </>
                    ) : (
                      <>
                        <Send size={16} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info & Services */}
            <div className="space-y-6">
              {/* Contact Information */}
              <Card className="glass-card p-6 slide-in-right pulse-glow">
                <h3 className="text-xl font-semibold text-foreground mb-4 bounce-in">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className={`flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-all duration-300 group hover:scale-105 slide-in-right stagger-${index + 1}`}
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300 float">
                        <info.icon className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="text-foreground font-medium">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              {/* Services */}
              <Card className="glass-card p-6 slide-in-right stagger-2 pulse-glow">
                <h3 className="text-xl font-semibold text-foreground mb-4 bounce-in">Services I Offer</h3>
                <div className="space-y-2">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-2 slide-in-left stagger-${index + 1} hover:scale-105 transition-all duration-300`}
                    >
                      <CheckCircle className="text-primary animate-pulse-slow" size={16} />
                      <span className="text-muted-foreground text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Response Time */}
              <Card className="glass-card p-6 slide-in-right stagger-3 pulse-glow">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="text-primary animate-spin-slow" size={20} />
                  <h3 className="text-lg font-semibold text-foreground">Response Time</h3>
                </div>
                <p className="text-muted-foreground text-sm fade-in">
                  I typically respond to messages within 24 hours. For urgent projects, feel free to call me directly.
                </p>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <Card className="glass-card p-8 slide-in-up pulse-glow">
            <h2 className="text-2xl font-bold text-foreground mb-8 bounce-in">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`space-y-3 hover:scale-105 transition-all duration-300 slide-in-up stagger-${index + 1}`}
                >
                  <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
