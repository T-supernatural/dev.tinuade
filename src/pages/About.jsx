import { FaCheckCircle } from 'react-icons/fa';
import CTA from '../components/CTA.jsx';
import Reveal from '../components/Reveal.jsx';

export default function About() {
  return (
    <>
      <section className="section bg-[linear-gradient(135deg,#ffffff,#f5f8fc)]">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow">About DEV TINUADE</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-6xl">
              A digital growth partner for ambitious businesses.
            </h1>
            <p className="lead">
              DEV TINUADE helps businesses establish and grow their online presence through technology, innovation, and practical digital strategy.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="rounded-xl bg-white p-4 shadow-premium">
              <img src="/founder.jpg" alt="Founder of DEV TINUADE" className="h-[420px] w-full rounded-lg object-cover object-top" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {[
            ['Mission', 'Helping businesses establish and grow their online presence through technology and innovation.'],
            ['Vision', 'To become a trusted digital growth partner for businesses that want practical, modern, and measurable digital progress.'],
          ].map(([title, body]) => (
            <Reveal key={title}>
              <article className="h-full rounded-lg border border-brand-line bg-white p-8 shadow-crisp">
                <h2 className="text-2xl font-extrabold">{title}</h2>
                <p className="mt-4 leading-8 text-slate-600">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section bg-brand-cloud">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">Founder story</p>
            <h2 className="h2">Built from a belief that every serious business deserves a serious digital presence.</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="rounded-lg bg-white p-8 shadow-crisp">
              <p className="leading-8 text-slate-600">
                DEV TINUADE was created to help businesses move beyond basic online visibility and into digital systems that win trust, create enquiries, and support growth. The founder section is ready to be edited with a deeper personal story, credentials, and client results as the brand grows.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {['Strategy-first thinking', 'Clean professional execution', 'Simple client communication', 'Growth-focused delivery'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2 text-sm font-bold text-slate-700">
                    <FaCheckCircle className="text-brand-blue" /> {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
