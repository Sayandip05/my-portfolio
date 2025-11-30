import React from 'react';
import { profile } from '../data/mock';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-background text-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4">
          <div className="text-2xl font-bold tracking-tighter">
            SB<span className="text-primary">.</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind.
          </div>
          <div className="flex gap-6 mt-2">
             <a href="#about" className="text-xs text-muted-foreground hover:text-foreground transition-colors">About</a>
             <a href="#skills" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Skills</a>
             <a href="#projects" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Projects</a>
             <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Back to Top</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
