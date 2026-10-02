const intro=document.querySelector('.intro');
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
let introFrame, introFailsafe, introRun=0;
let introAnimations=[];
const count=document.querySelector('#intro-count');
const phase=document.querySelector('#intro-phase');
const replay=document.querySelector('#replay');
const introSkip=document.querySelector('#skip-intro');
function animateIntro(selector,frames,options){
  const element=document.querySelector(selector);
  if(!element?.animate)return;
  introAnimations.push(element.animate(frames,{fill:'both',easing:'cubic-bezier(.22,1,.36,1)',...options}));
}
function finishIntro(returnFocus=false){
  introRun++;
  cancelAnimationFrame(introFrame);
  clearTimeout(introFailsafe);
  intro.classList.add('finished');
  intro.classList.remove('is-playing');
  intro.setAttribute('aria-hidden','true');
  document.body.classList.remove('intro-active');
  for(const animation of introAnimations)animation.cancel();
  introAnimations=[];
  if(returnFocus)replay.focus({preventScroll:true});
}
function playIntro(explicit=false){
  finishIntro();
  const run=++introRun;
  // The user explicitly requested this motion sequence; other page motion still respects the system setting.
  const calm=false;
  const duration=calm?2100:5300;
  if(explicit)window.scrollTo({top:0,behavior:'instant'});
  intro.classList.remove('finished');
  intro.classList.add('is-playing');
  intro.setAttribute('aria-hidden','false');
  document.body.classList.add('intro-active');
  count.textContent='00';
  phase.textContent='Shaping the idea';
  introSkip.focus({preventScroll:true});
  if(!calm){
    animateIntro('.intro-texture',[{transform:'scale(1.14) translateX(-3%)',opacity:.03},{transform:'scale(1.02) translateX(3%)',opacity:.1}],{duration:4500});
    animateIntro('.intro-light',[{transform:'translateX(-25%) rotate(-12deg)',opacity:.3},{transform:'translateX(20%) rotate(12deg)',opacity:1}],{duration:4400});
    animateIntro('.intro-kicker',[{opacity:0,transform:'translateY(20px)'},{opacity:1,transform:'translateY(0)'}],{duration:700,delay:200});
    animateIntro('.intro-logo-wrap',[{clipPath:'inset(0 100% 0 0)',transform:'translateY(35px) scale(.92)',opacity:0},{clipPath:'inset(0 0% 0 0)',transform:'translateY(0) scale(1)',opacity:1}],{duration:1500,delay:450});
    animateIntro('.intro-logo-wrap img',[{transform:'scale(1.08)'},{transform:'scale(1)'}],{duration:2700,delay:450});
    document.querySelectorAll('.intro-words span').forEach((el,i)=>{introAnimations.push(el.animate([{transform:'translateY(110%)',opacity:0},{transform:'translateY(0)',opacity:1}],{duration:700,delay:1750+i*240,fill:'both',easing:'cubic-bezier(.22,1,.36,1)'}));});
    animateIntro('.intro-tagline',[{opacity:0,transform:'translateY(12px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,delay:2600});
    for(const selector of ['.intro-content','.intro-top','.intro-bottom'])animateIntro(selector,[{opacity:1,transform:'translateY(0)'},{opacity:0,transform:'translateY(-25px)'}],{duration:500,delay:3900});
    animateIntro('.intro-texture',[{opacity:.1},{opacity:0}],{duration:550,delay:3950});
    animateIntro('.intro-light',[{opacity:1},{opacity:0}],{duration:550,delay:3950});
    animateIntro('.panel-left',[{transform:'translateX(0)'},{transform:'translateX(-101%)'}],{duration:900,delay:4200});
    animateIntro('.panel-right',[{transform:'translateX(0)'},{transform:'translateX(101%)'}],{duration:900,delay:4200});
    intro.style.background='transparent';
    for(const selector of ['.header','.hero-copy','.stage','main>.section'])animateIntro(selector,[{opacity:0,transform:'translateY(38px) scale(.97)'},{opacity:1,transform:'translateY(0) scale(1)'}],{duration:900,delay:4300});
  }else intro.style.background='#fff';
  animateIntro('.intro-track span',[{transform:'scaleX(0)'},{transform:'scaleX(1)'}],{duration:calm?1600:3900,easing:'linear'});
  const started=performance.now();
  function tick(now){
    if(run!==introRun)return;
    const progress=Math.min(1,(now-started)/(calm?1600:3900));
    count.textContent=String(Math.round(progress*100)).padStart(2,'0');
    phase.textContent=progress<.3?'Shaping the idea':progress<.65?'Designing the experience':progress<1?'Bringing it to life':'Your next chapter is ready';
    if(now-started>=duration){finishIntro(explicit);return;}
    introFrame=requestAnimationFrame(tick);
  }
  introFrame=requestAnimationFrame(tick);
  introFailsafe=setTimeout(()=>finishIntro(explicit),duration+800);
}
replay.addEventListener('click',()=>playIntro(true));
introSkip.addEventListener('click',()=>finishIntro(true));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&document.body.classList.contains('intro-active'))finishIntro(true);});
const introLogo=intro.querySelector('img');
const logoReady=introLogo.decode?introLogo.decode().catch(()=>{}):Promise.resolve();
if(document.body.dataset.page==='home')logoReady.then(()=>requestAnimationFrame(()=>requestAnimationFrame(()=>playIntro())));
document.querySelector('#motion-toggle')?.addEventListener('click',event=>{const paused=document.body.classList.toggle('motion-paused');event.currentTarget.setAttribute('aria-pressed',String(paused));event.currentTarget.textContent=paused?'Resume motion':'Pause motion';});
const menuToggle=document.querySelector('.menu-toggle');
const mainNav=document.querySelector('#main-nav');
menuToggle.addEventListener('click',()=>{const open=mainNav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.textContent=open?'Close':'Menu';});
document.addEventListener('keydown',event=>{if(event.key==='Escape'){mainNav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.textContent='Menu';}});
document.querySelector('#year').textContent=String(new Date().getFullYear());
if('IntersectionObserver' in window&&!reduced.matches){const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}},{threshold:.08});document.querySelectorAll('.section-heading,.service-card,.project,.about-heading,.about-copy').forEach(el=>{el.classList.add('reveal');observer.observe(el);});}
