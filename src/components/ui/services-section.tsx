"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from "@/lib/utils"

// Framer-style icons from Framer URLs
const FramerIcons = {
  organize: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 5.2h16M4 12h16M4 18.8h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  code: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 6L2.5 12 8 18M16 6l5.5 6-5.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  lightning: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  // New Framer-style blockchain icons
  blockchain: {
    nodes: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3L4 7v10l8 4 8-4V7l-8-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 7l8 4 8-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 11v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    connect: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 8h8M8 12h8M8 16h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    cube: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l8 4v12l-8 4-8-4V6l8-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 22V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    network: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 3v6M12 15v6M3 12h6M15 12h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  // New Framer-style automation icons
  automation: {
    brain: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.5 14c-1.5 0-2.5-1.2-2.5-2.5 0-1.5 1-2.5 2.5-2.5M15.5 14c1.5 0 2.5-1.2 2.5-2.5 0-1.5-1-2.5-2.5-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 4c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 12v-4m0 4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    process: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2v4m0 12v4m-7.07-5.93l2.83-2.83m8.48 0l2.83 2.83M2 12h4m12 0h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    response: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    optimize: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2v4m0 12v4m-7.07-5.93l2.83-2.83m8.48 0l2.83 2.83M2 12h4m12 0h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  }
}

const codeLines = [
  { text: 'class ChatBot {', color: 'text-amber-500' },
  { text: '  address public owner;', color: 'text-blue-400' },
  { text: '  int private response;', color: 'text-blue-400' },
  { text: '  constructor() {', color: 'text-green-400' },
  { text: '    owner = msg.sender;', color: 'text-zinc-400' },
  { text: '  }', color: 'text-green-400' },
  { text: '  function response(msg) {', color: 'text-orange-400' },
  { text: '    require(msg.sender == owner);', color: 'text-purple-400' },
  { text: '    // Process response', color: 'text-zinc-500' },
  { text: '  }', color: 'text-orange-400' },
  { text: '}', color: 'text-amber-500' },
]

const automationSteps = [
  {
    title: "Trigger",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },
  {
    title: "Prompts",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
        />
      </svg>
    ),
  },
  {
    title: "Send Email",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
];

// Service data with code snippets
const services = [
  {
    id: 1,
    title: "Plan & Organize",
    description: "We enhance efficiency by integrating apps and reducing downtime.",
    icon: FramerIcons.organize,
    content: (
      <div className="relative w-full aspect-video bg-black/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/5">
        <div 
          className="absolute inset-0"
          ref={(el) => {
            if (el && !el.querySelector('video')) {
              // Create container for video with overlay
              const container = document.createElement('div');
              container.className = 'relative w-full h-full';
              
              // Create overlay with theme colors
              const overlay = document.createElement('div');
              overlay.className = 'absolute inset-0 z-10 mix-blend-overlay bg-gradient-to-br from-amber-500/30 via-transparent to-purple-500/30';
              
              const video = document.createElement('video');
              video.autoplay = true;
              video.muted = true;
              video.loop = true;
              video.playsInline = true;
              video.controls = false;
              video.className = 'w-full h-full object-cover brightness-110 contrast-110 hue-rotate-15 saturate-150';
              
              // Add your video source
              const source = document.createElement('source');
              source.src = '/blockchain.mp4'; // Video in public folder
              source.type = 'video/mp4';
              
              video.appendChild(source);
              container.appendChild(video);
              container.appendChild(overlay);
              el.appendChild(container);
              
              // Start playing the video
              video.play().catch(e => console.error('Video play error:', e));
            }
          }}
        />
        <div className="text-center absolute bottom-4 left-0 right-0 z-10">
          <p className="text-sm text-white/70"></p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Custom Projects",
    description: "We created a versatile chatbot that understands diverse questions.",
    icon: FramerIcons.code,
    content: (
      <div className="w-full aspect-video bg-black/40 backdrop-blur-xl rounded-2xl p-6 font-mono text-sm overflow-hidden border border-white/5">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-1.5"
        >
          {codeLines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.15,
              }}
              className={cn("font-mono", line.color)}
            >
              {line.text}
              {index === codeLines.length - 1 && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-amber-500 ml-1"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Smart Automation",
    description: "We analyze operations and suggest AI solutions to boost efficiency.",
    icon: FramerIcons.lightning,
    content: (
      <div className="w-full aspect-video bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/5">
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-3">
            {automationSteps.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 hover:border-amber-500/50 transition-all duration-300"
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "rgba(0,0,0,0.5)"
                }}
              >
                <span className="p-2 rounded-lg bg-amber-500/10">
                  <motion.span 
                    className="text-amber-500 block"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.span>
                </span>
                <span className="text-white/90">{item.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
]

const technologies = [
  { 
    id: 1, 
    name: "AI-Driven Solutions", 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.5 14c-1.5 0-2.5-1.2-2.5-2.5 0-1.5 1-2.5 2.5-2.5M15.5 14c1.5 0 2.5-1.2 2.5-2.5 0-1.5-1-2.5-2.5-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 4c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8z" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    )
  },
  { 
    id: 2, 
    name: "Serverless Computing", 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 5.2h16M4 12h16M4 18.8h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  { 
    id: 3, 
    name: "Cloud Integration", 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 8h8M8 12h8M8 16h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  { 
    id: 4, 
    name: "Data Insight", 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2v4m0 12v4m-7.07-5.93l2.83-2.83m8.48 0l2.83 2.83M2 12h4m12 0h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  { 
    id: 5, 
    name: "Analytics", 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  { 
    id: 6, 
    name: "API Security", 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3L4 7v10l8 4 8-4V7l-8-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 7l8 4 8-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 11v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  { 
    id: 7, 
    name: "Real-Time", 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 6L2.5 12 8 18M16 6l5.5 6-5.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    id: 8, 
    name: "Ad Targeting", 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2v4m0 12v4m-7.07-5.93l2.83-2.83m8.48 0l2.83 2.83M2 12h4m12 0h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
]

const ServiceCard = ({ title, description, icon, content, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative overflow-hidden rounded-3xl bg-black/20 backdrop-blur-xl border border-white/5"
      whileHover={{ scale: 1.02 }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 0%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Glass reflection effect */}
      <div className="absolute -inset-x-2 -inset-y-1 bg-gradient-to-br from-white/5 via-transparent to-transparent transform -rotate-12 group-hover:rotate-6 transition-transform duration-700" />

      <div className="relative p-8">
        <motion.h3 
          className="text-2xl font-medium mb-6 text-center bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {title}
        </motion.h3>
        <div className="mt-4 relative">
          {/* Content glow effect */}
          <div className="absolute -inset-4 bg-amber-500/5 blur-2xl rounded-full" />
          <div className="relative">
            {content}
          </div>
        </div>
        <p className="text-zinc-400 text-base text-center mt-6">{description}</p>
      </div>
    </motion.div>
  )
}

const TechBadge = ({ name, icon, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 0 20px rgba(251, 191, 36, 0.2)"
      }}
      className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-black/30 backdrop-blur-xl border border-white/10 hover:border-amber-500/50 transition-colors duration-300"
    >
      <motion.span 
        className="text-amber-500"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.span>
      <span className="text-sm text-white/90 font-medium">{name}</span>
    </motion.div>
  )
}

export function ServicesSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-black to-black" />
      
      {/* Animated particles background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)] opacity-20" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl"
        animate={{
          y: [-20, 20, -20],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
        animate={{
          y: [20, -20, 20],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-block rounded-full px-4 py-1.5 text-sm font-medium bg-black/40 backdrop-blur-xl border border-white/10 text-zinc-400 mb-6"
            whileHover={{
              scale: 1.05,
              borderColor: "rgba(251, 191, 36, 0.5)",
            }}
          >
            Our Services
          </motion.div>
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-amber-500">Expertise</span>
            <span className="text-white"> That Drives Quality</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            With deep expertise, we deliver quality solutions that drive success and exceed industry standards consistently.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={service.id} {...service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {technologies.map((tech, index) => (
            <TechBadge key={tech.id} {...tech} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
} 