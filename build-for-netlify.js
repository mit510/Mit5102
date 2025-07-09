import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Building for Netlify deployment...');

try {
  // Build the client (frontend)
  console.log('Building client...');
  execSync('vite build', { stdio: 'inherit' });
  
  // Since Netlify is for static sites, we'll build just the frontend
  // The backend API calls won't work on Netlify static hosting
  console.log('Build completed successfully!');
  
  // Create a simple redirect file for SPA routing
  const distPath = path.join(process.cwd(), 'dist');
  const redirectsPath = path.join(distPath, '_redirects');
  
  if (!fs.existsSync(redirectsPath)) {
    fs.writeFileSync(redirectsPath, '/* /index.html 200\n');
    console.log('Created _redirects file for SPA routing');
  }
  
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}