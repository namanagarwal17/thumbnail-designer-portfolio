# Naman Agarwal — YouTube Thumbnail Designer Portfolio

A creative-agency-grade freelance portfolio website built with **React**, **Vite**, **Framer Motion**, and custom vanilla CSS.

---

## 🚀 Quick Start

### 1. Run Locally
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Build for Production
```bash
npm run build
```
The optimized production build will be created in the `dist/` directory, ready to deploy to Vercel, Netlify, Cloudflare Pages, etc.

---

## 🖼️ How to Add or Change Thumbnails

You can easily add, update, or remove any thumbnail:

1. **Add your image**:
   Place your thumbnail file in the `public/images/thumbnails/` folder (e.g. `my-thumbnail.png` or `.jpg`).
2. **Update the data list**:
   Open [`src/data/portfolioData.js`](file:///c:/Users/hp/OneDrive/Documents/important/designprojects/Naman-Thumbnail-Portfolio/src/data/portfolioData.js) and add or modify an entry:
   ```javascript
   {
     id: 21,
     title: "Your Video Title",
     category: "Gaming", // Gaming | Tech | Finance | Vlogs | Other
     image: "/images/thumbnails/my-thumbnail.png",
   }
   ```
The website will automatically display it in both the **Featured Carousel** and the **Interactive Portfolio Gallery** with category filtering and full-size lightbox preview.

---

## 📬 How to Update Your Email

Open [`src/config/contactConfig.js`](file:///c:/Users/hp/OneDrive/Documents/important/designprojects/Naman-Thumbnail-Portfolio/src/config/contactConfig.js):
```javascript
const contactConfig = {
  email: "your.email@example.com",
  formEndpoint: "", // Optional: Add a Formspree / Getform URL to receive direct messages
};
```

---

## ✨ Features

- **Dark Creative Agency Aesthetic**: Deep charcoal & obsidian background with refined purple-blue glowing gradients.
- **Hero Section**: Animated title typography, "Available for Projects" badge with live pulse indicator, and 3D designer mascot.
- **Auto-Scrolling Featured Carousel**: Shows off your top thumbnails with pause-on-hover and navigation controls.
- **Categorized Portfolio Grid**: Filter thumbnails by *All*, *Gaming*, *Tech*, *Finance*, *Vlogs*, and *Other*.
- **Full-Size Lightbox**: Click any thumbnail in the gallery to inspect it in high resolution.
- **Services & Skills**: Highlights YouTube Thumbnails, Shorts/Reels, CTR Optimization, A/B Testing, and Fast Delivery.
- **About Me**: Visual storytelling showcasing 1 year experience, 30-50% CTR gains, and workflow with Adobe Photoshop.
- **Client Testimonials & FAQs**: Social proof and clear answers to client questions.
- **Direct Contact Section**: Direct email mailto card plus working inquiry form.
- **100% Responsive**: Tailored for desktop, tablet, and mobile screens.
