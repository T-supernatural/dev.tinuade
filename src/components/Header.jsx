import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from './Logo.jsx';

const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `rounded-md px-3 py-2 text-sm font-bold transition ${
      isActive ? 'bg-blue-50 text-brand-blue' : 'text-slate-700 hover:bg-slate-50 hover:text-brand-blue'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/92 backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between px-5 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <NavLink to="/contact" className="btn-primary hidden lg:inline-flex">
          Get Started
        </NavLink>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-brand-line text-brand-ink md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">
          <nav className="container-page flex flex-col gap-2" aria-label="Mobile navigation">
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
