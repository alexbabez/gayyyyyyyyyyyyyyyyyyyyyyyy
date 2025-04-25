"use client"

import React, { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  bgClassName?: string
}

export function TiltCard({ children, className = "", bgClassName = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  // Motion values for x and y rotation
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  // Add spring physics for smoother animation
  const xSpring = useSpring(x, { stiffness: 150, damping: 15 })
  const ySpring = useSpring(y, { stiffness: 150, damping: 15 })
  
  // Transform motion values to rotation values
  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["12deg", "-12deg"])
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-12deg", "12deg"])
  
  // Perspective changes to give depth
  const perspective = 1000
  
  // Handle mouse move event
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    
    // Calculate normalized positions from -0.5 to 0.5
    const normalizedX = (e.clientX - rect.left) / rect.width - 0.5
    const normalizedY = (e.clientY - rect.top) / rect.height - 0.5
    
    x.set(normalizedX)
    y.set(normalizedY)
  }
  
  // Reset rotations when mouse leaves
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }
  
  return (
    <div 
      ref={ref}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          transformPerspective: `${perspective}px`,
        }}
        className="w-full h-full"
      >
        {/* Background with glow effect */}
        <div 
          className={`absolute inset-0 rounded-[inherit] bg-gradient-to-br from-amber-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 ${bgClassName}`}
        />
        
        {/* Content */}
        <div className="relative" style={{ transform: "translateZ(50px)" }}>
          {children}
        </div>
      </motion.div>
    </div>
  )
} 