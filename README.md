# React Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, featuring dark mode, smooth animations, and client-side data management.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Dark Mode**: Toggle between light and dark themes with persistence
- **Responsive**: Fully responsive design that works on all devices
- **Contact Form**: Functional contact form with localStorage integration
- **Project Showcase**: Dynamic project gallery with filtering
- **Skills Display**: Interactive skills section with category filtering
- **Client-Side Storage**: No backend required - uses localStorage for form submissions
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Local Storage API** - Client-side data persistence

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.js       # Navigation header with theme toggle
│   ├── Hero.js         # Hero section with profile
│   ├── About.js        # About section
│   ├── Skills.js       # Skills showcase
│   ├── Projects.js     # Project gallery
│   └── Contact.js      # Contact form
├── context/            # React context providers
│   └── ThemeContext.js # Dark mode theme management
├── data/               # Static JSON data files
│   ├── about.json      # Personal information
│   ├── skills.json     # Technical skills
│   └── projects.json   # Project portfolio
├── pages/              # Page components
│   ├── Home.js         # Main portfolio page
│   └── Messages.js     # Contact messages viewer
├── App.js              # Main app component with routing
├── index.js            # React app entry point
└── index.css           # Global styles and Tailwind imports
```

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm start
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 📝 Customization

### Personal Information
Edit `src/data/about.json` to update your personal information:
```json
{
  "name": "Your Name",
  "title": "Your Title",
  "tagline": "Your tagline",
  "bio": "Your bio...",
  "location": "Your Location",
  "email": "your.email@example.com"
}
```

### Skills
Add or modify skills in `src/data/skills.json`:
```json
{
  "id": 1,
  "name": "Skill Name",
  "icon": "🚀",
  "category": "Category"
}
```

### Projects
Update your projects in `src/data/projects.json`:
```json
{
  "id": 1,
  "title": "Project Title",
  "description": "Project description...",
  "technologies": ["React", "Node.js"],
  "liveDemo": "https://demo-url.com",
  "github": "https://github.com/username/repo",
  "featured": true
}
```

## 🎨 Styling

The project uses Tailwind CSS with a custom configuration:
- Custom color palette with primary blue theme
- Dark mode support with `class` strategy
- Custom animations (fade-in, slide-up)
- Responsive breakpoints
- Custom component classes in `src/index.css`

## 📱 Features Overview

### Contact Form
- Collects name, email, and message
- Stores submissions in localStorage
- Shows confirmation message
- Form validation

### Messages Page
- View all contact form submissions
- Delete individual messages
- Clear all messages
- Accessible via `/messages` route (not in navigation)

### Dark Mode
- System preference detection
- Manual toggle in header
- Persistent across sessions
- Smooth transitions

## 🚀 Deployment

This project is ready for deployment on Vercel:

1. **Connect your repository** to Vercel
2. **Deploy** - No additional configuration needed
3. **Custom domain** (optional) - Add your domain in Vercel settings

### Build Settings
- Build Command: `npm run build`
- Output Directory: `build`
- Install Command: `npm install`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Built with ❤️ using React and Tailwind CSS
