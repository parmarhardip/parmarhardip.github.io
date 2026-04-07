# React Portfolio Development

This folder contains the React source code for Hardip Parmar's portfolio website.

## 🏗️ Project Structure

```
parmarhardip.github.io/
├── react/                    # React source code (this folder)
│   ├── src/                  # React components and utilities
│   ├── public/              # Static assets
│   ├── package.json         # Dependencies and scripts
│   └── vite.config.ts       # Build configuration
├── assets/                  # Deployed assets (generated from build)
├── index.html              # Deployed site (generated from build)
└── other GitHub Pages files...
```

## 🚀 Development Workflow

### Prerequisites
- Node.js 18+ installed
- Git configured

### Development Commands

```bash
# Navigate to React source
cd react/

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (outputs to parent directory)
npm run build

# Build and deploy to GitHub Pages
npm run deploy
```

## 🔧 Key Features

### Dynamic Case Study System
- Uses `import.meta.glob` for automatic case study discovery
- Add new case studies by creating JSON files in `src/data/case-studies/`
- Control homepage visibility with `showInHomepage` flag

### OJS Projects Modal
- Shows live journal projects in a clean modal interface
- Configured in `ojs-journal-ecosystem.json`

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Smooth animations and interactions
- Auto-switching testimonials

## 📝 Adding New Case Studies

1. Create a new JSON file in `src/data/case-studies/`
2. Follow the existing structure (see `lms-platform.json` as example)
3. Add required images to `public/assets/images/`
4. Set `showInHomepage: true/false` to control homepage display
5. Build and deploy

## 🎯 Build Configuration

The project is configured to:
- Build React source to parent directory (GitHub Pages root)
- Preserve existing GitHub Pages files
- Generate optimized bundles with proper asset handling
- Support dynamic routing for case studies

## 📦 Deployment

The site automatically deploys to https://parmarhardip.github.io/ when you run:

```bash
npm run deploy
```

This command:
1. Builds the React app
2. Outputs files to GitHub Pages root
3. Commits changes to git
4. Pushes to GitHub Pages

## 🔍 TypeScript & Type Safety

Full TypeScript support with interfaces for:
- Case studies and content types
- Component props
- API responses

## 🎨 Styling

- **Tailwind CSS** for utility-first styling
- **CSS Variables** for consistent theming
- **Responsive Design** patterns
- **Animation** utilities for smooth interactions

---

Built with ❤️ using React + TypeScript + Vite + Tailwind CSS
