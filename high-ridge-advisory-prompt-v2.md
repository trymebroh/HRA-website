# High Ridge Advisory Website Build Specification

## Executive Summary

**Client:** High Ridge Advisory — Boutique Wealth Management Firm  
**Location:** McKinney, Texas  
**Primary Objective:** Establish digital credibility and convert visitors into scheduled consultations  
**Target Audience:** High-net-worth individuals, families, and business owners seeking fiduciary financial guidance

This specification outlines a complete website build optimized for trust, professionalism, and conversion. Every design decision should reinforce the firm's positioning as a sophisticated, client-focused wealth management partner.

---

## Strategic Design Philosophy

### Brand Positioning
High Ridge Advisory is not a transactional financial services provider—they are long-term partners in their clients' financial journeys. The website must communicate:

1. **Trustworthiness** — Clean design, professional imagery, clear credentials
2. **Expertise** — 25+ years of experience, sophisticated investment methodology
3. **Accessibility** — Despite their expertise, they are approachable and client-focused
4. **Action** — Every page should guide visitors toward booking a consultation

### Conversion Strategy
The primary conversion goal is **scheduled meetings**. Secondary goals include contact form submissions and client portal logins. Design decisions should reduce friction toward these actions:

- Scheduling CTAs appear in strategic locations (not overwhelming, but always accessible)
- "Book a Meeting" button remains visible in navigation at all times
- Each page concludes with a clear next step
- Form fields are minimal and non-intimidating

---

## Technical Architecture

### Technology Stack
```
Frontend:     HTML5, CSS3, Vanilla JavaScript (ES6+)
Forms:        Netlify Forms (built-in dashboard for submission management)
Hosting:      Netlify (free tier)
Fonts:        Google Fonts
Icons:        Lucide Icons (lightweight, professional)
Version Control: Git + GitHub
```

**Rationale:** This stack prioritizes maintainability. The site owner can make updates via Claude Code without learning complex frameworks. No build tools, no dependencies to manage, no security vulnerabilities from outdated packages.

### Project Structure
```
high-ridge-advisory/
├── index.html                 # Homepage
├── services.html              # Services overview
├── about.html                 # About & team
├── contact.html               # Contact form
├── thank-you.html             # Form submission confirmation
├── css/
│   ├── styles.css             # Main stylesheet
│   └── animations.css         # Animation definitions (separate for clarity)
├── js/
│   └── main.js                # All JavaScript functionality
├── images/
│   ├── logo.png               # Company logo (also used as favicon)
│   ├── hero-home.jpg          # Homepage hero
│   ├── hero-services.jpg      # Services page hero
│   ├── hero-about.jpg         # About page hero
│   ├── hero-contact.jpg       # Contact page hero
│   ├── jay-madden.jpg         # Team headshot
│   ├── eric-caisse.jpg        # Team headshot
│   ├── kyle-harrison.jpg      # Team headshot
│   └── risk-chart.png         # Asset allocation visualization
├── favicon.ico                # Generated from logo
├── site.webmanifest           # PWA manifest for favicon
└── README.md                  # Owner documentation
```

### Placeholder Images (To Be Replaced)
```css
/* Use these placeholder URLs during development */
--placeholder-logo: "https://placehold.co/200x80/1a365d/ffffff?text=High+Ridge+Advisory";
--placeholder-hero: "https://placehold.co/1920x900/2d3748/94a3b8?text=Mountain+Ridge+Landscape";
--placeholder-headshot: "https://placehold.co/400x500/e2e8f0/475569?text=Professional+Headshot";
--placeholder-chart: "https://placehold.co/900x400/f8fafc/1a365d?text=Risk+Allocation+Chart";
```

---

## Design System

### Color Palette

```css
:root {
  /* Primary Brand Colors */
  --navy-900: #0f2744;         /* Darkest - footer background */
  --navy-800: #1a365d;         /* Primary - headers, nav, buttons */
  --navy-700: #234876;         /* Hover states */
  --navy-600: #2c5282;         /* Secondary accents */
  --navy-500: #3d6a9f;         /* Links */
  
  /* Neutral Palette */
  --white: #ffffff;
  --gray-50: #f8fafc;          /* Light section backgrounds */
  --gray-100: #f1f5f9;         /* Card backgrounds */
  --gray-200: #e2e8f0;         /* Borders, dividers */
  --gray-300: #cbd5e1;         /* Disabled states */
  --gray-500: #64748b;         /* Secondary text */
  --gray-700: #334155;         /* Body text */
  --gray-900: #0f172a;         /* Headings */
  
  /* Accent Colors */
  --gold-500: #d4a853;         /* Premium accent (use sparingly) */
  --gold-400: #e2bd6f;         /* Gold hover */
  
  /* Semantic Colors */
  --success: #059669;
  --error: #dc2626;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}
```

