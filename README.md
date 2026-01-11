# Abdy Tahir Portfolio

A professional, high-end single-page portfolio designed for a freelance video editor.

## Getting Started

1.  **Repository Setup**: Push these files to a new GitHub repository.
2.  **Deployment**: 
    *   Connect your repository to **Netlify** or **Vercel**.
    *   **Build Command**: `npm run build`
    *   **Publish Directory**: `dist` (or `build`)

## Customizing Content

All website content is centralized in `constants.tsx` for easy editing.

### Replacing Videos
1. Open `constants.tsx`.
2. Locate the `PROJECTS` array.
3. Replace the `thumbnail` and `videoUrl` values with your own.

### Changing Social Links
1. Open `constants.tsx`.
2. Locate the `SOCIAL_LINKS` array.
3. Update the `url` for Instagram, TikTok, and YouTube.

### Setting Your Email
1. Open `constants.tsx`.
2. Change the `CONTACT_EMAIL` variable to your actual email address.
3. The contact form uses **FormSubmit**, so you will receive a verification email from them after the first test submission.

## Design Highlights
*   **Cinematic Dark Theme**: Optimized for creative professionals.
*   **Responsive**: Looks great on smartphones, tablets, and desktops.
*   **Performance**: Lightweight and fast-loading using React + Tailwind CSS.
*   **Contact Form**: Zero-backend setup using FormSubmit.co.
