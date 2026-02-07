# Compagnia

A modern, elegant web application for **Compagnia**, a chamber music collective based in New York City. This project is a refined clone and enhancement of their digital presence, focusing on high-quality aesthetics, smooth performance, and mobile-responsive design.

## ✨ Features

- **Dynamic Homepage**: Features a beautiful hero section with background art, a transparent logo overlay, and a real-time countdown to the next performance.
- **Musician Directory**: A clean grid of performing artists with specialized logic to ensure photos are never cut off.
- **Detailed Bios**: Individual pages for each musician, including a dedicated section for the Director.
- **Event Tracking**: A specialized events page to showcase upcoming performances.
- **Responsive Navigation**: Includes a custom mobile hamburger menu and dropdowns for easy exploration.
- **Smooth Animations**: Scroll-triggered fade-in effects for a premium, cinematic feel.
- **Optimized Images**: Custom `OptimizedImage` component for faster loading and better UX.
- **Contact Integration**: Integrated contact form for inquiries.

## 🚀 Tech Stack

- **Framework**: [React](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Styling**: Vanilla CSS (Custom properties and modern Layout APIs)
- **Icons**: Custom SVG icons

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/erica-zhong/compagnia.git
   cd compagnia
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 📁 Project Structure

```text
src/
├── components/     # Reusable UI components (Countdown, FadeIn, etc.)
├── data/           # JSON files for musicians and events
├── pages/          # Full page components (Home, About, Bio, etc.)
├── assets/         # Static assets and global styles
└── App.tsx         # Root component and routing logic
```

## 🎹 License

Distributed under the MIT License. See `LICENSE` for more information.

---
*Created with care for the NYC classical music community.*
