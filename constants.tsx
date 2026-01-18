import React from 'react';
import { Zap, Captions, Aperture, Waves, Instagram, Youtube, Mail } from 'lucide-react';
import { Project, Service } from './types';

export const CONTACT_EMAIL = "ABDETAHIR468@GMAIL.COM";
export const PHONE_NUMBER = "+251927652240";

/**
 * Site logo URL - using local image added to the repo at root as bg_1.jpg
 */
export const LOGO_URL = "/bg_1.jpg";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Social Media Edit",
    description: "Clean, fast transitions tailored for Reels and Shorts.",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
    category: "Reels / Shorts"
  },
  {
    id: 2,
    title: "Professional Content",
    description: "Polished brand videos for businesses and creators.",
    thumbnail: "https://images.unsplash.com/photo-1492691523567-6239f2990671?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Brand Content"
  },
  {
    id: 3,
    title: "YouTube Narrative",
    description: "Engaging long-form edits with sound and color design.",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=600",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "YouTube"
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Engaging Edits",
    description: "Pacing your footage to keep viewers watching until the end.",
    icon: <Zap className="w-8 h-8 text-indigo-400" />
  },
  {
    id: 2,
    title: "Captions",
    description: "Clear subtitles and animated text that complement the video.",
    icon: <Captions className="w-8 h-8 text-white" />
  },
  {
    id: 3,
    title: "Color Grading",
    description: "Balanced, high-quality color adjustments for a professional look.",
    icon: <Aperture className="w-8 h-8 text-indigo-400" />
  },
  {
    id: 4,
    title: "Sound Design",
    description: "Mixing audio and sound effects to match the visual rhythm.",
    icon: <Waves className="w-8 h-8 text-white" />
  }
];

export const SOCIAL_LINKS = [
  { name: 'Instagram', url: 'https://instagram.com/Abdy.tah', icon: <Instagram size={20} /> },
  { name: 'YouTube', url: 'https://youtube.com/@abdy_tah', icon: <Youtube size={20} /> },
  { name: 'Email', url: `mailto:${CONTACT_EMAIL}`, icon: <Mail size={20} /> }
];