### Typography

```css
:root {
  /* Font Families */
  --font-heading: "Cormorant Garamond", Georgia, serif;
  --font-body: "Inter", system-ui, sans-serif;
  
  /* Font Sizes - Fluid Typography */
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
  --text-base: clamp(1rem, 0.925rem + 0.375vw, 1.125rem);
  --text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
  --text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
  --text-2xl: clamp(1.5rem, 1.25rem + 1.25vw, 2rem);
  --text-3xl: clamp(1.875rem, 1.5rem + 1.875vw, 2.5rem);
  --text-4xl: clamp(2.25rem, 1.75rem + 2.5vw, 3.5rem);
  --text-5xl: clamp(3rem, 2.25rem + 3.75vw, 4.5rem);
  
  /* Line Heights */
  --leading-tight: 1.2;
  --leading-snug: 1.375;
  --leading-normal: 1.6;
  --leading-relaxed: 1.75;
  
  /* Letter Spacing */
  --tracking-tight: -0.02em;
  --tracking-normal: 0;
  --tracking-wide: 0.025em;
  --tracking-wider: 0.05em;
  --tracking-widest: 0.1em;
}
```

**Typography Hierarchy:**
| Element | Font | Size | Weight | Case |
|---------|------|------|--------|------|
| H1 (Hero) | Cormorant Garamond | text-5xl | 600 | Normal |
| H2 (Section) | Cormorant Garamond | text-3xl | 600 | Normal |
| H3 (Subsection) | Cormorant Garamond | text-2xl | 600 | Normal |
| H4 (Card Title) | Inter | text-xl | 600 | Normal |
| Body | Inter | text-base | 400 | Normal |
| Body Large | Inter | text-lg | 400 | Normal |
| Caption | Inter | text-sm | 400 | Normal |
| Overline | Inter | text-xs | 600 | Uppercase, tracking-widest |
| Button | Inter | text-sm | 600 | Normal |
| Nav Link | Inter | text-sm | 500 | Normal |

### Spacing System

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */
  
  /* Section Padding */
  --section-padding-y: clamp(4rem, 8vw, 7rem);
  --section-padding-x: clamp(1.5rem, 5vw, 3rem);
  
  /* Container */
  --container-max: 1280px;
  --container-narrow: 900px;
  --container-text: 720px;
}
```

### Animation System

All animations should feel **refined and intentional**—never flashy or distracting. They communicate quality and attention to detail.

```css
:root {
  /* Timing Functions */
  --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-out-cubic: cubic-bezier(0.215, 0.61, 0.355, 1);
  --ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);
  --ease-in-out-cubic: cubic-bezier(0.645, 0.045, 0.355, 1);
  
  /* Durations */
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --duration-slower: 700ms;
}
```

**Animation Specifications:**

| Animation | Trigger | Properties | Duration | Easing |
|-----------|---------|------------|----------|--------|
| Fade In Up | Scroll into view | opacity 0→1, translateY 30px→0 | 700ms | ease-out-expo |
| Fade In | Scroll into view | opacity 0→1 | 500ms | ease-out-cubic |
| Stagger Children | Parent in view | Each child delayed +100ms | 500ms each | ease-out-expo |
| Button Hover | Mouse enter | translateY -2px, shadow increase | 300ms | ease-out-cubic |
| Button Press | Mouse down | translateY 0, scale 0.98 | 150ms | ease-out-quad |
| Link Underline | Mouse enter | width 0→100% (left to right) | 300ms | ease-out-cubic |
| Card Hover | Mouse enter | translateY -4px, shadow-lg | 300ms | ease-out-cubic |
| Nav Dropdown | Click/hover | opacity, translateY -10px→0 | 200ms | ease-out-cubic |
| Mobile Menu | Toggle | translateX 100%→0 | 400ms | ease-out-expo |
| Image Reveal | Scroll into view | clip-path reveal + slight scale | 800ms | ease-out-expo |

**Scroll Animation Implementation:**
```javascript
// Use Intersection Observer with these thresholds
const observerOptions = {
  root: null,
  rootMargin: '0px 0px -100px 0px', // Trigger slightly before element enters
  threshold: 0.1
};

// Add 'data-animate' attribute to elements
// Options: fade-in, fade-in-up, fade-in-left, fade-in-right, stagger-children
```

**Stagger Pattern for Lists/Grids:**
```css
[data-animate="stagger-children"] > * {
  opacity: 0;
  transform: translateY(20px);
}

