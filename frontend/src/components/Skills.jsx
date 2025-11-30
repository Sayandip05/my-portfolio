import React from 'react';
import { skills } from '../data/mock';
import { Badge } from './ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Brain, Code2, Cloud, Database } from 'lucide-react';

const iconMap = {
  "AI/ML & Specialized": Brain,
  "Programming": Code2,
  "Cloud & DevOps": Cloud,
  "Databases & Tools": Database
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Technical Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent, scalable systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items]) => {
            const Icon = iconMap[category] || Code2;
            return (
              <Card key={category} className="bg-card border-border/50 hover:border-primary/30 transition-all hover:-translate-y-1 duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                         <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-xl">{category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="px-3 py-1 text-sm font-normal bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
