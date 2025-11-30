import React from 'react';
import { profile } from '../data/mock';
import { Card, CardContent } from './ui/card';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Bio */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              About Me
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                AI Engineer with hands-on experience in building production-ready <span className="text-foreground font-medium">agentic AI systems</span> and <span className="text-foreground font-medium">RAG pipelines</span>. 
              </p>
              <p>
                Proven track record of delivering scalable solutions that reduce operational costs by <span className="text-foreground font-medium">60-80%</span> and improve system accuracy to <span className="text-foreground font-medium">90%+</span> through internships and real-world projects.
              </p>
              <p>
                 Specialized in multi-agent architectures, NLP, and LLM integration with expertise in Python, LangChain, and AWS deployment. Currently pursuing B.Tech in Computer Science at Brainware University.
              </p>
            </div>

             <div className="pt-4">
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Professional Highlights</h3>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Built 3 production-grade AI systems with measurable business impact</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Specialized in Agentic AI, RAG Pipelines & NLP solutions</span>
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Fast learner with strong problem-solving and system design skills</span>
                    </li>
                </ul>
             </div>
          </div>

          {/* Right: Stats/Visuals */}
          <div className="grid grid-cols-2 gap-4">
            {profile.highlights.map((item, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-colors">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full min-h-[160px]">
                  <span className="text-4xl font-bold text-foreground mb-2">{item.value}</span>
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