[data-animate="stagger-children"].is-visible > *:nth-child(1) { transition-delay: 0ms; }
[data-animate="stagger-children"].is-visible > *:nth-child(2) { transition-delay: 100ms; }
[data-animate="stagger-children"].is-visible > *:nth-child(3) { transition-delay: 200ms; }
/* Continue pattern as needed */
```

---

## Component Specifications

### Navigation Bar

**Behavior:**
- Fixed position, always visible
- Background: transparent on hero, transitions to solid white with shadow on scroll
- Height: 80px desktop, 70px mobile
- Logo left-aligned, nav items right-aligned

**Desktop Layout:**
```
[Logo]                    [Services] [About] [Contact] [Client Portal ▼] [Book a Meeting]
```

**Client Portal Dropdown:**
- Trigger: Click (not hover—better for accessibility and mobile)
- Animation: Fade in + slide down 10px
- Contains two links styled as list items:
  - "View Investments" → https://login.orionadvisor.com/
  - "Access Wealth Plan" → https://wealth.emaplan.com/ema/SignIn
- Click outside or press Escape to close

**"Book a Meeting" Button:**
- Primary CTA styling (navy background, white text)
- Subtle gold border or gold accent on hover
- Links to: https://highridgeadvisory.as.me/

**Mobile Navigation:**
- Hamburger icon (three lines, animated to X on open)
- Full-screen overlay with navy background
- Nav items centered, stacked vertically
- "Book a Meeting" button prominent at bottom
- Client Portal shows as expandable accordion

**Scroll Behavior:**
```javascript
// When user scrolls past hero section (or 100px):
// - Add 'scrolled' class to nav
// - Background transitions from transparent to white
// - Logo can switch from white version to dark version (if applicable)
// - Add subtle shadow
```

### Buttons

**Primary Button (CTA):**
```css
.btn-primary {
  background: var(--navy-800);
  color: white;
  padding: var(--space-4) var(--space-8);
  border-radius: 4px;
  font-weight: 600;
  font-size: var(--text-sm);
  letter-spacing: var(--tracking-wide);
  transition: all var(--duration-normal) var(--ease-out-cubic);
  box-shadow: var(--shadow-md);
}

.btn-primary:hover {
  background: var(--navy-700);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}
```

**Secondary Button (Outline):**
```css
.btn-secondary {
  background: transparent;
  color: var(--navy-800);
  border: 2px solid var(--navy-800);
  /* Same padding, font styles as primary */
}

.btn-secondary:hover {
  background: var(--navy-800);
  color: white;
}
```

**Ghost Button (For dark backgrounds):**
```css
.btn-ghost {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-ghost:hover {
  background: white;
  color: var(--navy-800);
}
```

### Cards

**Service Card:**
```css
.card-service {
  background: white;
  border-radius: 8px;
  padding: var(--space-8);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--gray-100);
  transition: all var(--duration-normal) var(--ease-out-cubic);
}

.card-service:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: var(--navy-200);
}
```

**Team Card:**
- Vertical layout: image on top, content below
- Image: 1:1.2 aspect ratio, subtle zoom on hover
- Content: Name, title, expandable bio
- Entire card is clickable to expand bio

### Form Elements

```css
.form-input {
  width: 100%;
  padding: var(--space-4);
  border: 1px solid var(--gray-300);
  border-radius: 4px;
  font-size: var(--text-base);
  transition: border-color var(--duration-fast), box-shadow var(--duration-fast);
}

.form-input:focus {
  outline: none;
  border-color: var(--navy-600);
  box-shadow: 0 0 0 3px rgba(44, 82, 130, 0.15);
}

.form-label {
  display: block;
  margin-bottom: var(--space-2);
  font-weight: 500;
  color: var(--gray-700);
}
```

---

## Page Specifications

### Global Elements

**Favicon Setup:**
```html
<link rel="icon" type="image/png" sizes="32x32" href="/images/logo.png">
<link rel="icon" type="image/png" sizes="16x16" href="/images/logo.png">
<link rel="apple-touch-icon" sizes="180x180" href="/images/logo.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#1a365d">
```

**Footer (All Pages):**
```
┌─────────────────────────────────────────────────────────────────────────────┐
│  [Logo]                                                                      │
│                                                                              │
│  Quick Links          Services              Connect                          │
│  ─────────────        ─────────             ───────                          │
│  About Us             Family Wealth         info@highridgeadvisory.com       │
│  Our Team             Business Planning     972.632.5700                     │
│  Contact              Investment Strategy                                    │
│                                             208 E. Louisiana Street          │
│  [Book a Consultation - Button]             Suite 301                        │
│                                             McKinney, Texas 75069            │
│                                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│  Investment Advisory Services offered through Csenge Advisory Group, LLC,   │
│  a Registered Investment Advisor. High Ridge Advisory is not affiliated     │
│  with Csenge Advisory Solutions.                                            │
│                                                                              │
│  © 2025 High Ridge Advisory. All rights reserved.                           │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### Page 1: Homepage (index.html)

