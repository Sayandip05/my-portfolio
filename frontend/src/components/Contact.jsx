import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Copy, Check } from 'lucide-react';
import { profile } from '../data/mock';
import { toast } from '../hooks/use-toast'; 
import { Toaster } from './ui/toaster';
import { motion } from 'framer-motion';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().optional(),
  message: z.string().min(20, { message: "Message must be at least 20 characters." }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values) => {
    setIsSubmitting(true);
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
    setIsSubmitting(false);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    toast({ description: "Email copied to clipboard" });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Let&apos;s Work Together</h2>
              <p className="text-muted-foreground text-lg">
                Have a project in mind or want to discuss the latest in AI? I&apos;m always open to new opportunities and collaborations.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">{profile.email}</p>
                  </div>
                  <Button variant="ghost" size="icon" onClick={copyEmail}>
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </CardContent>
              </Card>
              
              <div className="flex gap-4">
                <Button variant="outline" size="lg" className="flex-1 gap-2" asChild>
                  <a href={profile.social.github} target="_blank" rel="noreferrer">
                    <Github className="h-5 w-5" /> GitHub
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="flex-1 gap-2" asChild>
                  <a href={profile.social.linkedin} target="_blank" rel="noreferrer">
                    <Linkedin className="h-5 w-5" /> LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="flex-1 gap-2" asChild>
                  <a href={profile.social.twitter} target="_blank" rel="noreferrer">
                    <Twitter className="h-5 w-5" /> Twitter/X
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-card border border-border/50 rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input 
                  placeholder="Your Name" 
                  {...form.register("name")} 
                  className={form.formState.errors.name ? "border-destructive" : ""}
                />
                {form.formState.errors.name && (
                  <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input 
                  placeholder="john@example.com" 
                  {...form.register("email")} 
                  className={form.formState.errors.email ? "border-destructive" : ""}
                />
                 {form.formState.errors.email && (
                  <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Subject (Optional)</label>
                <Input placeholder="Project Inquiry" {...form.register("subject")} />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea 
                  placeholder="Tell me about your project..." 
                  className={`min-h-[150px] ${form.formState.errors.message ? "border-destructive" : ""}`}
                  {...form.register("message")}
                />
                 {form.formState.errors.message && (
                  <p className="text-xs text-destructive">{form.formState.errors.message.message}</p>
                )}
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Contact;
