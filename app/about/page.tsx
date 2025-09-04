import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, GraduationCap, Briefcase } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const technologies = {
    "Programming Languages": ["Python", "Java", "JavaScript", "C++", "C#"],
    "Web Technologies": ["React.js", "React Native", "Node.js", "Express.js", "HTML", "CSS"],
    Databases: ["MySQL", "Firebase", "MongoDB"],
    "Tools & Others": ["Selenium", "OpenCV", "ESP8266", "Figma", "Git"],
  }

  const experiences = [
    {
      title: "Treasurer",
      company: "CS Computing Society",
      period: "2023 – 2025",
      location: "University of Wah",
      description:
        "Managed budgeting, finances, and event coordination. Received official recognition for excellent performance.",
    },
    {
      title: "Intern",
      company: "Pakistan Ordnance Factory (POF)",
      period: "July 2024 – Sep 2024",
      location: "POP Institute of Technology, Wah Cantt",
      description:
        "Completed 2-month internship in IT and software engineering. Learned practical system design and infrastructure management.",
    },
    {
      title: "HR Executive",
      company: "Tire Link Company",
      period: "Aug 2023 – Nov 2023",
      location: "Rawalpindi",
      description: "Managed employee recruitment, onboarding, and record-keeping.",
    },
    {
      title: "Sales & Support Executive",
      company: "J Telemarketing",
      period: "Aug 2022 – Sep 2022",
      location: "Islamabad",
      description: "Delivered customer service and supported client acquisition.",
    },
  ]

  const certifications = [
    {
      title: "Python Programming",
      organization: "UniAthena",
      date: "July 4, 2024",
    },
    {
      title: "HTML & CSS Development",
      organization: "Great Learning Academy",
      date: "",
    },
    {
      title: "Digital Marketing Basics",
      organization: "UniAthena",
      date: "May 7, 2024",
    },
    {
      title: "Graphic Designing Workshop",
      organization: "Deoversity",
      date: "January 14, 2023",
    },
    {
      title: "Advanced Software Engineering",
      organization: "Walmart via Forage",
      date: "August 17, 2024",
    },
    {
      title: "Cybersecurity Simulation",
      organization: "Forage",
      date: "September 28, 2024",
    },
    {
      title: "Shields Up Cybersecurity",
      organization: "Forage",
      date: "October 16, 2024",
    },
    {
      title: "Leadership & Extracurricular",
      organization: "Multiple Organizations",
      date: "2019-2024",
    },
  ]

  const services = [
    {
      title: "Full-Stack Web Development",
      description:
        "Building modern, responsive web applications using React, Node.js, and modern frameworks with clean, maintainable code.",
      icon: "🌐",
    },
    {
      title: "Mobile App Development",
      description:
        "Creating cross-platform mobile applications using React Native with native performance and user experience.",
      icon: "📱",
    },
    {
      title: "Database Design & Management",
      description:
        "Designing efficient database schemas and implementing robust data management solutions using MySQL and Firebase.",
      icon: "🗄️",
    },
    {
      title: "IoT & Smart Systems",
      description:
        "Developing Internet of Things solutions and smart automation systems using ESP8266 and modern sensors.",
      icon: "🔧",
    },
    {
      title: "UI/UX Design",
      description:
        "Creating intuitive user interfaces and experiences using Figma and modern design principles for web and mobile.",
      icon: "🎨",
    },
    {
      title: "System Integration",
      description:
        "Integrating various systems and APIs to create seamless workflows and automated business processes.",
      icon: "⚙️",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2">
              <Card className="glass-card p-8 h-full slide-in-left">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="text-primary" size={20} />
                  <span className="text-muted-foreground">Wah Cantt, Pakistan</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                  About <span className="text-primary">Ahzaz Ahmed</span>
                </h1>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  I'm a passionate Computer Science student at the University of Wah with a strong foundation in
                  full-stack development, mobile applications, and IoT solutions. My journey in technology has been
                  driven by curiosity and a desire to create innovative solutions that make a real impact.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  With hands-on experience in various programming languages and frameworks, I specialize in building
                  modern web applications, mobile apps, and smart systems. I'm always eager to learn new technologies
                  and take on challenging projects that push the boundaries of what's possible.
                </p>
              </Card>
            </div>

            <div className="slide-in-right">
              <Card className="glass-card p-0 h-full overflow-hidden">
                <div className="relative h-full min-h-[400px]">
                  <Image src="/ahzaz-profile.png" alt="Ahzaz Ahmed" fill className="object-cover" />
                </div>
              </Card>
            </div>
          </div>

          {/* Education Section */}
          <Card className="glass-card p-6 mb-12 slide-in-left">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-primary" size={28} />
              <h2 className="text-2xl font-bold text-foreground">Education</h2>
            </div>
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="text-primary" size={16} />
                  <span className="text-sm text-muted-foreground">2021 – 2025</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">BS Computer Science</h3>
                <p className="text-primary font-medium">University of Wah</p>
                <p className="text-muted-foreground">CGPA: 2.7 / 4.00</p>
              </div>
              <div className="border-l-2 border-muted pl-6">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="text-muted-foreground" size={16} />
                  <span className="text-sm text-muted-foreground">2018 – 2020</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">HSSC (Computer Science)</h3>
                <p className="text-muted-foreground">BISE Rawalpindi • Grade B (675/1100)</p>
              </div>
            </div>
          </Card>

          {/* Technology Stack */}
          <Card className="glass-card p-6 mb-12 slide-in-right">
            <h2 className="text-2xl font-bold text-foreground mb-6">Technology Stack</h2>
            <div className="space-y-6">
              {Object.entries(technologies).map(([category, techs]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold text-primary mb-3">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/20 text-primary border-primary/30 hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Experience Section */}
          <Card className="glass-card p-6 mb-12 slide-in-left">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-primary" size={28} />
              <h2 className="text-2xl font-bold text-foreground">Professional Experience</h2>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-primary/30 pl-6 hover:border-primary transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="text-primary" size={16} />
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-2">{exp.location}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Certifications Section */}
          <Card className="glass-card p-6 mb-12 slide-in-right">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-primary animate-bounce-slow" size={28} />
              <h2 className="text-2xl font-bold text-foreground">Certifications & Achievements</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary mb-3">Technical Certifications</h3>
                <div className="space-y-3">
                  {certifications.slice(0, 4).map((cert, index) => (
                    <div
                      key={index}
                      className="glass-card p-4 hover:scale-105 transition-all duration-300 scale-in stagger-1"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <h4 className="font-semibold text-foreground">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {cert.organization} • {cert.date}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary mb-3">Professional Simulations</h3>
                <div className="space-y-3">
                  {certifications.slice(4).map((cert, index) => (
                    <div
                      key={index + 4}
                      className="glass-card p-4 hover:scale-105 transition-all duration-300 scale-in stagger-1"
                      style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                    >
                      <h4 className="font-semibold text-foreground">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {cert.organization} • {cert.date}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Services Section */}
          <Card className="glass-card p-6 mb-12 slide-in-right">
            <h2 className="text-2xl font-bold text-foreground mb-6">Services I Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`glass-card p-6 hover:scale-105 transition-all duration-300 hover:border-primary/50 pulse-glow ${
                    index % 2 === 0 ? "slide-in-left" : "slide-in-right"
                  } stagger-${(index % 6) + 1}`}
                >
                  <div className="text-3xl mb-4 float">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* CV Download Section */}
          <Card className="glass-card p-6 slide-in-left">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-primary animate-pulse" size={28} />
              <h2 className="text-2xl font-bold text-foreground">Download My CV</h2>
            </div>
            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                Get a detailed overview of my education, experience, projects, and achievements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="glass-card px-8 py-4 hover:scale-105 transition-all duration-300 hover:border-primary/50 pulse-glow group">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-foreground">Download CV (PDF)</h3>
                      <p className="text-sm text-muted-foreground">Complete resume with all details</p>
                    </div>
                  </div>
                </button>
                <div className="text-sm text-muted-foreground">
                  <p>
                    📧 Email: <span className="text-primary">zeework2144@gmail.com</span>
                  </p>
                  <p>
                    📱 Phone: <span className="text-primary">+92 332 0960621</span>
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