**Meta Information:**
```html
<title>High Ridge Advisory | Trusted Wealth Management in McKinney, TX</title>
<meta name="description" content="High Ridge Advisory provides fiduciary wealth management for families and businesses in McKinney, Texas. Over 25 years of experience. Schedule your consultation today.">
```

**Section 1: Hero**
- Full viewport height (100vh), minimum 600px
- Background: High-quality mountain/ridge landscape image with subtle overlay gradient (dark at bottom for text legibility)
- Content centered vertically and horizontally

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│                                                                              │
│                    A Higher Standard of                                      │
│                    Wealth Management                                         │
│                                                                              │
│         Fiduciary guidance for families and businesses                       │
│              who value clarity, integrity, and results.                      │
│                                                                              │
│                  [Schedule a Consultation]                                   │
│                                                                              │
│                                                                              │
│                            ↓ (scroll indicator)                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

- Headline: H1, Cormorant Garamond, text-5xl, white
- Subheadline: Body large, white with 90% opacity
- CTA: Primary button (consider white/ghost style on dark background)
- Scroll indicator: Subtle animated chevron or line bouncing gently

**Animation Sequence:**
1. Page load: Hero content fades in (opacity 0→1, 800ms)
2. Headline appears first, then subheadline (100ms delay), then button (200ms delay)
3. Scroll indicator fades in after 1.5s

---

**Section 2: Introduction**
- Background: White
- Two-column layout on desktop (text left, image right), stacked on mobile
- Image: Professional office or handshake photo, subtle parallax scroll effect

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│   ABOUT HIGH RIDGE                          ┌─────────────────────┐         │
│                                             │                     │         │
│   We're Here to Simplify                    │      [Image]        │         │
│   Your Financial Life                       │                     │         │
│                                             └─────────────────────┘         │
│   At High Ridge, we believe building and                                    │
│   managing wealth shouldn't be difficult.                                   │
│   We aim to remove the confusion, deliver                                   │
│   high-quality advice, and increase your                                    │
│   knowledge and comfort with how your                                       │
│   money is being invested.                                                  │
│                                                                              │
│   All decisions we make will be in your                                     │
│   best interests.                                                           │
│                                                                              │
│   [Learn About Our Approach →]                                              │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

- Overline: "ABOUT HIGH RIDGE" (uppercase, small, gold or navy)
- Headline: H2
- Body text: Two paragraphs max
- Link: Text link with arrow, underline animation on hover

---

**Section 3: Services Overview**
- Background: var(--gray-50)
- Centered headline, two cards below

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│                         OUR SERVICES                                         │
│                                                                              │
│              Tailored Solutions for Every Stage of Life                      │
│                                                                              │
│   ┌─────────────────────────────┐     ┌─────────────────────────────┐       │
│   │                             │     │                             │       │
│   │   Family Wealth Solutions   │     │  Business Planning Solutions│       │
│   │                             │     │                             │       │
│   │   Comprehensive planning    │     │   Strategic guidance for    │       │
│   │   for individuals and       │     │   business owners to        │       │
│   │   families at every stage   │     │   minimize taxes and        │       │
│   │   of life.                  │     │   retain key employees.     │       │
│   │                             │     │                             │       │
│   │   • Retirement Planning     │     │   • Retirement Plan Design  │       │
│   │   • Investment Strategy     │     │   • Cash Balance Pensions   │       │
│   │   • Estate Planning         │     │   • Executive Benefits      │       │
│   │                             │     │                             │       │
│   │   [Explore Services →]      │     │   [Explore Services →]      │       │
│   │                             │     │                             │       │
│   └─────────────────────────────┘     └─────────────────────────────┘       │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

- Cards animate in with stagger effect on scroll
- Hover effect: lift + shadow
- Links go to services.html#family and services.html#business

---

**Section 4: Why Choose Us**
- Background: White
- Three or five key differentiators in a row

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│                        WHY HIGH RIDGE                                        │
│                                                                              │
│   ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐  │
│   │    [icon]   │    │    [icon]   │    │    [icon]   │    │    [icon]   │  │
│   │             │    │             │    │             │    │             │  │
│   │   25+ Years │    │  Fiduciary  │    │ Independent │    │   Fidelity  │  │
│   │ Experience  │    │  Standard   │    │   Advice    │    │  & Schwab   │  │
│   │             │    │             │    │             │    │  Custodians │  │
│   └─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘  │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

