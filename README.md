# CodeSphere

> Expert-led online coding classes for students in grades 3-12

A static HTML5 website showcasing CodeSphere's online coding education programs. Built with modern web technologies and deployed automatically to GitHub Pages.

## 🚀 Quick Start

No build process or dependencies required! Simply open the site in your browser:

```bash
# Windows
start index.html

# macOS/Linux
open index.html
```

## 📋 Table of Contents

- [About](#about)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Development](#development)
- [Deployment](#deployment)
- [Customization](#customization)
- [License](#license)

## 🎯 About

CodeSphere offers comprehensive online coding classes for students in grades 3-12, covering:
- **Scratch** - Visual programming for beginners
- **Python** - Foundation programming concepts
- **Java** - Object-oriented programming
- **Web Development** - HTML, CSS, JavaScript

This website serves as the primary showcase and information hub for the business.

## 🛠 Technologies

This is a static website built with:

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with responsive design
- **JavaScript/jQuery 3.x** - Interactive functionality
- **Bootstrap 4.5.2** - Responsive grid and components
- **Owl Carousel** - Course showcase slider
- **Slick Slider** - Content slider
- **Lightbox.js** - Image galleries
- **Magnific Popup** - Video modals

## 📁 Project Structure

```
codesphere-web/
├── index.html              # Main entry point (single-page app)
├── assets/
│   ├── css/                # Stylesheets
│   │   └── templatemo-grad-school.css  # Custom styles
│   ├── js/                 # JavaScript files
│   │   └── custom.js       # jQuery initialization
│   ├── images/             # Image assets
│   └── fonts/              # Web fonts
├── vendor/                 # Third-party libraries
│   ├── bootstrap/          # Bootstrap framework
│   └── jquery/             # jQuery library
├── .github/
│   └── workflows/
│       └── static.yml      # GitHub Pages deployment
├── favicon.ico             # Site favicon
├── site.webmanifest        # Web app manifest
└── CLAUDE.md               # AI assistant instructions
```

## 💻 Development

### Local Development

No build process needed! The site runs directly in your browser:

1. Clone the repository
2. Open [index.html](index.html) in any modern web browser
3. Make changes to HTML, CSS, or JS files
4. Refresh the browser to see changes

### Making Changes

#### Updating Content
All content is in [index.html](index.html). Sections are identified by `id` attributes:
- `#section1` - Main Banner
- `#section2` - Features
- `#section3` - Why Choose Us
- `#section4` - Coming Soon
- `#section5` - Courses
- `#section6` - Contact

#### Styling
Custom styles are in [assets/css/templatemo-grad-school.css](assets/css/templatemo-grad-school.css).

**Responsive breakpoints:**
- 1200px - Large desktop
- 1000px - Tablet landscape
- 750px - Tablet portrait
- 550px - Mobile landscape

#### Adding Courses
Find the Owl Carousel section in [index.html](index.html) and duplicate an item block:

```html
<div class="item">
  <img src="assets/images/courses-*.jpg" alt="Course">
  <div class="down-content">
    <h4>Course Title</h4>
    <p>Course description...</p>
    <!-- Add course details -->
  </div>
</div>
```

#### Changing Colors
Primary colors in the theme:
- `#f5a425` - Orange accent
- `#1e1e1e` - Dark backgrounds
- `#fff` - Light text/backgrounds

Search and replace these hex values in [assets/css/templatemo-grad-school.css](assets/css/templatemo-grad-school.css).

## 🌐 Deployment

Deployment is **fully automated** via GitHub Actions:

1. **Commit** your changes to the `main` branch
2. **Push** to GitHub
3. GitHub Actions automatically deploys to GitHub Pages
4. Changes are **live within minutes**

The deployment workflow is defined in [.github/workflows/static.yml](.github/workflows/static.yml).

### Manual Deployment Setup

If setting up for the first time:

1. Go to repository **Settings** → **Pages**
2. Set **Source** to "GitHub Actions"
3. The workflow will run automatically on next push to `main`

## 🎨 Customization

### Images
Replace images in [assets/images/](assets/images/):
- `courses-*.jpg` - Course thumbnails
- `author-*.png` - Instructor avatars
- `main-slider-*.jpg` - Hero slider images
- `course-video.mp4` - Background video

### Navigation
Edit the `<nav>` menu in [index.html](index.html). Links use smooth-scroll:

```html
<a href="#section-id">Menu Item</a>
```

### Carousels
Configure Owl Carousel in [assets/js/custom.js](assets/js/custom.js):

```javascript
$('.owl-carousel').owlCarousel({
  responsive: {
    0: { items: 1 },
    600: { items: 2 },
    1000: { items: 4 }
  }
});
```

## 📝 Design Principles

1. **Static-Only** - No server-side processing required
2. **Simple Structure** - Easy to maintain and modify
3. **Auto-Deploy** - Automatic deployment via GitHub Actions
4. **Mobile-First** - Fully responsive design
5. **No Build Process** - Works directly in browser

## 🤝 Contributing

When contributing to this project:

1. Keep all components static (no server-side code)
2. Test responsiveness across devices
3. Maintain the educational tone for young students and parents
4. Follow the existing code style and structure
5. Update this README if adding new features

## 📄 License

Copyright © 2025 CodeSphere. All rights reserved.

---

**Founded by Sana Siddiqui** | Expert-led coding education for the next generation
