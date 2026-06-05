import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
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

  useEffect(() => {
    document.title = titles[location.pathname] || titles['/'];
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const syncTheme = (event) => {
      const prefersDark = 'matches' in event ? event.matches : mediaQuery.matches;
      document.documentElement.classList.toggle('dark', prefersDark);
      document.documentElement.style.colorScheme = prefersDark ? 'dark' : 'light';
    };

    syncTheme(mediaQuery);
    mediaQuery.addEventListener('change', syncTheme);

    return () => mediaQuery.removeEventListener('change', syncTheme);
  }, []);

  return (
    <div className="min-h-screen bg-white text-brand-ink transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