- Icons: Simple line icons from Lucide (Shield, Award, Users, Building)
- Each item fades in with stagger

---

**Section 5: CTA Banner**
- Background: var(--navy-800) or hero image with overlay
- Simple, compelling call to action

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│              Ready to Take the Next Step?                                    │
│                                                                              │
│     Schedule a complimentary consultation to discuss your financial goals.  │
│                                                                              │
│                      [Book Your Consultation]                                │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

- Button: Ghost style (white outline) or gold accent
- Links to: https://highridgeadvisory.as.me/

---

**Section 6: Contact Preview**
- Background: var(--gray-50)
- Simple contact info with secondary CTA

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│   GET IN TOUCH                                                               │
│                                                                              │
│   Email: info@highridgeadvisory.com                                         │
│   Phone: 972.632.5700                                                        │
│   Address: 208 E. Louisiana Street, Suite 301, McKinney, TX 75069           │
│                                                                              │
│   [Send Us a Message]                                                        │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### Page 2: Services (services.html)

**Meta Information:**
```html
<title>Wealth Management Services | High Ridge Advisory</title>
<meta name="description" content="Comprehensive wealth management services for families and businesses including retirement planning, investment strategy, tax planning, and business succession.">
```

**Section 1: Hero (Compact)**
- Height: 50vh or 400px minimum
- Background image with overlay

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│                   Wealth Management                                          │
│                    Tailored to You                                           │
│                                                                              │
│     We help clients balance current and future financial needs,              │
│        seeing wealth as a tool for purposeful living.                        │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

**Section 2: Introduction**
- Background: White
- Centered text, narrow container

```
From the beginning and throughout our relationship, we create comprehensive 
wealth plans that ensure all parts of your financial net worth work together. 
Simplifying the complex, we serve as a trusted resource to help you 
confidently design, implement, and evolve your planning over time.
```

---

**Section 3: Family Wealth Solutions** (id="family")
- Background: var(--gray-50)
- Two-column: intro text left, services grid right

**Services to display in clean grid (3 columns on desktop, 2 on tablet, 1 on mobile):**
Each service is a small card with icon and title:

1. Retirement Planning
2. Retirement Income Planning
3. Social Security Analysis & Timing
4. Educational & College Planning
5. Investment Strategy & Design
6. Tax-Managed Investment Strategies
7. Professionally Managed Retirement Plans
8. Stock Option Optimization
9. Guaranteed Income & Annuity Planning
10. Life, Disability & LTC Insurance
11. Tax Planning & Minimization
12. Estate & Legacy Planning
13. Multigenerational & Gifting Strategies
14. Asset Protection Strategies
15. Family CFO Services

**Mini CTA after section:**
```
[Schedule a Family Wealth Consultation]
```

---

**Section 4: Business Planning Solutions** (id="business")
- Background: White
- Same layout pattern as Family section

**Services:**
1. Corporate Retirement Plan Design
2. Solo Owner Retirement Plans
3. Cash Balance Pension Plans
4. Tax-Managed Investment Strategies
5. Deferred Compensation Plans
6. Executive Benefit & Key Employee Planning

**Mini CTA:**
```
[Schedule a Business Planning Consultation]
```

---

**Section 5: Investment Philosophy**
- Background: var(--navy-800)
- Light text on dark background
- Creates visual break and emphasis

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│                    We Focus on Your Needs Only                               │
│                                                                              │
│    We have no ties to investment firms, specific products, or ready-made    │
│    platforms. You can choose the managers, products, and individual         │
│    securities that will help deliver the best results.                      │
│                                                                              │
│    We do not try to time the market or predict its behavior. Instead,       │
│    we run detailed analysis of your portfolio daily, assessing risk and     │
│    performance levels, evaluating current market conditions, and making     │
│    careful, analytical adjustments.                                         │
│                                                                              │
│    Our mission is to participate when markets are supportive of higher      │
│    prices and hedge when market risks are elevated.                         │
│                                                                              │
│                    — Eric Caisse, CFA®, CMT, CFP®                            │
│                      Chief Investment Officer & Partner                      │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

**Section 6: Fusion Analysis Process**
- Background: White
- Highlight the proprietary methodology

```
OUR PROPRIETARY PROCESS

Fusion Analysis

Our approach combines three methodologies:

[Icon] Fundamental Research
[Icon] Technical Research  
[Icon] Behavioral Science

On a daily basis, we reallocate asset categories, track manager performance, 
negotiate pricing, and customize preferences for all portfolios. We believe 
it's more important to avoid the big dips than chase the high flyers.
```

