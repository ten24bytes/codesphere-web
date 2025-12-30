# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML5 website for **CodeSphere**, an online coding classes business serving students in grades 3-12. The site is deployed to GitHub Pages and serves as a showcase for the business. It's a single-page application with no backend server or build process required.

**Technologies**: HTML5, CSS3, jQuery 3.x, Bootstrap 4.5.2, Owl Carousel, Slick Slider, Lightbox.js, Magnific Popup

**Important**: This project uses only statically-renderable components to maintain simplicity and compatibility with GitHub Pages static hosting.

## Development Commands

### Local Development
```bash
# Open the site directly in a browser
start index.html
# OR on Mac/Linux
open index.html
```

No build process, package installation, or development server is required. Simply open `index.html` in a browser.

### Deployment
Deployment is fully automated via GitHub Actions ([.github/workflows/static.yml](.github/workflows/static.yml)):
- **Automatic**: Any commit to `main` branch triggers the GitHub Action workflow
- **Immediate**: Changes are deployed automatically to GitHub Pages
- **No manual steps**: Simply commit your changes and the action handles deployment

## Architecture

### Design Principles
1. **Static-Only**: All components must be statically renderable (no server-side processing)
2. **Simple Structure**: Project structure is kept intentionally simple for easy maintenance
3. **Auto-Deploy**: GitHub Actions automatically deploy on commit to main branch

### File Structure
```
├── index.html              # Single-page entry point
├── assets/
│   ├── css/                # All stylesheets
│   │   └── templatemo-grad-school.css  # Main custom styles
│   ├── js/                 # JavaScript files
│   │   └── custom.js       # jQuery initialization and custom logic
│   ├── images/             # All image assets
│   └── fonts/              # Web fonts (FontAwesome, Flaticon)
├── vendor/                 # Third-party libraries (Bootstrap, jQuery)
└── .github/workflows/      # GitHub Actions for automated deployment
    └── static.yml          # Deployment workflow
```

### JavaScript Architecture
All JavaScript is loaded in this order (defined in `index.html`):
1. **jQuery** - Core DOM manipulation library
2. **Bootstrap JS** - Modal and dropdown functionality
3. **Isotope** - Layout and filtering
4. **Owl Carousel** - Responsive carousel for courses
5. **Lightbox** - Image gallery functionality
6. **jQuery UI Tabs** - Tabbed content sections
7. **Video.js** - Video popup functionality
8. **Slick Slider** - Content slider
9. **custom.js** - Custom initialization code (runs on document ready)

### CSS Loading Order
1. Bootstrap base styles
2. FontAwesome icons
3. Plugin-specific CSS (owl, lightbox, flex-slider)
4. `templatemo-grad-school.css` - Custom styles (loads last to override)

### Responsive Breakpoints
The main stylesheet uses these breakpoints (in `assets/css/templatemo-grad-school.css`):
- 1200px - Large desktop adjustments
- 1000px - Tablet landscape
- 750px - Tablet portrait
- 550px - Mobile landscape
- 50px - Very small screens

### Single-Page Structure
The HTML is divided into these main sections (linked via smooth-scroll navigation):
- **Header** - Fixed navigation menu
- **Main Banner** - Hero section with video background (`course-video.mp4`)
- **Features** - Highlighted features grid showcasing CodeSphere's offerings
- **Why Choose Us** - Tabbed content section (jQuery UI Tabs)
- **Coming Soon** - Registration section with countdown timer
- **Courses** - Owl Carousel showcase of coding classes for grades 3-12
- **Video Section** - YouTube embed via Magnific Popup
- **Contact** - Form section (static form - requires backend to function)
- **Footer** - Links and copyright

## Key Implementation Details

### Adding/Modifying Sections
All content is in `index.html`. To modify a section:
1. Find the section by its `id` attribute (e.g., `<section id="features">`)
2. Edit the HTML directly
3. Corresponding styles are in `assets/css/templatemo-grad-school.css` under section-specific classes

### Carousel Configuration
The Owl Carousel is initialized in `assets/js/custom.js`:
```javascript
$('.owl-carousel').owlCarousel({
  responsive: {
    0: { items: 1 },
    600: { items: 2 },
    1000: { items: 4 },
    1200: { items: 5 }
  }
});
```

Modify this configuration to change responsive behavior.

### Video Background
The hero section uses `assets/images/course-video.mp4` as a background video. Replace this file to change the background video (keep the same filename or update the `<source>` tag in `index.html`).

### Form Handling
The contact form in `index.html` is currently HTML-only. To make it functional:
1. Add a backend endpoint (not included in this static site)
2. Update the form `action` attribute
3. Add JavaScript validation in `custom.js`

### Image Assets
All images are in `assets/images/`:
- **Course images**: `courses-*.jpg` (5 files)
- **Instructor avatars**: `author-*.png` (5 files)
- **Feature images**: `choose-us-image-*.png` (3 files)
- **Slider images**: `main-slider-*.jpg` (3 files)
- **Background images**: `*-bg.jpg` files

Replace these files to customize visuals (maintain filenames or update references in HTML/CSS).

## Common Modifications

### Changing Colors/Branding
Primary color scheme is defined in `assets/css/templatemo-grad-school.css`. Search for hex color values like:
- `#f5a425` - Orange accent color
- `#1e1e1e` - Dark backgrounds
- `#fff` - White text/backgrounds

### Adding New Courses
To add new CodeSphere coding classes, in [index.html](index.html), find the `<div class="owl-carousel">` section and duplicate an `<div class="item">` block. Update:
- Image source (`<img src="assets/images/courses-*.jpg">`)
- Instructor avatar (`<img src="assets/images/author-*.png">`)
- Course title, description, grade level, and metadata

### Updating Navigation
Edit the `<nav>` element in `index.html`. Each menu item uses smooth-scroll linking:
```html
<a href="#section-id">Menu Item</a>
```
The `#section-id` must match a section's `id` attribute on the page.

## GitHub Pages Deployment

The CodeSphere website is automatically deployed via [.github/workflows/static.yml](.github/workflows/static.yml):
- **Trigger**: Any push/commit to `main` branch
- **Permissions**: Requires Pages and id-token write permissions
- **Artifacts**: Uploads entire repository root
- **URL**: Auto-configured by GitHub Pages settings
- **Workflow**: Fully automated - just commit your changes and they'll be live within minutes

To modify deployment behavior, edit the workflow file or GitHub repository settings.

## CodeSphere Business Context

This website showcases CodeSphere's online coding classes for students in grades 3-12. When making changes:
- Keep the focus on education and coding for young students
- Ensure all components remain static and simple
- Remember that content should appeal to both students and parents
- Maintain the professional yet approachable tone suitable for an educational business
