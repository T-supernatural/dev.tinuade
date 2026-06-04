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

  return (
    <div className="min-h-screen bg-white text-brand-ink">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
