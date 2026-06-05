import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';

const titles = {
  '/': 'DEV TINUADE | Helping Businesses Grow Online',
  '/about': 'About DEV TINUADE | Digital Growth Partner',
  '/services': 'Services | Websites, Google Visibility, Ads and AI',
  '/contact': 'Contact DEV TINUADE | Start Your Growth Project',
};

export default function App() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false;
    const savedTheme = window.localStorage.getItem('dev-tinuade-theme');
    if (savedTheme) return savedTheme === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.title = titles[location.pathname] || titles['/'];
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    document.documentElement.style.colorScheme = darkMode ? 'dark' : 'light';
    window.localStorage.setItem('dev-tinuade-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-brand-ink transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <Header darkMode={darkMode} onToggleTheme={() => setDarkMode((value) => !value)} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
