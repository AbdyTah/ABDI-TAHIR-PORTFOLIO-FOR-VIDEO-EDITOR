import React from 'react';
import { Smartphone, Sparkles, Zap, Video, Instagram, Youtube, Play, Mail, CheckCircle2 } from 'lucide-react';
import { Project, Service } from './types';

/**
 * CONTACT CONFIGURATION
 */
export const CONTACT_EMAIL = "ABDETAHIR468@GMAIL.COM";

/**
 * PROJECT DATA
 * Replace the thumbnails and video links here.
 */
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Cinematic Reel Edit",
    description: "High-energy lifestyle edit with beat-synced transitions and custom sound design.",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Link to your video
    category: "Instagram Reels"
  },
  {
    id: 2,
    title: "Motivational TikTok",
    description: "Story-driven edit focusing on emotional impact and cinematic color grading.",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Link to your video
    category: "TikTok"
  },
  {
    id: 3,
    title: "Brand Promotional Clip",
    description: "Sleek, product-focused edit designed for maximum brand engagement.",
    thumbnail: "https://images.unsplash.com/photo-1492691523567-6239f2990671?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Link to your video
    category: "Shorts"
  }
];

/**
 * SERVICES DATA
 */
export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Short-Form Content",
    description: "Optimized editing for high-retention on platforms like TikTok, Reels, and YouTube Shorts.",
    icon: <Smartphone className="w-8 h-8 text-blue-400" />
  },
  {
    id: 2,
    title: "Cinematic Grading",
    description: "Professional color correction to give your footage a premium, consistent cinematic look.",
    icon: <Sparkles className="w-8 h-8 text-purple-400" />
  },
  {
    id: 3,
    title: "Dynamic Subtitles",
    description: "Engaging, animated captions that keep viewers locked into your story from start to finish.",
    icon: <Zap className="w-8 h-8 text-yellow-400" />
  },
  {
    id: 4,
    title: "Post-Production",
    description: "Comprehensive sound design, visual effects, and pacing optimization for viral growth.",
    icon: <Video className="w-8 h-8 text-pink-400" />
  }
];

/**
 * SOCIAL LINKS
 */
export const SOCIAL_LINKS = [
  { name: 'Instagram', url: 'https://instagram.com/', icon: <Instagram size={20} /> },
  { name: 'TikTok', url: 'https://tiktok.com/', icon: <Play size={20} /> },
  { name: 'YouTube', url: 'https://youtube.com/', icon: <Youtube size={20} /> },
  { name: 'Email', url: `mailto:${CONTACT_EMAIL}`, icon: <Mail size={20} /> }
];

/**
 * WHY ME BULLET POINTS
 */
export const FEATURES = [
  "Hook-first structure to boost watch time",
  "Seamless, flow-based transitions",
  "Strategic sound FX & background music",
  "Cinematic visual storytelling"
];