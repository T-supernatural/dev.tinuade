import { FaEnvelope, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Reveal from '../components/Reveal.jsx';
import { contact } from '../data/site.js';

export default function Contact() {
  return (
    <section className="section min-h-[calc(100vh-80px)] bg-[linear-gradient(135deg,#ffffff,#f5f8fc)]">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-6xl">Start your next digital growth project.</h1>
          <p className="lead">
            Tell us what you want to improve. We will help you shape the right plan for websites, Google visibility, advertising, or AI-powered systems.
          </p>
          <div className="mt-8 grid gap-4">
            <a href={contact.whatsapp} className="flex items-center gap-4 rounded-lg bg-white p-5 shadow-crisp transition hover:-translate-y-1 hover:shadow-premium">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-green-50 text-green-600"><FaWhatsapp /></span>
              <span>
                <span className="block font-extrabold">WhatsApp</span>
                <span className="text-sm text-slate-600">Chat directly about your project</span>
              </span>
            </a>
            <a href={`mailto:${contact.email}`} className="flex items-center gap-4 rounded-lg bg-white p-5 shadow-crisp transition hover:-translate-y-1 hover:shadow-premium">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-blue-50 text-brand-blue"><FaEnvelope /></span>
              <span>
                <span className="block font-extrabold">Email</span>
                <span className="text-sm text-slate-600">{contact.email}</span>
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <form className="rounded-xl bg-white p-6 shadow-premium sm:p-8" name="contact" method="post">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-bold text-slate-700">
                Name
                <input className="mt-2 w-full rounded-md border border-brand-line px-4 py-3 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-blue-100" name="name" type="text" placeholder="Your name" required />
              </label>
              <label className="text-sm font-bold text-slate-700">
                Email
                <input className="mt-2 w-full rounded-md border border-brand-line px-4 py-3 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-blue-100" name="email" type="email" placeholder="you@example.com" required />
              </label>
            </div>
            <label className="mt-5 block text-sm font-bold text-slate-700">
              Service
              <select className="mt-2 w-full rounded-md border border-brand-line px-4 py-3 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-blue-100" name="service">
                <option>Website Development</option>
                <option>Google Business Profile Setup</option>
                <option>Digital Advertising</option>
                <option>AI Business Solutions</option>
              </select>
            </label>
            <label className="mt-5 block text-sm font-bold text-slate-700">
              Project details
              <textarea className="mt-2 min-h-36 w-full rounded-md border border-brand-line px-4 py-3 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-blue-100" name="message" placeholder="What would you like to build or improve?" required />
            </label>
            <button type="submit" className="btn-primary mt-6 w-full">Send Message</button>
            <div className="mt-6 flex gap-3">
              {[FaInstagram, FaLinkedin, FaWhatsapp].map((Icon, index) => (
                <a key={index} href={index === 2 ? contact.whatsapp : '#'} className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand-cloud text-brand-blue transition hover:bg-brand-blue hover:text-white" aria-label="Social link">
                  <Icon />
                </a>
              ))}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
