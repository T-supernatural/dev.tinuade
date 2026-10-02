import { useEffect, useRef, useState } from 'react';

export default function MultimediaLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [mediaReady, setMediaReady] = useState(false);
  const [reduced] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches);
  const skip = useRef(null);
  const finish = useRef(() => {});
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    skip.current?.focus();
    const duration = reduced ? 6000 : 11000;
    const start = performance.now();
    let frame, exitTimer, done = false;
    finish.current = () => {
      if (done) return;
      done = true;
      cancelAnimationFrame(frame);
      setProgress(100);
      setLeaving(true);
      exitTimer = setTimeout(onComplete, reduced ? 0 : 500);
    };
    const tick = (now) => {
      const value = Math.min(100, Math.floor((now - start) / duration * 100));
      setProgress(value);
      if (value === 100) finish.current();
      else frame = requestAnimationFrame(tick);
    };
    if (mediaReady || reduced) frame = requestAnimationFrame(tick);
    // Failed or slow media must never trap visitors.
    const fallback = setTimeout(() => finish.current(), 18000);
    const key = (event) => {
      if (event.key === 'Escape') finish.current();
      if (event.key === 'Tab') { event.preventDefault(); skip.current?.focus(); }
    };
    window.addEventListener('keydown', key);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(exitTimer);
      clearTimeout(fallback);
      window.removeEventListener('keydown', key);
      document.body.style.overflow = previous;
    };
  }, [onComplete, mediaReady, reduced]);
  return (
    <section className={`brand-intro brand-intro--cinema ${mediaReady || reduced ? 'brand-intro--playing' : ''} ${leaving ? 'brand-intro--exit' : ''}`} role="dialog" aria-modal="true" aria-label="Welcome to DEV TINUADE">
      {!reduced && <img className="brand-intro__film" src="/brand-reveal.gif" alt="" aria-hidden="true" onLoad={() => setMediaReady(true)} onError={() => setMediaReady(true)} />}
      <header className="brand-intro__header"><span>DIGITAL GROWTH AGENCY</span><button ref={skip} onClick={() => finish.current()}>Skip intro ↗</button></header>
      <div className="brand-intro__center">
        <div className="brand-intro__halo" aria-hidden="true" />
        <div className="brand-intro__logo"><img src="/dev-tinuade-logo.jpg" width="1024" height="1024" alt="DEV TINUADE" fetchPriority="high" /></div>
        <p className="brand-intro__tagline">Your vision. Our craft. <strong>Real growth.</strong></p>
        <p className="brand-intro__services">WEB <span>·</span> VISIBILITY <span>·</span> ADS <span>·</span> AI</p>
      </div>
      <footer className="brand-intro__footer">
        <div className="brand-intro__status"><span role="status">{leaving ? 'Welcome to DEV TINUADE' : 'Preparing your experience'}</span><span aria-hidden="true">{progress}%</span></div>
        <div className="brand-intro__track" role="progressbar" aria-label="Intro animation progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}><span style={{ transform: `scaleX(${progress / 100})` }} /></div>
        <p>BUILDING YOUR NEXT CHAPTER</p>
      </footer>
    </section>
  );
}
