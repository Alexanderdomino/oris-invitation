# 🌞 Summer Party Invitation - Animated Webapp

An interactive and animated summer party invitation built with React, TypeScript, and Framer Motion. When visitors open the link, they're greeted with a sealed letter that opens with beautiful animations to reveal a festive party invitation.

## ✨ Features

- **Interactive Letter Animation**: Click to open a sealed envelope with smooth 3D animations
- **Celebration Effects**: Fireworks, balloons, confetti, and floating hearts
- **Background Music**: Party music playback with visual controls
- **Responsive Design**: Works beautifully on desktop and mobile devices
- **Rich Animations**: Powered by Framer Motion for smooth, professional animations
- **Summer Theme**: Vibrant colors and summer-themed decorations

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Adding Music (Optional)

To add background party music:

1. Add your music files to the `public` directory:
   - `party-music.mp3` (primary format)
   - `party-music.ogg` (fallback format)

2. The audio will automatically play when the invitation opens

## 🎯 How It Works

1. **Landing Page**: Visitors see a sealed envelope with a hint to click it
2. **Letter Opening**: Smooth 3D animation opens the envelope flap
3. **Invitation Reveal**: The party invitation slides out with celebration effects
4. **Background Effects**: Balloons, fireworks, and floating elements create a festive atmosphere
5. **Music Controls**: Optional background music with visual controls

## 🛠️ Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Fast build tool and dev server
- **Framer Motion** - Animation library
- **Canvas Confetti** - Confetti effects
- **CSS3** - Advanced styling and responsive design

## 📱 Responsive Design

The invitation is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones
- Various screen orientations

## 🎨 Customization

### Event Details
Edit the invitation content in `src/components/Invitation.tsx`:
- Date and time
- Location
- Activities
- Contact information

### Colors and Styling
Modify the color scheme in the CSS files:
- `src/components/Letter.css`
- `src/components/Invitation.css`
- `src/components/BackgroundEffects.css`

### Animations
Adjust animation timing and effects in the component files:
- Letter opening speed
- Fireworks frequency
- Balloon movement patterns

## 📦 Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## 🌐 Deployment

This app can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 🎵 Audio Notes

The audio functionality includes placeholder references. For the best experience:
1. Add actual audio files to the `public` directory
2. Use MP3 and OGG formats for browser compatibility
3. Choose upbeat, party-appropriate music
4. Keep file sizes reasonable for faster loading

## 📄 License

This project is open source and available under the MIT License.

## 🎉 Perfect For

- Summer parties and BBQs
- Birthday celebrations
- Wedding events
- Corporate summer events
- Any festive gathering

---

Enjoy creating memorable invitations! 🎊
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
