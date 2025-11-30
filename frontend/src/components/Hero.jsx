import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from './ui/button';
import ParticleBackground from './ParticleBackground';
import { profile } from '../data/mock';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ParticleBackground />
      
      <motion.div 
        className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Role Badge */}
        <motion.div variants={itemVariants} className="mb-6">
            <span className="px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground backdrop-blur-sm">
                {profile.role} | Python Specialist | RAG Developer
            </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 max-w-4xl">
          Engineering <br className="hidden md:block" />
          <span className="text-muted-foreground">Intelligence</span>
        </motion.h1>

        {/* Typing Tagline */}
        <motion.div variants={itemVariants} className="h-8 mb-8 flex items-center justify-center">
             <p className="text-lg md:text-xl text-muted-foreground font-mono typing-cursor">
                {profile.tagline}
            </p>
        </motion.div>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="h-12 px-8 text-base" asChild>
            <a href="#projects">View My Work</a>
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
            <a href="#contact">Hire Me</a>
          </Button>
        </motion.div>

      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ 
          duration: 1, 
          repeat: Infinity, 
          repeatType: "reverse",
          delay: 2 
        }}
      >
        <ArrowDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
};

export default Hero;
