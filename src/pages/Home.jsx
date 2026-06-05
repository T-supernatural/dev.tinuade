import { Link } from 'react-router-dom';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import CTA from '../components/CTA.jsx';
import Hero from '../components/Hero.jsx';
import Reveal from '../components/Reveal.jsx';
import ServicesGrid from '../components/ServicesGrid.jsx';
import { process, projects, reasons } from '../data/site.js';

export default function Home() {
  return (
    <>
      <Hero />

      <section id="services" className="section bg-white dark:bg-slate-950">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">What we do</p>
            <h2 className="h2">Digital services built for real business momentum.</h2>
            <p className="lead">Each service is designed to improve how customers find you, trust you, and contact you.</p>
          </Reveal>
          <div className="mt-10">
            <ServicesGrid />
          </div>
        </div>
      </section>

      <section className="section bg-brand-cloud dark:bg-slate-900">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">Why choose DEV TINUADE</p>
            <h2 className="h2">A sharp partner for businesses that want a better digital presence.</h2>
            <p className="lead">We combine strategy, build quality, and practical growth thinking so every project has a clear commercial purpose.</p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Reveal key={reason.title} delay={index * 0.08}>
                  <article className="h-full rounded-lg bg-white p-6 shadow-crisp dark:bg-slate-950 dark:ring-1 dark:ring-white/10">
                    <Icon className="text-2xl text-brand-blue" />
                    <h3 className="mt-4 text-lg font-extrabold">{reason.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{reason.body}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-white dark:bg-slate-950">
        <div className="container-page">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Process</p>
            <h2 className="h2">From first conversation to measurable growth.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {process.map((step, index) => (
              <Reveal key={step} delay={index * 0.08}>
                <div className="relative h-full rounded-lg border border-brand-line bg-white p-6 shadow-crisp dark:border-white/10 dark:bg-slate-900">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-brand-blue text-sm font-extrabold text-white">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-5 text-xl font-extrabold">{step}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    Clear decisions, focused execution, and practical next steps keep the project moving with confidence.
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-brand-cloud dark:bg-slate-900">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <Reveal>
              <p className="eyebrow">Portfolio</p>
              <h2 className="h2">Recent websites built for real businesses.</h2>
            </Reveal>
            <Link to="/contact" className="btn-secondary">
              Discuss a Project <FaArrowRight />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.08}>
                <article className="group relative overflow-hidden rounded-lg bg-white shadow-crisp transition duration-300 hover:-translate-y-1 hover:shadow-premium dark:bg-slate-950 dark:ring-1 dark:ring-white/10">
                  <div className="relative h-52 overflow-hidden border-b border-brand-line bg-brand-ink sm:h-56 md:h-60">
                    <iframe
                      title={`${project.title} preview`}
                      src={project.url}
                      className="portfolio-preview pointer-events-none border-0"
                      loading="lazy"
                      tabIndex="-1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/35 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-blue">{project.type}</p>
                    <h3 className="mt-3 text-2xl font-extrabold">{project.title}</h3>
                    <p className="text-sm font-bold text-brand-blue">{project.metric}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-brand-ink transition group-hover:text-brand-blue dark:text-white dark:group-hover:text-blue-200">
                      Visit live site <FaExternalLinkAlt className="text-xs" />
                    </span>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute inset-0"
                    aria-label={`Open ${project.title} live website`}
                  />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
