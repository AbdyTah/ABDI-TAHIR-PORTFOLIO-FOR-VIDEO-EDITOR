import React from 'react';
import { Zap, Captions, Aperture, Waves, Instagram, Youtube, Play, Mail } from 'lucide-react';
import { Project, Service } from './types';

export const CONTACT_EMAIL = "ABDETAHIR468@GMAIL.COM";
export const PHONE_NUMBER = "+251927652240";

// Constructed direct link for the Google Drive logo
export const LOGO_URL = "https://drive.google.com/uc?export=view&id=13CwP5Fk09hcY_VJjY4qL5AriPyJ571Hs";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Fast Style Edit – Reels / Shorts",
    description: "Quick cuts and smooth transitions that make your social media videos pop.",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
    category: "Reels / Shorts"
  },
  {
    id: 2,
    title: "Professional Look – TikTok / Brand Videos",
    description: "Polished product and brand videos with clean text, effects, and colors.",
    thumbnail: "https://images.unsplash.com/photo-1492691523567-6239f2990671?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "TikTok / Brand"
  },
  {
    id: 3,
    title: "Story Video – YouTube Shorts",
    description: "Emotional edits with color and sound that connect with your audience.",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "YouTube Shorts"
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Engagement Edge",
    description: "I edit your videos to help them perform better on social media and keep viewers watching.",
    icon: <Zap className="w-8 h-8 text-indigo-400" />
  },
  {
    id: 2,
    title: "Caption Effects",
    description: "Cool animated captions and text that grab attention and make your videos more engaging.",
    icon: <Captions className="w-8 h-8 text-white" />
  },
  {
    id: 3,
    title: "Visual Tone",
    description: "Professional color grading to give your videos a polished, cinematic look.",
    icon: <Aperture className="w-8 h-8 text-indigo-400" />
  },
  {
    id: 4,
    title: "Audio Design",
    description: "Music and sound effects carefully selected and edited to match your video perfectly.",
    icon: <Waves className="w-8 h-8 text-white" />
  }
];

export const SOCIAL_LINKS = [
  { name: 'Instagram', url: 'https://instagram.com/Abdy.tah', icon: <Instagram size={20} /> },
  { name: 'TikTok', url: '#', icon: <Play size={20} /> },
  { name: 'YouTube', url: 'https://youtube.com/@abdy_tah', icon: <Youtube size={20} /> },
  { name: 'Email', url: `mailto:${CONTACT_EMAIL}`, icon: <Mail size={20} /> }
];