---

**Section 7: Asset Allocation Models**
- Background: var(--gray-50)
- Feature the risk chart image

```
Asset Allocation Models for Every Investor

We offer 13 asset allocation models ranging from fixed income to total market 
exposure. We also provide custom-crafted allocations for specific situations.

[Risk Allocation Chart Image]

High Ridge Advisory can help you determine your risk score and preference.

[Find Your Risk Profile - Button]
```

---

**Section 8: Full-Width CTA**
- Same pattern as homepage CTA banner

```
Ready to discuss your financial strategy?

[Book a Consultation]
```

---

### Page 3: About (about.html)

**Meta Information:**
```html
<title>About Us | High Ridge Advisory</title>
<meta name="description" content="Meet the team at High Ridge Advisory. Over 25 years of fiduciary wealth management experience serving families and businesses in McKinney, Texas.">
```

**Section 1: Hero (Compact)**
```
                        Who We Are

High Ridge Advisory is a boutique wealth management firm led by 
James Madden, serving families, professionals, and business owners 
since 1997.
```

---

**Section 2: Our Story**
- Background: White
- Two columns: text and image

```
As an independent advisor, we operate with full transparency, using 
Fidelity and Schwab Institutional platforms as our custodians and 
offering sophisticated investment solutions through the Csenge 
Advisory Network.

Our independence means we answer only to you—not to a parent company, 
not to shareholders, and not to product quotas.
```

---

**Section 3: Mission & Values**
- Background: var(--gray-50)

```
                         Our Mission

To provide clarity and confidence to clients through customized 
financial strategies that honor your values, legacy, and goals.
```

**Values displayed as elegant cards:**
- Over 25 Years Experience
- Fiduciary Advice Always
- Multi-Generational Planning
- Disciplined Investment Philosophy
- Deep Relationships & Trust

---

**Section 4: Meet the Team**
- Background: White
- This is the showcase section—make it visually engaging

```
                       Meet the Team

Our first priority is helping you take care of yourself and your family. 
We want to learn more about your personal situation, identify your dreams 
and goals, and understand your tolerance for risk.

┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│                 │  │                 │  │                 │
│    [Photo]      │  │    [Photo]      │  │    [Photo]      │
│                 │  │                 │  │                 │
│  James "Jay"    │  │   Eric J.       │  │     Kyle        │
│    Madden       │  │    Caisse       │  │   Harrison      │
│                 │  │                 │  │                 │
│ Founder & Lead  │  │ Chief Investment│  │    Advisor      │
│    Advisor      │  │ Officer & Partner│ │                 │
│                 │  │                 │  │                 │
│  [View Bio ↓]   │  │  [View Bio ↓]   │  │  [View Bio ↓]   │
└─────────────────┘  └─────────────────┘  └─────────────────┘
```

**Team Card Interaction:**
- Click "View Bio" to expand an accordion below the card (or all three cards)
- Smooth height animation
- Only one bio open at a time
- Bio includes a personal touch (credentials, approach, perhaps a brief personal note)

**Bio Content:**

**James "Jay" Madden — Founder & Lead Advisor**
> With nearly three decades of experience in wealth management, Jay founded High Ridge Advisory to provide clients with truly independent, fiduciary advice. He specializes in comprehensive financial planning for families and business owners, with a focus on retirement planning, estate strategies, and multi-generational wealth transfer.
>
> Jay believes that financial planning should simplify life, not complicate it. His approach emphasizes clear communication, disciplined strategies, and building lasting relationships with the families he serves.

**Eric J. Caisse, CFA®, CMT, CFP® — Chief Investment Officer & Partner**
> Eric brings institutional-grade investment expertise to High Ridge clients. As the architect of the firm's Fusion Analysis methodology, he combines fundamental research, technical analysis, and behavioral science to optimize portfolio performance while managing risk.
>
> His credentials include the Chartered Financial Analyst (CFA), Certified Market Technician (CMT), and Certified Financial Planner (CFP) designations—a rare combination that reflects his comprehensive approach to investment management.

**Kyle Harrison — Advisor**
> Kyle works closely with clients to understand their unique financial situations and goals. He is dedicated to helping families navigate complex financial decisions with clarity and confidence.
>
> His client-first approach and attention to detail ensure that every interaction moves you closer to your financial objectives.

---

**Section 5: CTA**
```
Let's Start the Conversation

[Schedule Your Consultation]
```

---

### Page 4: Contact (contact.html)

**Meta Information:**
```html
<title>Contact Us | High Ridge Advisory</title>
<meta name="description" content="Get in touch with High Ridge Advisory. Schedule a consultation or send us a message. Located in McKinney, Texas, serving clients nationwide.">
```

