# Abdy Tahir - Video Editor Portfolio

A cinematic, high-retention focused portfolio for short-form video editors.

## 🚀 How to Deploy on Netlify

1. **GitHub Setup**: Push this entire project to a new repository on GitHub.
2. **Netlify Connect**: 
   - Log into Netlify.
   - Click **"Add new site"** -> **"Import from Git"**.
   - Select your GitHub repo.
3. **Build Settings**:
   - Netlify should automatically detect the settings, but ensure they are:
     - **Build Command**: `npm run build`
     - **Publish Directory**: `dist`
4. **Deploy**: Click "Deploy site" and you're live!

## ✍️ How to Customize

### 1. Change Portfolio Clips
Open `constants.tsx` and update the `PROJECTS` array. Replace the `thumbnail` URLs with your own images (you can host them on Imgur, Unsplash, or in a local `/images` folder) and the `videoUrl` with your actual YouTube or Vimeo links.

### 2. Update Contact Email
In `constants.tsx`, change `CONTACT_EMAIL` to your professional email. The contact form uses **FormSubmit.co**, so on the first submission, you will receive a verification email from them to activate the inbox.

### 3. Replace Taglines
Search for "Abdy Tahir" or "Short-Form" in `App.tsx` and `index.html` to change the main headings.

## 🎨 Design Info
- **Framework**: React 19 + Tailwind CSS
- **Icons**: Lucide-React
- **Fonts**: Outfit (Headings), Inter (Body)
