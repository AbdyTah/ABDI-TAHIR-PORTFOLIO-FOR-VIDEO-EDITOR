
import React from 'react';
import { Video, Sparkles, Zap, Smartphone, Play, Instagram, Youtube, Mail } from 'lucide-react';
import { Project, Service } from './types';

// INSTRUCTIONS:
// 1. To change project thumbnails: Update the 'thumbnail' URL to your image path or external link.
// 2. To change video links: Update the 'videoUrl' to your YouTube/Vimeo/Direct link.
// 3. To change categories: Update the 'category' string (e.g., 'Reels', 'TikTok', 'Motivational').

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "High-Energy Reels Edit",
    description: "Dynamic transitions and sound design for a lifestyle influencer.",
    thumbnail: "https://picsum.photos/id/101/600/800",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Placeholder
    category: "Reels"
  },
  {
    id: 2,
    title: "Motivational Storytelling",
    description: "Cinematic color grading and emotional pacing for short-form narratives.",
    thumbnail: "https://picsum.photos/id/102/600/800",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Placeholder
    category: "Motivational"
  },
  {
    id: 3,
    title: "Product Promo Clip",
    description: "Sleek, professional product showcase for a tech brand's TikTok.",
    thumbnail: "https://picsum.photos/id/103/600/800",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Placeholder
    category: "Promotional"
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Short-Form Specialist",
    description: "Optimized editing for Reels, Shorts, and TikTok with high retention hooks.",
    icon: <Smartphone className="w-8 h-8 text-blue-400" />
  },
  {
    id: 2,
    title: "Cinematic Grading",
    description: "Professional color correction to give your footage a premium look and feel.",
    icon: <Sparkles className="w-8 h-8 text-purple-400" />
  },
  {
    id: 3,
    title: "Dynamic Motion Graphics",
    description: "Subtitles, transitions, and elements that keep viewers glued to the screen.",
    icon: <Zap className="w-8 h-8 text-yellow-400" />
  },
  {
    id: 4,
    title: "Sound Design",
    description: "Immersive audio layering and beat-syncing to enhance the viewer's experience.",
    icon: <Video className="w-8 h-8 text-pink-400" />
  }
];

export const SOCIAL_LINKS = [
  { name: 'Instagram', url: '#', icon: <Instagram size={20} /> },
  { name: 'YouTube', url: '#', icon: <Youtube size={20} /> },
  { name: 'TikTok', url: '#', icon: <Play size={20} /> }, // Using Play as TikTok placeholder icon
  { name: 'Email', url: 'mailto:ABDETAHIR468@GMAIL.COM', icon: <Mail size={20} /> }
];

export const CONTACT_EMAIL = "ABDETAHIR468@GMAIL.COM";
