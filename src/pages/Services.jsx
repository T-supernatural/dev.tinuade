import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheck } from 'react-icons/fa';
import CTA from '../components/CTA.jsx';
import Reveal from '../components/Reveal.jsx';
import ServicesGrid from '../components/ServicesGrid.jsx';
import { services } from '../data/site.js';

const benefits = {
  'Website Development': ['Improve credibility instantly', 'Convert more visitors into leads', 'Look professional on every device'],
  'Google Business Profile Setup': ['Appear on Google Search and Maps', 'Make it easier for local customers to call', 'Strengthen reviews and business trust'],
  'Digital Advertising': ['Reach targeted customers faster', 'Promote offers with clarity', 'Track performance and improve campaigns'],
  'AI Business Solutions': ['Automate repetitive enquiries', 'Improve response time', 'Create smarter internal workflows'],
};

export default function Services() {
  return (
    <>
      <section className="section bg-[linear-gradient(135deg,#ffffff,#f5f8fc)] dark:bg-[linear-gradient(135deg,#020617,#0f172a)]">
        <div className="container-page">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Services</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight dark:text-white sm:text-6xl">Digital growth services with a clear business purpose.</h1>
            <p className="lead">From first impression to customer acquisition, each service helps your business become easier to find, trust, and contact.</p>
          </Reveal>
          <div className="mt-10">
            <ServicesGrid detailed />
          </div>
        </div>
      </section>

      <section className="section bg-white dark:bg-slate-950">
        <div className="container-page space-y-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.05}>
                <article className="grid gap-8 rounded-lg border border-brand-line bg-white p-6 shadow-crisp md:grid-cols-[0.8fr_1.2fr] md:p-8 dark:border-white/10 dark:bg-slate-900">
                  <div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-blue-50 text-xl text-brand-blue dark:bg-blue-500/15 dark:text-blue-200">
                      <Icon />
                    </div>
                    <h2 className="mt-5 text-2xl font-extrabold">{service.title}</h2>
                    <p className="mt-3 leading-8 text-slate-600 dark:text-slate-300">{service.description}</p>
                  </div>
                  <div className="grid content-center gap-3">
                    {benefits[service.title].map((benefit) => (
                      <div key={benefit} className="flex items-center gap-3 rounded-md bg-brand-cloud p-4 text-sm font-bold text-slate-700 dark:bg-slate-950 dark:text-slate-200">
                        <FaCheck className="text-brand-blue" /> {benefit}
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section bg-brand-cloud dark:bg-slate-900">
        <Reveal className="container-page flex flex-col items-start justify-between gap-6 rounded-xl bg-white p-8 shadow-premium md:flex-row md:items-center dark:bg-slate-950 dark:ring-1 dark:ring-white/10">
          <div>
            <p className="eyebrow">Need a custom package?</p>
            <h2 className="mt-3 text-3xl font-extrabold">Combine website, Google, ads, and AI into one growth plan.</h2>
          </div>
          <Link to="/contact" className="btn-primary">
            Build My Plan <FaArrowRight />
          </Link>
        </Reveal>
      </section>

      <CTA />
    </>
  );
}
