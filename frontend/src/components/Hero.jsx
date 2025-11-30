import React from 'react';
import { ArrowDown, ChevronRight, Download } from 'lucide-react';
import { Button } from './ui/button';
import ParticleBackground from './ParticleBackground';
import { profile } from '../data/mock';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ParticleBackground />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Role Badge */}
        <div className="mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
            <span className="px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground backdrop-blur-sm">
                {profile.role} | Python Specialist | RAG Developer
            </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 max-w-4xl animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
          Engineering <br className="hidden md:block" />
          <span className="text-muted-foreground">Intelligence</span>
        </h1>

        {/* Typing Tagline */}
        <div className="h-8 mb-8 flex items-center justify-center animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
             <p className="text-lg md:text-xl text-muted-foreground font-mono typing-cursor">
                {profile.tagline}
            </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0" style={{ animationDelay: '0.7s' }}>
          <Button size="lg" className="h-12 px-8 text-base" asChild>
            <a href="#projects">View My Work</a>
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
            <a href="#contact">Hire Me</a>
          </Button>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <ArrowDown className="h-6 w-6" />
      </div>
    </section>
  );
};

export default Hero;
