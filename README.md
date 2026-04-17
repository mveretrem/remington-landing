# Remington Construction Landing Page

A modern, responsive landing page built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

## 📦 Tech Stack

- **Framework:** Next.js 16.1.6 (App Router)
- **UI Library:** React 19.2.3
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React (v0.577.0)
- **Utilities:** clsx, tailwind-merge, class-variance-authority

## 🏗️ Project Structure

```
mega-glass/
├── app/
│   ├── components/
│   │   ├── layout/          # Header, Navigation
│   │   ├── hero/            # Hero section components
│   │   └── ui/              # Reusable UI components
│   ├── globals.css          # Global styles & Tailwind config
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── lib/
│   ├── constants.ts         # Centralized configuration
│   └── utils.ts             # Utility functions
└── public/                  # Static assets
```

## ✨ Features

### Implemented
- ✅ Responsive hero section with background image and CTA
- ✅ Header with logo and navigation
- ✅ About Us section with quote and company description
- ✅ Services section (HVAC, Plumbing, General Contracting)
- ✅ Our Clients infinite carousel with brand logos
- ✅ Our Projects section organized by categories (Hospitality, Retail, Medical, Multi-Family)
- ✅ Why Choose Us section with core values
- ✅ Contact section with form and contact information
- ✅ Footer with logo and social links
- ✅ Custom brand colors (Remington Orange #E54B0D)
- ✅ Mobile-responsive design
- ✅ TypeScript type safety
- ✅ Optimized images with Next.js Image
- ✅ Accessible components (ARIA, semantic HTML)

### Architecture Highlights
- **SOLID Principles:** Single responsibility, open/closed, dependency inversion
- **DRY:** Reusable components, centralized constants
- **Composition:** Complex components built from simple ones
- **Type Safety:** Full TypeScript coverage
- **Performance:** Optimized images, minimal JavaScript

## 🎨 Customization

### Brand Colors

Edit `app/globals.css`:

```css
--color-remington-orange: #e54b0d;
```

Or use in Tailwind classes:
```tsx
className="bg-remington-orange text-white"
```

### Content

Edit `lib/constants.ts`:

```typescript
export const HERO_CONTENT = {
  title: 'YOUR TITLE HERE',
  subtitle: 'Your subtitle here',
};

export const SERVICES_CONTENT = {
  heading: 'Our Services',
  services: [...],
};

// And more...
```

### Images

Update images in `lib/constants.ts` or component files. All external images must be configured in `next.config.ts`.

## 🧩 Component Architecture

### Key Principles

1. **Single Responsibility:** Each component has one clear purpose
2. **Reusability:** Components are designed to be reused
3. **Composition:** Complex UIs built from simple components
4. **Type Safety:** TypeScript interfaces for all props
5. **Accessibility:** Semantic HTML and ARIA labels

### Component Hierarchy

```
Page
└── Header
    └── Navigation
    └── SocialLinks
└── HeroSection
    ├── HeroBackground
    └── HeroContent
└── AboutSection
    ├── AboutImage
    └── AboutContent
└── ServicesSection
    └── ServiceCard (x3)
└── ClientsSection
    └── ClientCarousel
        └── ClientLogo (infinite scroll)
└── ProjectsSection
    └── ProjectCategory (x4)
        └── ProjectCard (x12 each)
└── WhyChooseUsSection
    └── FeatureCard (x3)
└── ContactSection
    ├── ContactInfo
    └── ContactForm
└── Footer
    └── SocialLinks
```

## 📱 Responsive Design

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

All components are mobile-first and fully responsive.

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels for interactive elements
- Alt text for images
- Keyboard navigation support
- Color contrast compliance (WCAG AA)
- Form labels and validation

## 🔧 Configuration

### Next.js Image Optimization

Remote images are configured in `next.config.ts`:

```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
    {
      protocol: 'https',
      hostname: 'via.placeholder.com',
    },
  ],
}
```

### Brand Colors

Defined in `tailwind.config.ts`:

```typescript
colors: {
  'remington-orange': '#E54B0D',
}
```

## 🧪 Code Quality

- **TypeScript:** Strict mode enabled
- **ESLint:** Next.js recommended config
- **Type Safety:** Full TypeScript coverage
- **Component Documentation:** Clear prop interfaces

## 📄 License

Private project for Remington Construction.

## 🤝 Contributing

1. Follow the established architecture patterns
2. Use TypeScript with explicit types
3. Maintain component documentation
4. Ensure accessibility compliance
5. Test responsive behavior
6. Keep content in `lib/constants.ts`

## 📞 Support

For questions or issues, please contact the development team.

---

Built with ❤️ using Next.js, React, and Tailwind CSS
