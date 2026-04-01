# Vignesh Moorthy K — Portfolio

A modern, premium portfolio website built with **React** (Create React App), **Tailwind CSS**, and **Framer Motion**.

Designed to position a Senior Software Engineer transitioning into a Solution Architect role — with architecture-driven case studies, animated sections, and a dark-first design inspired by Stripe, Vercel, and Linear.

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 (Create React App) |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Icons | React Icons |
| Scroll detection | react-intersection-observer |
| Fonts | Inter + JetBrains Mono (Google Fonts) |

---

## 📁 Project Structure

```
myportfolio/
├── public/
│   ├── index.html          # HTML entry point
│   ├── favicon.ico
│   └── VigneshMoorthy.pdf  # Resume (replace with your latest)
├── src/
│   ├── index.js            # React DOM entry
│   ├── index.css           # Tailwind directives + custom styles
│   ├── App.js              # Root component — assembles all sections
│   └── components/
│       ├── data.js         # ⭐ All content lives here — edit this to customize
│       ├── Navbar.js       # Fixed nav with mobile hamburger menu
│       ├── Hero.js         # Animated hero with stats and CTAs
│       ├── About.js        # Story-driven about section with trait cards
│       ├── Skills.js       # Filterable skill bars grouped by category
│       ├── Projects.js     # Expandable case study cards
│       ├── Architecture.js # System design thinking section
│       ├── Experience.js   # Animated career timeline
│       ├── Achievements.js # Awards + Currently Learning progress bars
│       ├── Contact.js      # Email, GitHub, LinkedIn links
│       ├── SectionWrapper.js # Reusable scroll-triggered fade-in wrapper
│       └── Footer.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🛠️ Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
```

---

## ✏️ How to Customize

All content is centralized in **`components/data.js`**. You only need to edit that one file to update:

- Personal info (name, email, GitHub, LinkedIn)
- Skills and proficiency levels
- Case study projects (problem, solution, architecture, impact)
- Work experience timeline
- Achievements and certifications
- Currently learning topics

### Replace your resume

Drop your updated PDF into `public/` and name it `VigneshMoorthy.pdf`, or update the `resume` field in `components/data.js`.

---

## 🎨 Design System

| Token | Value |
|---|---|
| Primary color | `#6366f1` (Indigo) |
| Background | `#0f0f13` |
| Card surface | `#16161d` |
| Font — body | Inter |
| Font — code | JetBrains Mono |
| Theme | Dark (default) |

---

## 📄 Sections

1. **Hero** — Name, title, tagline, stats, CTAs
2. **About** — Story-driven with engineering trait cards
3. **Skills** — Animated bars, filterable by category
4. **Projects** — Architecture-driven case studies (expandable)
5. **Architecture Thinking** — System design mental models
6. **Experience** — Impact-focused career timeline
7. **Achievements** — Awards, certifications, currently learning
8. **Contact** — Email, GitHub, LinkedIn, resume download
