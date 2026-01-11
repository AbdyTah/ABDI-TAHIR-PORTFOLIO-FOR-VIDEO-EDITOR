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
    title: "Viral Lifestyle Reel",
    description: "High-energy edit with beat-syncing and motion graphics for a fitness creator.",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
    category: "Reels"
  },
  {
    id: 2,
    title: "Product Showcase TikTok",
    description: "Sleek, cinematic product reveal for a premium tech brand with sound design.",
    thumbnail: "https://images.unsplash.com/photo-1492691523567-6239f2990671?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "TikTok"
  },
  {
    id: 3,
    title: "Motivational Short",
    description: "Story-driven edit featuring impactful subtitles and cinematic grading.",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Shorts"
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Short-Form Specialist",
    description: "Optimized pacing for Reels, Shorts, and TikTok to keep retention above 80%.",
    icon: <Smartphone className="w-8 h-8 text-blue-400" />
  },
  {
    id: 2,
    title: "Dynamic Subtitles",
    description: "High-impact captions that make your content accessible and engaging on silent scroll.",
    icon: <Zap className="w-8 h-8 text-yellow-400" />
  },
  {
    id: 3,
    title: "Cinematic Grading",
    description: "Premium color correction to give your smartphone footage a high-end camera look.",
    icon: <Sparkles className="w-8 h-8 text-purple-400" />
  },
  {
    id: 4,
    title: "Viral Sound Design",
    description: "Strategic SFX and music choices to trigger dopamine responses in viewers.",
    icon: <Video className="w-8 h-8 text-pink-400" />
  }
];

export const SOCIAL_LINKS = [
  { name: 'Instagram', url: '#', icon: <Instagram size={20} /> },
  { name: 'TikTok', url: '#', icon: <Play size={20} /> },
  { name: 'YouTube', url: '#', icon: <Youtube size={20} /> },
  { name: 'Email', url: `mailto:${CONTACT_EMAIL}`, icon: <Mail size={20} /> }
];