**Section 1: Hero (Compact)**
```
                    Let's Work Together

We'd love to hear from you. Reach out to schedule a conversation 
about your financial goals.
```

---

**Section 2: Contact Content**
- Two-column layout: Form left, contact info right
- Background: White

**Left Column: Contact Form**
```html
<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/thank-you.html">
  <input type="hidden" name="form-name" value="contact">
  <p class="hidden" aria-hidden="true">
    <label>Don't fill this out: <input name="bot-field"></label>
  </p>
  
  <div class="form-row">
    <div class="form-group">
      <label for="first-name">First Name <span class="required">*</span></label>
      <input type="text" id="first-name" name="first-name" required>
    </div>
    <div class="form-group">
      <label for="last-name">Last Name <span class="required">*</span></label>
      <input type="text" id="last-name" name="last-name" required>
    </div>
  </div>
  
  <div class="form-group">
    <label for="email">Email <span class="required">*</span></label>
    <input type="email" id="email" name="email" required>
  </div>
  
  <div class="form-group">
    <label for="phone">Phone</label>
    <input type="tel" id="phone" name="phone">
  </div>
  
  <div class="form-group">
    <label for="message">How can we help you? <span class="required">*</span></label>
    <textarea id="message" name="message" rows="5" required></textarea>
  </div>
  
  <div class="form-group checkbox-group">
    <input type="checkbox" id="newsletter" name="newsletter">
    <label for="newsletter">Keep me updated with news and insights</label>
  </div>
  
  <button type="submit" class="btn-primary">Send Message</button>
</form>
```

**Right Column: Contact Information**
```
CONTACT INFORMATION

Email
info@highridgeadvisory.com

Phone
972.632.5700
Call or text—we're here to help.

Office
208 E. Louisiana Street
Suite 301
McKinney, Texas 75069

────────────────────────

Prefer to schedule directly?

[Book a Meeting →]
(Links to Acuity)
```

---

**Section 3: Map (Optional)**
- Embedded Google Map or static map image
- If using embed, lazy-load for performance

---

### Page 5: Thank You (thank-you.html)

**Simple confirmation page after form submission:**
```
                    Thank You

Your message has been received. A member of our team will 
be in touch within one business day.

In the meantime, feel free to schedule a consultation directly:

[Book a Meeting]

[Return to Homepage]
```

---

## JavaScript Functionality Specification

### main.js Structure

```javascript
// ============================================
// HIGH RIDGE ADVISORY - Main JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  initScrollAnimations();
  initClientPortalDropdown();
  initTeamAccordions();
  initSmoothScroll();
  initNavbarScroll();
});

// 1. NAVIGATION
function initNavigation() {
  // Mobile menu toggle
  // - Toggle 'is-open' class on nav
  // - Animate hamburger to X
  // - Prevent body scroll when menu open
}

// 2. SCROLL ANIMATIONS
function initScrollAnimations() {
  // Use Intersection Observer
  // Find all elements with [data-animate]
  // Add 'is-visible' class when in viewport
  // Respect user's prefers-reduced-motion setting
}

// 3. CLIENT PORTAL DROPDOWN
function initClientPortalDropdown() {
  // Toggle dropdown on click
  // Close when clicking outside
  // Close on Escape key
  // Keyboard accessible (Enter/Space to toggle)
}

// 4. TEAM ACCORDIONS
function initTeamAccordions() {
  // Click team card to expand bio
  // Smooth height animation
  // Close other bios when opening new one
  // Toggle aria-expanded for accessibility
}

// 5. SMOOTH SCROLL
function initSmoothScroll() {
  // For anchor links
  // Account for fixed header height
  // Use native CSS scroll-behavior where supported
}

// 6. NAVBAR SCROLL EFFECT
function initNavbarScroll() {
  // Add 'is-scrolled' class after scrolling past hero
  // Throttle scroll event for performance
}
```

### Reduced Motion Support

```javascript
// Check for user preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// If true, disable animations or use instant transitions
if (prefersReducedMotion) {
  document.documentElement.classList.add('reduce-motion');
}
```

```css
.reduce-motion *,
.reduce-motion *::before,
.reduce-motion *::after {
  animation-duration: 0.01ms !important;
  transition-duration: 0.01ms !important;
}
```

---

## Accessibility Requirements

### WCAG 2.1 AA Compliance

