import React from 'react';
import { Smartphone, Zap, Sparkles, Video, Instagram, Youtube, Play, Mail, Phone } from 'lucide-react';
import { Project, Service } from './types';

export const CONTACT_EMAIL = "ABDETAHIR468@GMAIL.COM";
export const PHONE_NUMBER = "+251927652240";

/**
 * INSTRUCTIONS FOR REPLACING THUMBNAILS:
 * 1. Upload your images to an 'images/' folder or use external URLs.
 * 2. Update the 'thumbnail' path below.
 * 3. Update 'videoUrl' to your YouTube/Vimeo links.
 */
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Fast Style Edit",
    description: "Quick cuts and cool transitions for social media videos.",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
    category: "Viral Reels"
  },
  {
    id: 2,
    title: "Clean Brand Look",
    description: "High-quality product video with smooth text and effects.",
    thumbnail: "https://images.unsplash.com/photo-1492691523567-6239f2990671?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Brand TikTok"
  },
  {
    id: 3,
    title: "Story Video",
    description: "Emotional video editing with great sound and colors.",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "YouTube Shorts"
  },
  {
    id: 4,
    title: "Watch More Edit",
    description: "Edited to keep people watching your video for a long time.",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Algorithm King"
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Viral Strategy",
    description: "I edit your videos so they have a better chance of going viral.",
    icon: <Smartphone className="w-8 h-8 text-indigo-400" />
  },
  {
    id: 2,
    title: "Moving Text",
    description: "Cool animated captions that make people want to keep watching.",
    icon: <Zap className="w-8 h-8 text-white" />
  },
  {
    id: 3,
    title: "Pro Colors",
    description: "I make your video look professional with high-end color grading.",
    icon: <Sparkles className="w-8 h-8 text-indigo-400" />
  },
  {
    id: 4,
    title: "Great Sound",
    description: "Professional sound effects and music that fits your video perfectly.",
    icon: <Video className="w-8 h-8 text-white" />
  }
];

export const SOCIAL_LINKS = [
  { name: 'Instagram', url: 'https://instagram.com/Abdy.tah', icon: <Instagram size={20} /> },
  { name: 'TikTok', url: '#', icon: <Play size={20} /> },
  { name: 'YouTube', url: 'https://youtube.com/@abdy_tah', icon: <Youtube size={20} /> },
  { name: 'Email', url: `mailto:${CONTACT_EMAIL}`, icon: <Mail size={20} /> }
];