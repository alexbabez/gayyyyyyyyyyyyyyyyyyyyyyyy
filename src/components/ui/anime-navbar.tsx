"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { TwitterButton } from "@/components/ui/twitter-button"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  defaultActive?: string
}

export function AnimeNavBar({ items, className, defaultActive = "Home" }: NavBarProps) {
  const [mounted, setMounted] = useState(false)
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<string>(defaultActive)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    // Add scroll event listener to update active tab based on scroll position
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      
      if (sections.length === 0) {
        return;
      }
      
      const scrollPosition = window.scrollY + 100;
      
      let currentSection = defaultActive;
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          const id = section.getAttribute('id');
          if (id) {
            const matchingItem = items.find(item => item.url === `#${id}`);
            if (matchingItem) {
              currentSection = matchingItem.name;
            }
          }
        }
      });
      
      setActiveTab(currentSection);
    };
    
    const hasHashItems = items.some(item => item.url.startsWith('#'));
    
    if (hasHashItems) {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [defaultActive, items]);

  if (!mounted) return null

  return (
    <>
      {/* Logo in absolute position at top left */}
      <div className="fixed top-2 left-4 z-[10000]">
        <motion.a 
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img 
            src="/logo.png" 
            alt="Trinexscan" 
            className="h-24 md:h-28"
          />
        </motion.a>
      </div>

      {/* Navigation bar */}
      <div className="fixed top-0 left-0 right-0 z-[9999] py-4">
        <div className="container mx-auto flex justify-center items-center relative">
          {/* Twitter button at top right with glass effect */}
          <motion.div 
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
            whileHover={{ scale: 1.05 }}
          >
            <TwitterButton href="https://twitter.com/TrinexScan" />
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-3 bg-black/50 border border-white/10 backdrop-blur-xl py-2 px-2 rounded-full shadow-lg relative"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            {items.map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.name
              const isHovered = hoveredTab === item.name

              return (
                <a
                  key={item.name}
                  href={item.url}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(item.name);
                    
                    if (item.url.startsWith('#')) {
                      const targetId = item.url.replace("#", "");
                      const targetElement = document.getElementById(targetId);
                      
                      if (targetElement) {
                        window.scrollTo({
                          top: targetElement.offsetTop - 80,
                          behavior: "smooth"
                        });
                      }
                    } else {
                      window.location.href = item.url;
                    }
                  }}
                  onMouseEnter={() => setHoveredTab(item.name)}
                  onMouseLeave={() => setHoveredTab(null)}
                  className={cn(
                    "relative cursor-pointer text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300",
                    "text-white/70 hover:text-white",
                    isActive && "text-white"
                  )}
                >
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-full -z-10 overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: [0.3, 0.5, 0.3],
                        scale: [1, 1.03, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="absolute inset-0 bg-amber-500/25 rounded-full blur-md" />
                      <div className="absolute inset-[-4px] bg-amber-500/20 rounded-full blur-xl" />
                      <div className="absolute inset-[-8px] bg-amber-500/15 rounded-full blur-2xl" />
                      <div className="absolute inset-[-12px] bg-amber-500/5 rounded-full blur-3xl" />
                      
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0"
                        style={{
                          animation: "shine 3s ease-in-out infinite"
                        }}
                      />
                    </motion.div>
                  )}

                  <motion.span
                    className="hidden md:inline relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.span>
                  <motion.span 
                    className="md:hidden relative z-10"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={18} strokeWidth={2.5} />
                  </motion.span>
            
                  <AnimatePresence>
                    {isHovered && !isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute inset-0 bg-white/10 rounded-full -z-10"
                      />
                    )}
                  </AnimatePresence>
                </a>
              )
            })}
          </motion.div>
        </div>
      </div>
    </>
  )
} 