"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { HeroProps } from "./types";
import { Link } from "react-router-dom";

const Hero = React.forwardRef<HTMLElement, HeroProps>(
  (
    {
      className,
      gradient = true,
      blur = true,
      title,
      subtitle,
      actions,
      customActions,
      titleClassName,
      subtitleClassName,
      actionsClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative z-0 flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-background",
          className,
        )}
        {...props}
      >
        {/* Premium Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-black to-black" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)] opacity-20" />
        
        {/* Animated Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-amber-500/10 blur-[100px]"
          animate={{
            y: [-20, 20, -20],
            x: [-20, 20, -20],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[100px]"
          animate={{
            y: [20, -20, 20],
            x: [20, -20, 20],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          initial={{ y: 100, opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="relative z-50 container flex justify-center flex-1 flex-col px-5 md:px-10 gap-4 translate-y-8"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            {/* Glass Badge */}
            <motion.div 
              className="inline-block rounded-full px-6 py-2 text-sm font-medium bg-black/40 backdrop-blur-xl border border-white/10 text-zinc-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(251, 191, 36, 0.5)",
              }}
            >
              Welcome to the Future
            </motion.div>

            {/* Heading with Premium Gradient */}
            <motion.h1 
              className={cn(
                "text-6xl md:text-7xl font-bold mb-8",
                titleClassName,
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="text-amber-500">Transform</span>
              <span className="bg-gradient-to-r from-white via-white/90 to-zinc-400 bg-clip-text text-transparent"> Your Digital Experience</span>
            </motion.h1>

            {/* Description with Glass Card */}
            <motion.div
              className="relative rounded-2xl bg-black/20 backdrop-blur-xl border border-white/5 p-8 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Glass reflection effect */}
              <div className="absolute -inset-x-2 -inset-y-1 bg-gradient-to-br from-white/5 via-transparent to-transparent transform -rotate-12" />
              
              <p className="text-xl text-zinc-400 relative">
                Experience the next generation of digital solutions with our cutting-edge platform. 
                We combine innovation with expertise to deliver exceptional results.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className={cn("flex flex-wrap justify-center gap-4", actionsClassName)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.button
                className="px-8 py-4 rounded-xl bg-amber-500 text-black font-semibold hover:bg-amber-400 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
              <motion.button
                className="px-8 py-4 rounded-xl bg-black/40 backdrop-blur-xl border border-white/10 text-white font-semibold hover:border-amber-500/50 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(251, 191, 36, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    )
  },
);
Hero.displayName = "Hero";

export { Hero };
