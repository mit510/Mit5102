# Mitkumar Patel - Portfolio Website

A fully animated React portfolio website showcasing full-stack development experience with smooth transitions and interactive elements.

## Features

- ✨ Dark/light theme toggle with smooth transitions
- 🎭 Animated hero section with typing effects and floating particles
- 📊 Skills section with animated progress bars
- 📅 Interactive timeline for work experience
- 🚀 Project showcase with hover effects and tech badges
- 🎓 Education section with certifications
- 📧 Contact form with validation
- 📱 Fully responsive design

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI, shadcn/ui
- **Build Tool**: Vite
- **Deployment**: Netlify

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Install cross-env for Windows compatibility:
```bash
npm install cross-env
```

3. Start development server:
```bash
npm run dev
```

4. Open http://localhost:5000

## Deployment to Netlify

### Option 1: Drag & Drop (Easiest)

1. Build the project:
```bash
npm run build
```

2. Go to [Netlify](https://app.netlify.com)
3. Drag the `dist` folder to the deploy area

### Option 2: Git Integration

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Option 3: Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build and deploy:
```bash
npm run build
netlify deploy --prod --dir=dist
```

## Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utilities and data
│   │   └── hooks/         # Custom React hooks
├── server/                # Express backend (not used in static deployment)
├── shared/               # Shared types and schemas
├── dist/                 # Built files for deployment
└── netlify.toml         # Netlify configuration
```

## Contact Form Note

For static deployment on Netlify, the contact form will need to be modified to use:
- Netlify Forms
- External form service (FormSpree, Getform, etc.)
- Or remove backend dependency

## License

MIT License - feel free to use this template for your own portfolio!