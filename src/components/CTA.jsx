import { Link } from 'react-router-dom';
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import { contact } from '../data/site.js';
import Reveal from './Reveal.jsx';

export default function CTA() {
  return (
    <section className="section bg-white dark:bg-slate-950">
      <Reveal className="container-page overflow-hidden rounded-xl bg-brand-ink px-6 py-12 text-white shadow-premium ring-1 ring-transparent sm:px-10 lg:px-14 dark:bg-[linear-gradient(135deg,#0F3D91,#020617)] dark:ring-white/10">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow text-blue-200">Start with clarity</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-5xl">Ready To Grow Your Business Online?</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              Let us map the right website, Google visibility, advertising, and AI system for your next stage of growth.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-brand-ink transition hover:-translate-y-0.5 dark:bg-blue-50">
              Contact Us <FaArrowRight />
            </Link>
            <a href={contact.whatsapp} className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
