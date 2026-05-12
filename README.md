# Kayvin - Software Developer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark/light theme support, and optimized performance.

![Portfolio Preview](./preview.png)

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Smooth Animations**: Framer Motion for fluid transitions
- **Responsive Design**: Mobile-first approach with perfect responsiveness
- **Theme Support**: Dark and light mode with persistent storage
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance**: Code splitting, lazy loading, and optimized assets
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Type Safety**: Full TypeScript coverage with strict mode

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **SEO**: React Helmet Async
- **HTTP Client**: Axios
- **Code Quality**: ESLint, Prettier

## 📋 Prerequisites

- Node.js 18+
- npm or yarn

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kayvin/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup** (optional)
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🏗️ Project Structure

```
portfolio/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── common/
│   │   │   ├── AnimatedBackground.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── LoadingSpinner.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ScrollToTop.tsx
│   │   │   ├── SectionTitle.tsx
│   │   │   ├── SocialLinks.tsx
│   │   │   └── ThemeToggle.tsx
│   │   ├── layout/
│   │   │   └── Layout.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Input.tsx
│   ├── context/
│   │   └── ThemeContext.tsx
│   ├── data/
│   │   └── projects.json
│   ├── hooks/
│   │   ├── useLocalStorage.ts
│   │   └── useTheme.ts
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   ├── NotFound.tsx
│   │   └── Projects.tsx
│   ├── utils/
│   │   ├── animations.ts
│   │   ├── cn.ts
│   │   └── seo.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .env.example
├── eslint.config.js
├── netlify.toml
├── package.json
├── postcss.config.js
├── prettier.config.js
├── README.md
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json
└── vite.config.ts
```

## 🎨 Customization

### Adding Projects

Edit `src/data/projects.json` to add new projects:

```json
{
  "id": "new-project",
  "title": "New Project",
  "description": "Project description",
  "techStack": ["Tech1", "Tech2"],
  "githubUrl": "https://github.com/yonaTech000/new-project",
  "liveUrl": "https://new-project.com",
  "image": "/images/new-project.jpg",
  "featured": false
}
```

### Theme Customization

Modify `tailwind.config.ts` to customize colors and themes.

### SEO Configuration

Update `src/utils/seo.ts` for default SEO settings.

## 🚀 Deployment

### Vercel

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Deploy

### Manual Deployment

```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 🔧 Environment Variables

Create `.env` file:

```env
# API endpoints (for future backend integration)
VITE_API_BASE_URL=http://localhost:8000/api

# Analytics (optional)
VITE_GA_TRACKING_ID=

# Social links
VITE_GITHUB_URL=https://github.com/yonaTech000
VITE_LINKEDIN_URL=https://linkedin.com/in/kayvin
VITE_TWITTER_URL=https://twitter.com/kayvin
```

## 🐛 Future Backend Integration

### Python Environment Setup

#### Windows
```bash
python -m venv .venv
.venv\Scripts\activate
pip install fastapi uvicorn
```

#### macOS/Linux
```bash
python3 -m venv .venv
source .venv/bin/activate
pip install fastapi uvicorn
```

### Example FastAPI Backend

```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/projects")
async def get_projects():
    # Return projects data
    pass

@app.post("/api/contact")
async def send_contact(form_data: dict):
    # Handle contact form submission
    pass
```

## 📊 Performance

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: Optimized with code splitting
- **Loading**: Lazy loading for images and components
- **Caching**: Efficient asset caching strategies

## ♿ Accessibility

- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Focus management

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Kayvin**
- Website: [kayvin.dev](https://kayvin.dev)
- GitHub: [@yonaTech000](https://github.com/yonaTech000)
- LinkedIn: [kayvin](https://linkedin.com/in/kayvin)

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)