1. **Color Contrast**
   - All text meets 4.5:1 ratio minimum
   - Navy (#1a365d) on white: ✓ 10.5:1
   - White on navy: ✓ 10.5:1
   - Gray-700 on white: ✓ 7.2:1

2. **Keyboard Navigation**
   - All interactive elements focusable
   - Visible focus indicators (2px navy outline)
   - Logical tab order
   - Skip link to main content

3. **Screen Readers**
   - Semantic HTML throughout
   - ARIA labels where needed
   - Form labels properly associated
   - Alt text for all images

4. **Forms**
   - Clear error messages
   - Required fields indicated visually and with aria-required
   - Honeypot field hidden from screen readers

---

## Performance Requirements

1. **Images**
   - Serve WebP with JPG fallback
   - Lazy load below-fold images
   - Responsive images with srcset
   - Maximum dimensions: Hero 1920px wide, others 1200px

2. **CSS/JS**
   - Minify for production
   - CSS in <head>, JS before </body>
   - Critical CSS inlined (optional optimization)

3. **Fonts**
   - Use `font-display: swap`
   - Preload primary fonts
   - Subset fonts if possible (Latin only)

4. **Target Metrics**
   - First Contentful Paint: < 1.5s
   - Largest Contentful Paint: < 2.5s
   - Cumulative Layout Shift: < 0.1

---

## SEO Implementation

### Each Page Needs:

```html
<!-- Primary Meta -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>[Page Title] | High Ridge Advisory</title>
<meta name="description" content="[150-160 character description]">

<!-- Open Graph -->
<meta property="og:title" content="[Page Title]">
<meta property="og:description" content="[Description]">
<meta property="og:image" content="/images/og-image.jpg">
<meta property="og:url" content="https://highridgeadvisory.com/[page]">
<meta property="og:type" content="website">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">

<!-- Canonical -->
<link rel="canonical" href="https://highridgeadvisory.com/[page]">
```

### Structured Data (Homepage)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "High Ridge Advisory",
  "description": "Boutique wealth management firm providing fiduciary financial guidance",
  "url": "https://highridgeadvisory.com",
  "telephone": "+1-972-632-5700",
  "email": "info@highridgeadvisory.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "208 E. Louisiana Street, Suite 301",
    "addressLocality": "McKinney",
    "addressRegion": "TX",
    "postalCode": "75069",
    "addressCountry": "US"
  },
  "founder": {
    "@type": "Person",
    "name": "James Madden"
  },
  "foundingDate": "1997",
  "areaServed": "United States"
}
</script>
```

---

## README.md Content for Site Owner

```markdown
# High Ridge Advisory Website

## Quick Reference

### File Locations
- **Homepage content:** `index.html`
- **Services content:** `services.html`
- **About/Team content:** `about.html`
- **Contact form:** `contact.html`
- **Styles:** `css/styles.css`
- **Images:** `images/` folder

### Making Updates with Claude Code

Open your terminal and use Claude Code. Here are example prompts:

**Text Changes:**
- "Change the phone number to 972-555-1234"
- "Update Jay Madden's bio to mention 30 years of experience"
- "Change the homepage headline to 'Your Partner in Wealth'"

**Adding Content:**
- "Add a new service called 'Cryptocurrency Planning' to the Family section"
- "Add a new team member named Sarah Johnson, Client Relations Manager"

**Image Changes:**
- "Update the hero image to use hero-new.jpg from the images folder"
- "Change Kyle Harrison's headshot to kyle-new.jpg"

### Replacing Images

1. Add your new image to the `images/` folder
2. Name it clearly (e.g., `jay-madden.jpg`)
3. Ask Claude Code: "Replace the current Jay Madden photo with jay-madden.jpg"

### Publishing Changes

After making changes:
```bash
git add .
git commit -m "Describe your change here"
git push
```

Netlify automatically publishes within 1-2 minutes.

### Viewing Form Submissions

1. Log into Netlify (netlify.com)
2. Select your site
3. Go to "Forms" in the sidebar
4. Click on "contact" to see submissions

### Need Help?

Contact [your developer contact] or use Claude Code to ask questions about the site.
```

---

## Final Deliverables Checklist

- [ ] index.html (Homepage)
- [ ] services.html (Services)
- [ ] about.html (About & Team)
- [ ] contact.html (Contact Form)
- [ ] thank-you.html (Form Confirmation)
- [ ] css/styles.css (All styles)
- [ ] css/animations.css (Animation definitions)
- [ ] js/main.js (All JavaScript)
- [ ] Favicon files configured
- [ ] site.webmanifest
- [ ] README.md with owner documentation
- [ ] All placeholder images referenced
- [ ] Mobile responsive across all pages
- [ ] Forms configured for Netlify
- [ ] SEO meta tags on all pages
- [ ] Accessibility tested
- [ ] Cross-browser tested (Chrome, Safari, Firefox, Edge)
