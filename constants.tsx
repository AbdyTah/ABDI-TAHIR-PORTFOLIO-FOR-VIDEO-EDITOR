import React from 'react';
import { Smartphone, Zap, Sparkles, Video, Instagram, Youtube, Play, Mail } from 'lucide-react';
import { Project, Service } from './types';

export const CONTACT_EMAIL = "ABDETAHIR468@GMAIL.COM";

/**
 * INSTRUCTIONS FOR REPLACING THUMBNAILS:
 * 1. Upload your images to an 'images/' folder or use external URLs.
 * 2. Update the 'thumbnail' path below.
 * 3. Update 'videoUrl' to your YouTube/Vimeo links.
 */
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "The Velocity Edit",
    description: "Aggressive pacing and bespoke transitions for high-impact lifestyle content.",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
    category: "Viral Reels"
  },
  {
    id: 2,
    title: "Bespoke Aesthetics",
    description: "Premium product showcase utilizing dynamic masking and custom 3D typography.",
    thumbnail: "https://images.unsplash.com/photo-1492691523567-6239f2990671?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Brand TikTok"
  },
  {
    id: 3,
    title: "Narrative Short",
    description: "Emotionally charged storytelling with advanced soundscapes and color grading.",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "YouTube Shorts"
  },
  {
    id: 4,
    title: "Retention Master",
    description: "Complex fast-cuts designed to maximize algorithmic watch-time averages.",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Algorithm King"
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Retention Analysis",
    description: "Strategic editing based on retention data to ensure viewers stay until the end card.",
    icon: <Smartphone className="w-8 h-8 text-indigo-400" />
  },
  {
    id: 2,
    title: "Kinetic Typography",
    description: "Custom-animated captions that serve as visual hooks, not just subtitles.",
    icon: <Zap className="w-8 h-8 text-white" />
  },
  {
    id: 3,
    title: "Creative Grading",
    description: "Sophisticated color palettes tailored to the brand identity of each creator.",
    icon: <Sparkles className="w-8 h-8 text-indigo-400" />
  },
  {
    id: 4,
    title: "Audio Engineering",
    description: "Layered SFX and precision EQ to create an immersive, professional soundstage.",
    icon: <Video className="w-8 h-8 text-white" />
  }
];

export const SOCIAL_LINKS = [
  { name: 'Instagram', url: '#', icon: <Instagram size={20} /> },
  { name: 'TikTok', url: '#', icon: <Play size={20} /> },
  { name: 'YouTube', url: '#', icon: <Youtube size={20} /> },
  { name: 'Email', url: `mailto:${CONTACT_EMAIL}`, icon: <Mail size={20} /> }
];