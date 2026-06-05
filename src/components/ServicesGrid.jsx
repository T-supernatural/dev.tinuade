import { services } from '../data/site.js';
import Reveal from './Reveal.jsx';

export default function ServicesGrid({ detailed = false }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <Reveal key={service.title} delay={index * 0.08}>
            <article className="group h-full rounded-lg border border-brand-line bg-white p-6 shadow-crisp transition duration-300 hover:-translate-y-1 hover:border-brand-blue hover:shadow-premium dark:border-white/10 dark:bg-slate-900 dark:hover:border-blue-300">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-blue-50 text-xl text-brand-blue transition group-hover:bg-brand-blue group-hover:text-white dark:bg-blue-500/15 dark:text-blue-200 dark:group-hover:bg-brand-blue dark:group-hover:text-white">
                <Icon />
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-brand-ink dark:text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{service.description}</p>
              {detailed && (
                <ul className="mt-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li>Built around business outcomes</li>
                  <li>Clear delivery process</li>
                  <li>Designed for long-term growth</li>
                </ul>
              )}
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
