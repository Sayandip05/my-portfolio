import React, { useState } from 'react';
import { projects } from '../data/mock';
import { Button } from './ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Agentic AI', 'NLP', 'RAG Systems'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => {
        if (filter === 'RAG Systems') return p.description.includes('RAG') || p.tech.includes('RAG');
        return p.category === filter;
      });

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">Real-world applications of AI and Machine Learning.</p>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(cat)}
                className="rounded-full transition-all"
              >
                {cat}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group flex flex-col border-border/50 bg-card hover:border-primary/30 transition-all duration-300 h-full hover:shadow-lg hover:shadow-primary/5">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                        <Badge variant="outline" className="mb-2">{project.category}</Badge>
                    </div>
                    <CardTitle className="text-2xl leading-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-6 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.slice(0, 4).map(t => (
                                <span key={t} className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded">
                                    {t}
                                </span>
                            ))}
                            {project.tech.length > 4 && (
                                <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded">+{project.tech.length - 4}</span>
                            )}
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2 pt-4 border-t border-border/50">
                            {project.stats.slice(0,2).map((stat, i) => (
                                <div key={i}>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Key Metric</p>
                                    <p className="font-medium text-sm">{stat}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-4 pb-6 gap-4">
                    <Button variant="outline" size="sm" className="w-full gap-2" asChild>
                        <a href={project.links.github} target="_blank" rel="noreferrer">
                            <Github className="h-4 w-4" /> Code
                        </a>
                    </Button>
                    <Button size="sm" className="w-full gap-2" asChild>
                        <a href={project.links.demo} target="_blank" rel="noreferrer">
                            <ExternalLink className="h-4 w-4" /> Live Demo
                        </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-16 text-center">
            <Button variant="outline" size="lg" className="gap-2" asChild>
                <a href="https://github.com/Sayandip05" target="_blank" rel="noreferrer">
                    Explore More Projects on GitHub <ArrowRight className="h-4 w-4" />
                </a>
            </Button>
        </div>

      </div>
    </section>
  );
};

export default Projects;
