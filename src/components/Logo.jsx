import { Link } from 'react-router-dom';

export default function Logo({ className = '', compact = false }) {
  return (
    <Link to="/" className={`inline-flex items-center gap-3 ${className}`} aria-label="DEV TINUADE home">
      <svg className="h-10 w-10 shrink-0" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path d="M9 47H20V31L9 38V47Z" fill="#05070B" />
        <path d="M24 47H35V17L24 24V47Z" fill="#05070B" />
        <path d="M32 47C43 47 51 39 51 28C51 23 49 18 45 15L39 21C42 23 44 27 44 31C44 37 39 41 33 41H28V47H32Z" fill="#0F3D91" />
        <path d="M39 10H57L53 28L48 23L38 33V22L45 16L39 10Z" fill="#0F3D91" />
      </svg>
      {!compact && (
        <span className="leading-none">
          <span className="block text-xl font-extrabold tracking-[0.18em] text-brand-ink dark:text-white sm:text-2xl">DEV TINUADE</span>
          <svg className="mt-1 h-3 w-full" viewBox="0 0 220 14" fill="none" aria-hidden="true">
            <path d="M18 11C65 2 151 1 202 11" stroke="#0F3D91" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </span>
      )}
    </Link>
  );
}
