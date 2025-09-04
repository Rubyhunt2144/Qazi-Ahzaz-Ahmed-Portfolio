"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Code, Cpu, ExternalLink, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function HomePage() {
  const technologies = ["Python", "JavaScript", "React", "Node.js", "Next.js", "TypeScript"]

  const featuredProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Customizable clothing e-commerce app with design previews and secure checkout",
      longDescription:
        "A comprehensive e-commerce platform built with React Native and Node.js, featuring real-time design customization, secure payment integration, and admin dashboard for inventory management.",
      technologies: ["React Native", "Node.js", "MongoDB", "Stripe API"],
      features: ["Real-time Design Preview", "Secure Payment Gateway", "Admin Dashboard", "Inventory Management"],
      challenges:
        "Implementing real-time design preview and ensuring seamless user experience across different devices.",
      results: "Successfully delivered a fully functional e-commerce app with 99% uptime and positive user feedback.",
      image: "/ecommerce-dashboard-interface.png",
      icon: Code,
      gradient: "from-primary/20 to-secondary/20",
    },
    {
      id: 2,
      title: "Smart Agriculture System",
      description: "IoT-based smart agriculture monitoring and automation system",
      longDescription:
        "An innovative IoT solution using ESP8266 microcontrollers and various sensors to monitor soil moisture, temperature, and humidity, with automated irrigation control.",
      technologies: ["ESP8266", "Python", "Firebase", "React Dashboard"],
      features: ["Real-time Monitoring", "Automated Irrigation", "Weather Integration", "Mobile Alerts"],
      challenges: "Ensuring reliable sensor data transmission and creating an intuitive dashboard for farmers.",
      results: "Improved crop yield by 30% and reduced water consumption by 25% in pilot testing.",
      image: "/placeholder-xlj67.png",
      icon: Cpu,
      gradient: "from-secondary/20 to-primary/20",
    },
  ]

  const [selectedProject, setSelectedProject] = useState<(typeof featuredProjects)[0] | null>(null)

  const openProjectModal = (project: (typeof featuredProjects)[0]) => {
    setSelectedProject(project)
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {/* Main Hero Card */}
            <div className="lg:col-span-2">
              <Card className="glass-card p-8 h-full relative overflow-hidden">
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="w-16 h-16 animate-spin-slow">
                    <div className="w-full h-full rounded-full border-2 border-primary/30 flex items-center justify-center">
                      <div className="w-8 h-8 bg-primary/40 transform rotate-45"></div>
                    </div>
                  </div>
                  <div className="w-12 h-12 animate-pulse">
                    <div className="w-full h-full rounded-full border-2 border-primary/20 flex items-center justify-center">
                      <div className="w-4 h-4 bg-primary/60 rounded-full"></div>
                    </div>
                  </div>
                  <div className="w-20 h-20 animate-bounce-slow">
                    <div className="w-full h-full rounded-full border-2 border-primary/40 flex items-center justify-center">
                      <div className="w-6 h-6 bg-primary/50 clip-path-diamond"></div>
                    </div>
                  </div>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                  Full-Stack Developer
                  <span className="block text-primary italic font-normal mt-2">Building The Future</span>
                  with Modern Solutions
                </h1>
              </Card>
            </div>

            {/* Profile Image */}
            <div className="relative group">
              <Card className="glass-card p-0 h-full overflow-hidden">
                <div className="relative h-full min-h-[400px]">
                  <Image
                    src="/ahzaz-profile.png"
                    alt="Ahzaz Ahmed"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-500" />
                </div>
              </Card>
            </div>
          </div>

          {/* About Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <Card className="glass-card p-6 slide-in-left">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm <strong className="text-foreground">Ahzaz Ahmed</strong>, a passionate Computer Science graduate
                from
                <strong className="text-primary"> University of Wah</strong> with expertise in building modern web
                applications, mobile apps, and IoT solutions. I specialize in creating innovative digital experiences
                and smart solutions for people and businesses.
              </p>
            </Card>

            <Card className="glass-card p-6 slide-in-right">
              <Link href="/contact">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-muted-foreground">Have some questions?</p>
                  <ArrowUpRight className="text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Contact me</h2>
              </Link>
            </Card>
          </div>

          {/* Technology Stack */}
          <Card className="glass-card p-6 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Technology Stack</h2>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="glass-card p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-foreground">Featured Projects</h2>
              <Link href="/projects">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  View All Projects
                  <ArrowUpRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredProjects.map((project) => (
                <div key={project.id} className="group cursor-pointer">
                  <div
                    className={`aspect-video bg-gradient-to-br ${project.gradient} rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform relative overflow-hidden`}
                  >
                    <project.icon size={48} className="text-primary" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => openProjectModal(project)}
                      className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Eye size={14} className="mr-1" />
                      View Details
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open("https://github.com/Rubyhunt2144", "_blank")}
                      className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <ExternalLink size={14} className="mr-1" />
                      Source Code
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Project Modal */}
          {selectedProject && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <h2 className="text-2xl font-bold text-foreground">{selectedProject.title}</h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={closeProjectModal}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      ✕
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                        <selectedProject.icon size={64} className="text-primary" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Description</h3>
                        <p className="text-muted-foreground">{selectedProject.longDescription}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="bg-primary/20 text-primary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Key Features</h3>
                        <ul className="space-y-1">
                          {selectedProject.features.map((feature, index) => (
                            <li key={index} className="text-muted-foreground text-sm">
                              • {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Challenges</h3>
                      <p className="text-muted-foreground">{selectedProject.challenges}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Results</h3>
                      <p className="text-muted-foreground">{selectedProject.results}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-4">
                    <Button
                      onClick={() => window.open("https://github.com/Rubyhunt2144", "_blank")}
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View Source Code
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
