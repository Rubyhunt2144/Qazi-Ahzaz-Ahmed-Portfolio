"use client"

import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, X, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const featuredProjects = [
    {
      title: "Customizable Clothing E-Commerce App",
      description:
        "A dynamic clothing customization platform with real-time design previews, secure checkout system, and comprehensive admin/supplier role management.",
      image: "🛍️",
      technologies: ["React Native", "Node.js", "Express.js", "Firebase", "Stripe API"],
      category: "Mobile App",
      status: "Completed",
      features: [
        "Real-time design preview system",
        "Secure payment integration",
        "Multi-role user management",
        "Inventory management system",
        "Order tracking & notifications",
      ],
      detailedDescription:
        "This comprehensive e-commerce platform revolutionizes the clothing customization industry by providing users with an intuitive interface to design and order personalized apparel. The application features a sophisticated real-time preview system that allows customers to see their designs instantly, complete with fabric textures and color variations.",
      challenges: [
        "Implementing real-time design rendering with complex fabric textures",
        "Managing multi-role authentication and permissions",
        "Optimizing performance for mobile devices with heavy graphics",
        "Integrating secure payment processing with multiple gateways",
      ],
      results: [
        "Increased user engagement by 300% with interactive design tools",
        "Reduced order processing time by 50% through automation",
        "Achieved 99.9% uptime with robust error handling",
        "Successfully processed over 10,000 custom orders",
      ],
      images: ["/e-commerce-app-dashboard.jpg", "/clothing-customization-interface.jpg", "/mobile-app-design-preview.jpg"],
    },
    {
      title: "Smart Agriculture IoT System",
      description:
        "An intelligent agriculture monitoring system using IoT sensors for automated irrigation, soil monitoring, and crop management with real-time data analytics.",
      image: "🌱",
      technologies: ["ESP8266", "Python", "OpenCV", "Firebase", "React.js"],
      category: "IoT",
      status: "Completed",
      features: [
        "Automated irrigation control",
        "Soil moisture & pH monitoring",
        "Weather data integration",
        "Crop health analysis using AI",
        "Mobile app for remote monitoring",
      ],
      detailedDescription:
        "An innovative IoT solution that transforms traditional farming practices through intelligent automation and data-driven insights. The system combines multiple sensors, machine learning algorithms, and cloud computing to optimize crop yield while minimizing resource consumption.",
      challenges: [
        "Developing reliable wireless communication in rural environments",
        "Creating accurate crop health detection algorithms",
        "Ensuring system reliability in harsh weather conditions",
        "Implementing efficient power management for remote sensors",
      ],
      results: [
        "Reduced water consumption by 40% through smart irrigation",
        "Increased crop yield by 25% with optimized growing conditions",
        "Prevented crop diseases through early detection system",
        "Saved farmers 60% of manual monitoring time",
      ],
      images: ["/smart-agriculture-dashboard.jpg", "/iot-sensors-in-field.jpg", "/crop-monitoring-mobile-app.jpg"],
    },
  ]

  const otherProjects = [
    {
      title: "Doctor Appointment System",
      description:
        "Comprehensive healthcare management system for booking appointments, managing patient records, and doctor schedules.",
      technologies: ["Java", "MySQL", "JavaFX"],
      category: "Desktop App",
      icon: "🏥",
    },
    {
      title: "Blood Bank Management System",
      description:
        "Complete blood bank management solution with donor registration, blood inventory tracking, and emergency request handling.",
      technologies: ["C++", "MySQL", "Qt"],
      category: "Desktop App",
      icon: "🩸",
    },
    {
      title: "Automated Form Filler",
      description:
        "Selenium-based automation tool for filling web forms automatically with data validation and error handling.",
      technologies: ["Python", "Selenium", "BeautifulSoup"],
      category: "Automation",
      icon: "🤖",
    },
    {
      title: "Object Detection System",
      description:
        "Computer vision application for real-time object detection and classification using advanced ML algorithms.",
      technologies: ["Python", "OpenCV", "TensorFlow"],
      category: "AI/ML",
      icon: "👁️",
    },
    {
      title: "Online Store Web App",
      description:
        "Full-featured e-commerce web application with product catalog, shopping cart, and payment processing.",
      technologies: ["React.js", "Node.js", "MongoDB"],
      category: "Web App",
      icon: "🛒",
    },
    {
      title: "Billing System Suite",
      description:
        "Multi-language billing system implementations with invoice generation, tax calculation, and reporting features.",
      technologies: ["C++", "Java", "C#", "MySQL"],
      category: "Desktop App",
      icon: "📊",
    },
  ]

  const categories = ["All", "Mobile App", "Web App", "Desktop App", "IoT", "AI/ML", "Automation"]

  const handleGithubClick = () => {
    window.open("https://github.com/Rubyhunt2144", "_blank")
  }

  const openProjectDetails = (project: any) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
  }

  const closeProjectDetails = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length)
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length)
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12 fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 bounce-in">
              My <span className="text-primary pulse-glow">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto slide-in-up">
              A showcase of my work spanning web development, mobile applications, IoT solutions, and automation tools.
              Each project represents a unique challenge and learning experience.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 slide-in-down">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={`transition-all duration-300 hover:scale-105 scale-in stagger-${index + 1} ${
                  category === "All"
                    ? "bg-primary text-primary-foreground pulse-glow"
                    : "border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8 slide-in-left">Featured Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <Card
                  key={index}
                  className={`glass-card p-0 overflow-hidden hover:scale-105 transition-all duration-500 pulse-glow ${
                    index % 2 === 0 ? "slide-in-left" : "slide-in-right"
                  } stagger-${index + 1}`}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-6xl float relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                    <span className="relative z-10">{project.image}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 bounce-in">
                        {project.category}
                      </Badge>
                      <Badge variant="outline" className="border-green-500/30 text-green-400 pulse-glow">
                        {project.status}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 slide-in-up">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed fade-in">{project.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2 slide-in-left">Key Features:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className={`flex items-center gap-2 slide-in-right stagger-${idx + 1}`}>
                            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-slow" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className={`text-xs border-muted-foreground/30 hover:border-primary hover:text-primary transition-all duration-300 scale-in stagger-${idx + 1}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        onClick={() => openProjectDetails(project)}
                        className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 pulse-glow"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        View Details
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={handleGithubClick}
                        className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent hover:scale-105 transition-all duration-300"
                      >
                        <Github size={16} className="mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-8 slide-in-left">Other Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card
                  key={index}
                  className={`glass-card p-6 hover:scale-105 transition-all duration-500 hover:border-primary/50 pulse-glow ${
                    index % 2 === 0 ? "slide-in-left" : "slide-in-right"
                  } stagger-${(index % 6) + 1}`}
                >
                  <div className="text-4xl mb-4 float">{project.icon}</div>
                  <div className="flex items-center justify-between mb-3">
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-primary border-primary/30 text-xs bounce-in"
                    >
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 slide-in-up">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed fade-in">{project.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className={`text-xs border-muted-foreground/30 hover:border-primary hover:text-primary transition-all duration-300 scale-in stagger-${idx + 1}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handleGithubClick}
                    className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent hover:scale-105 transition-all duration-300"
                  >
                    <Github size={14} className="mr-2" />
                    View on GitHub
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <Card className="glass-card p-8 mt-16 text-center slide-in-up pulse-glow">
            <h2 className="text-2xl font-bold text-foreground mb-4 bounce-in">Interested in Working Together?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto fade-in">
              I'm always excited to take on new challenges and collaborate on innovative projects. Let's discuss how we
              can bring your ideas to life.
            </p>
            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 pulse-glow">
                Get In Touch
              </Button>
            </Link>
          </Card>
        </div>
      </main>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 fade-in">
          <div className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto slide-in-up">
            <div className="sticky top-0 bg-background/95 backdrop-blur-sm p-6 border-b border-primary/20 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">{selectedProject.title}</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={closeProjectDetails}
                className="hover:bg-primary/20 hover:scale-110 transition-all duration-300"
              >
                <X size={20} />
              </Button>
            </div>

            <div className="p-6">
              {/* Image Gallery */}
              <div className="relative mb-6">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden">
                  <Image
                    src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white hover:scale-110 transition-all duration-300"
                >
                  <ArrowLeft size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white hover:scale-110 transition-all duration-300"
                >
                  <ArrowRight size={20} />
                </Button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {selectedProject.images.map((_: any, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === currentImageIndex ? "bg-primary" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Project Overview</h3>
                  <p className="text-muted-foreground leading-relaxed">{selectedProject.detailedDescription}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Technical Challenges</h3>
                  <ul className="space-y-2">
                    {selectedProject.challenges.map((challenge: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 animate-pulse-slow" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Results & Impact</h3>
                  <ul className="space-y-2">
                    {selectedProject.results.map((result: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 animate-pulse-slow" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    onClick={handleGithubClick}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300"
                  >
                    <Github size={16} className="mr-2" />
                    View Source Code
                  </Button>
                  <Button
                    variant="outline"
                    onClick={closeProjectDetails}
                    className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    Close Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
