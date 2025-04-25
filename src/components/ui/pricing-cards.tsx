"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useState } from "react";
import { ContactDialog } from "./contact-dialog";
import { TiltCard } from "./tilt-card"
import { AnimatedText } from "./animated-text"
import { Magnetic } from "./magnetic"

export interface PricingFeature {
    name: string;
    highlight?: boolean;
    included: boolean;
}

export interface PricingTier {
    name: string;
    price: number;
    interval?: string;
    description: string;
    features: PricingFeature[];
    highlight?: boolean;
    customClass?: string;
    cta?: {
        text: string;
        href?: string;
        onClick?: () => void;
    };
}

export interface PricingCardsProps extends React.HTMLAttributes<HTMLDivElement> {
    tiers: PricingTier[];
    containerClassName?: string;
    cardClassName?: string;
    sectionClassName?: string;
}

export function PricingCards() {
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Single rounded background container */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="rounded-[5rem] bg-black/20 backdrop-blur-sm border border-white/10 p-12 overflow-hidden">
                    <div className="text-center mb-16">
                        <motion.div 
                            className="inline-block rounded-full px-4 py-1.5 text-sm font-medium bg-black/40 backdrop-blur-xl border border-white/10 text-zinc-400 mb-6"
                            whileHover={{
                                scale: 1.05,
                                borderColor: "rgba(251, 191, 36, 0.5)",
                            }}
                        >
                            Pricing Plans
                        </motion.div>
                        
                        <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                            Select the perfect plan for your needs. All plans include our core features.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Starter",
                                price: "49",
                                description: "Perfect for small projects",
                                features: ["5 Projects", "Basic Analytics", "24/7 Support", "API Access"]
                            },
                            {
                                name: "Pro",
                                price: "99",
                                description: "Best for growing businesses",
                                features: ["Unlimited Projects", "Advanced Analytics", "Priority Support", "Custom Integration"]
                            },
                            {
                                name: "Enterprise",
                                price: "199",
                                description: "For large scale operations",
                                features: ["Custom Solutions", "Dedicated Support", "SLA Agreement", "White Label Option"]
                            }
                        ].map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="relative group"
                            >
                                <TiltCard className="h-full">
                                    <div className="relative h-full rounded-[1.5rem] bg-black/20 backdrop-blur-xl border border-white/5 p-8 overflow-hidden">
                                        {/* Glass reflection effect */}
                                        <div className="absolute -inset-x-2 -inset-y-1 bg-gradient-to-br from-white/5 via-transparent to-transparent transform -rotate-12 group-hover:rotate-6 transition-transform duration-700" />
                                        
                                        {/* Content */}
                                        <div className="relative">
                                            <h3 className="text-2xl font-semibold text-white mb-4">{plan.name}</h3>
                                            <div className="flex items-baseline mb-6">
                                                <span className="text-5xl font-bold text-amber-500">${plan.price}</span>
                                                <span className="text-zinc-400 ml-2">/month</span>
                                            </div>
                                            <p className="text-zinc-400 mb-8">{plan.description}</p>
                                            
                                            <ul className="space-y-4 mb-8">
                                                {plan.features.map((feature, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex items-center text-zinc-300"
                                                    >
                                                        <svg className="w-5 h-5 text-amber-500 mr-3" fill="none" viewBox="0 0 24 24">
                                                            <path
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M5 13l4 4L19 7"
                                                            />
                                                        </svg>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>

                                            <Magnetic>
                                                <motion.button
                                                    className="w-full py-4 rounded-xl bg-black/40 backdrop-blur-xl border border-white/10 text-white font-semibold hover:border-amber-500/50 transition-all duration-300"
                                                    whileHover={{ 
                                                        boxShadow: "0 0 20px rgba(251, 191, 36, 0.2)"
                                                    }}
                                                    whileTap={{ scale: 0.98 }}
                                                    onClick={() => setDialogOpen(true)}
                                                >
                                                    Contact Sales
                                                </motion.button>
                                            </Magnetic>
                                        </div>
                                    </div>
                                </TiltCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <ContactDialog open={dialogOpen} onOpenChange={setDialogOpen} />
        </section>
    );
} 