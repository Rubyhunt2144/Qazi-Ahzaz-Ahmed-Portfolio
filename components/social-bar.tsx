"use client"

import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react"

const ThreadsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.18v-.359c0-3.407.85-6.261 2.495-8.312C5.845 1.205 8.598.024 12.179 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-.542-1.864-1.404-3.176-2.563-3.909-1.16-.733-2.751-1.098-4.732-1.086-2.775.018-4.851.946-6.17 2.757C5.775 7.708 5.1 10.054 5.1 12.18v.359c0 2.125.675 4.471 2.019 6.283 1.319 1.811 3.395 2.739 6.17 2.757 1.981.012 3.572-.353 4.732-1.086 1.159-.733 2.021-2.045 2.563-3.909l2.04.569c-.651 2.337-1.832 4.177-3.509 5.467-1.783 1.373-4.08 2.078-6.826 2.098z" />
    <path d="M12.5 15.8c-2.363 0-4.3-1.937-4.3-4.3s1.937-4.3 4.3-4.3 4.3 1.937 4.3 4.3-1.937 4.3-4.3 4.3zm0-6.968c-1.471 0-2.668 1.197-2.668 2.668s1.197 2.668 2.668 2.668 2.668-1.197 2.668-2.668-1.197-2.668-2.668-2.668z" />
  </svg>
)

export function SocialBar() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Rubyhunt2144", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ahzaz-ahmed-4806b0253", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/AhmedAhzaz18888?t=pMdyiUn_sps0I92tAs_0Vw&s=08", label: "Twitter" },
    { icon: ThreadsIcon, href: "https://www.threads.com/@ahzaz.ahmed.585", label: "Threads" },
    { icon: Mail, href: "mailto:zeework2144@gmail.com", label: "Email" },
    { icon: Instagram, href: "https://www.instagram.com/ahzaz.ahmed.585?igsh=cHFrcjZ1ZHdoZ21x", label: "Instagram" },
  ]

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex justify-center py-2 bg-primary rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 glass-card pulse-glow">
        <div className="grid grid-cols-6 w-3/4 sm:w-1/2 gap-2 hover:w-5/12 hover:gap-1 transition-all duration-300">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center p-2 sm:p-4 rounded-lg text-primary-foreground transition-all duration-300 hover:text-background hover:bg-primary-foreground/10 hover:rounded-full hover:scale-110 bounce-in stagger-${index + 1}`}
              aria-label={social.label}
            >
              <social.icon className="text-lg sm:text-2xl" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
