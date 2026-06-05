import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheckCircle, FaPlay } from 'react-icons/fa';
import Logo from './Logo.jsx';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f5f8fc_48%,#eaf1fb_100%)] px-5 pb-16 pt-14 transition-colors sm:px-6 lg:px-8 lg:pb-24 lg:pt-20 dark:bg-[linear-gradient(135deg,#020617_0%,#0f172a_52%,#07132a_100%)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent" />
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
          <div className="inline-flex items-center gap-3 rounded-md border border-brand-line bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-crisp dark:border-white/10 dark:bg-white/8 dark:text-slate-200">
            <Logo compact />
            Digital growth agency
          </div>
          <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[1.02] text-brand-ink sm:text-6xl lg:text-7xl dark:text-white">
            Helping Businesses Grow Online
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Professional websites, Google visibility, digital marketing, and AI-powered solutions designed to help businesses attract more customers and scale confidently.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="btn-primary">
              Get Started <FaArrowRight />
            </Link>
            <Link to="/services" className="btn-secondary">
              <FaPlay className="text-brand-blue" /> View Services
            </Link>
          </div>
          <div className="mt-9 grid gap-3 text-sm font-semibold text-slate-700 sm:grid-cols-3 dark:text-slate-200">
            {['Premium websites', 'Google-ready visibility', 'AI-enabled workflows'].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <FaCheckCircle className="text-brand-blue" /> {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-[1.5rem] bg-brand-blue p-3 sm:p-4 lg:min-h-[420px] lg:rounded-[2rem]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="absolute inset-4 hidden rounded-[1.5rem] bg-white shadow-premium dark:bg-slate-950 lg:block" />
          <div className="relative rounded-xl border border-brand-line bg-brand-cloud p-4 shadow-premium sm:p-5 lg:absolute lg:left-8 lg:right-8 lg:top-8 lg:shadow-none dark:border-white/10 dark:bg-slate-900">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Logo compact />
              <span className="rounded-md bg-brand-blue px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Growth OS</span>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:mt-7 lg:gap-4">
              {['Website', 'Google', 'AI'].map((label, index) => (
                <div key={label} className="rounded-lg bg-white p-4 shadow-crisp dark:bg-slate-950">
                  <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700">
                    <motion.div
                      className="h-2 rounded-full bg-brand-blue"
                      initial={{ width: 0 }}
                      animate={{ width: `${62 + index * 12}%` }}
                      transition={{ duration: 1.1, delay: 0.35 + index * 0.1 }}
                    />
                  </div>
                  <p className="mt-4 text-sm font-extrabold">{label}</p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Customer growth channel</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-4 rounded-xl bg-brand-ink p-5 text-white shadow-premium sm:p-6 lg:absolute lg:bottom-8 lg:left-8 lg:right-8 lg:mt-0">
            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              {[
                ['4', 'Core services'],
                ['24/7', 'Digital presence'],
                ['1:1', 'Growth support'],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="text-2xl font-bold sm:text-3xl">{value}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-300 sm:text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
