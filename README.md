# NEBULA RUSH - Landing Page

A production-ready, single-page landing page for the fictional mobile game "NEBULA RUSH". Built with clean, hand-crafted HTML, CSS, and JavaScript without any external frameworks.

## 🚀 Features

### Design & Visual
- **Dreamy pastel gradient backgrounds** with soft multi-stop gradients
- **Glass morphism effects** with backdrop-blur and soft shadows
- **Neon accents** in purple, green, blue, and pink
- **Floating particle animations** and geometric shapes
- **Smooth micro-interactions** with hover effects and transitions
- **Dark mode friendly** color palette

### Technical
- **100% Responsive** - Optimized for desktop (≥1440px), tablet (1024px), mobile (768px), and small screens (390px)
- **Semantic HTML5** with proper accessibility (ARIA labels, focus styles)
- **CSS Variables** for consistent theming and easy customization
- **Vanilla JavaScript** - No external dependencies
- **Performance Optimized** - Lazy loading, compressed assets, non-blocking scripts
- **SEO Ready** - Meta tags, Open Graph, structured data

### Interactions
- **Sticky header** with scroll effects
- **Smooth scrolling** navigation
- **Testimonials slider** with touch/swipe support
- **Contact modal** with form validation
- **Parallax effects** on hero elements
- **Scroll-triggered animations** using Intersection Observer

## 📁 Project Structure

```
NebulaRush/
├── index.html          # Main HTML file
├── styles.css          # Complete CSS with responsive design
├── script.js           # Interactive JavaScript functionality
├── assets/             # Assets directory
│   ├── favicon.ico     # Website favicon
│   └── og-image.png    # Open Graph image for social sharing
└── README.md           # This file
```

## 🎨 Design System

### Colors
```css
--bg: #F6F7FB;           /* Background */
--ink: #0D0E25;          /* Primary text */
--primary: #6A5AF9;      /* Primary purple */
--accent: #7AE582;       /* Neon green */
--pink: #F48FB1;         /* Soft pink */
--blue: #7CC7FF;         /* Baby blue */
--card: #FFFFFF;         /* Glass cards */
--dark: #0B0D28;         /* Dark sections */
--muted: #6B6E76;        /* Secondary text */
```

### Typography
- **Body**: Inter (400, 500, 600)
- **Headings**: Space Grotesk (400, 600, 700)
- **Fluid typography** using clamp() for responsive scaling

### Spacing & Layout
- **Container**: Max-width 1280px with responsive padding
- **Section padding**: Clamp(4rem, 8vw, 8rem) for fluid spacing
- **Gap system**: XS(0.5rem) → SM(1rem) → MD(1.5rem) → LG(2rem) → XL(3rem)

## 🏗️ Page Structure

1. **Sticky Header** - Logo, navigation, and CTA buttons
2. **Hero Section** - Main headline with animated game card
3. **Featured Band** - Platform logos and key statistics
4. **Features** - Four circular feature bubbles with icons
5. **App Section** - Phone mockup with app interface
6. **Spotlight Panel** - Dark section with player card tiers
7. **Testimonials** - Carousel slider with player reviews
8. **Footer** - Brand info, navigation, and legal links

## 🛠️ Setup & Usage

### Quick Start
1. Clone or download the project files
2. Open `index.html` in a web browser
3. No build process required - everything runs natively

### Development Server (Optional)
For development, you can use any local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js live-server
npx live-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## 📱 Responsive Breakpoints

- **Desktop**: ≥1440px (optimal viewing)
- **Laptop**: 1024px (2-column layouts become stacked)
- **Tablet**: 768px (mobile navigation activated)
- **Mobile**: 390px (smallest supported screen)

## ♿ Accessibility Features

- **Semantic HTML** with proper heading hierarchy
- **ARIA labels** for interactive elements
- **Focus management** with visible focus styles
- **Keyboard navigation** support
- **Color contrast** meets WCAG AA standards (≥4.5:1)
- **Screen reader** friendly content structure

## 🚀 Performance Optimizations

- **Optimized animations** using CSS transforms and GPU acceleration
- **Throttled scroll handlers** to maintain 60fps
- **Lazy loading** for non-critical images
- **Preloading** for critical assets
- **Efficient selectors** and minimal reflows
- **Compressed assets** for faster loading

## 🎮 Game Theme Content

The landing page showcases "NEBULA RUSH" - a fictional futuristic action-arcade mobile game with:

- **Fast-paced gameplay** with 3-second battle entry
- **Co-op raid events** for team-based challenges  
- **Ranked PvP arena** with skill-based matchmaking
- **Mobile companion app** for managing progress
- **Player customization** with multiple tier systems
- **Zero pay-to-win** fair gaming experience

## 🔧 Customization

### Colors
Modify CSS variables in `:root` to change the color scheme:

```css
:root {
  --primary: #your-color;
  --accent: #your-accent;
  /* etc... */
}
```

### Content
Update text content directly in `index.html` while maintaining the structure.

### Animations
Adjust animation timing and easing in the CSS variables:

```css
:root {
  --duration-normal: 300ms;
  --ease: cubic-bezier(.2,.8,.2,1);
}
```

## 📊 Browser Support

- **Chrome/Edge**: 88+ (full support)
- **Firefox**: 85+ (full support)  
- **Safari**: 14+ (full support)
- **Mobile browsers**: iOS 14+, Android 8+

## 🤝 Contributing

This is a production example project. For improvements:

1. Maintain the existing design language
2. Ensure cross-browser compatibility
3. Keep accessibility standards
4. Test responsive behavior
5. Maintain performance benchmarks

## 📄 License

This project is created as a design example. Feel free to use as inspiration or starting point for your own projects.

## 🎯 Key Achievements

✅ **Pixel-perfect** design implementation  
✅ **Production-ready** code quality  
✅ **Zero dependencies** - pure HTML/CSS/JS  
✅ **Fully responsive** across all devices  
✅ **Accessible** to all users  
✅ **Performant** with smooth 60fps animations  
✅ **SEO optimized** for search engines  
✅ **Game-themed** original content  

---

**NEBULA RUSH** - Conquer the Nebula. Enjoy the Rush. 🌌⚡