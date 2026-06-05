import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Logo from './Logo.jsx';
import { contact, services } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white">
      <div className="container-page grid gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr] lg:px-8">
        <div>
          <Logo markTone="light" className="[&_span_span]:text-white" />
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
            Premium digital growth partner for websites, Google visibility, advertising, and AI-powered business systems.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: FaFacebookF, href: contact.facebook, label: 'Facebook' },
              { icon: FaInstagram, href: contact.instagram, label: 'Instagram' },
              { icon: FaWhatsapp, href: contact.whatsapp, label: 'WhatsApp' },
            ].map((item) => (
              <a key={item.label} href={item.href} className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-white transition hover:bg-brand-blue" aria-label={item.label}>
                <item.icon />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.14em]">Navigation</h2>
          <div className="mt-5 flex flex-col gap-3 text-sm text-slate-300">
            {['Home', 'About', 'Services', 'Contact'].map((label) => (
              <NavLink key={label} to={label === 'Home' ? '/' : `/${label.toLowerCase()}`} className="hover:text-white">
                {label}
              </NavLink>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.14em]">Services</h2>
          <div className="mt-5 flex flex-col gap-3 text-sm text-slate-300">
            {services.map((service) => (
              <span key={service.title}>{service.title}</span>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.14em]">Contact</h2>
          <div className="mt-5 flex flex-col gap-3 text-sm text-slate-300">
            <a href={`mailto:${contact.email}`} className="hover:text-white">{contact.email}</a>
            <a href={contact.whatsapp} className="hover:text-white">WhatsApp consultation</a>
            <span>{contact.address}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-sm text-slate-400">
        Copyright {new Date().getFullYear()} DEV TINUADE. All rights reserved.
      </div>
    </footer>
  );
}
