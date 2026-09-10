import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const steps = ['hero', 'story', 'folio', 'storyteller', 'client', 'contact'];

export default function App() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  const goToNext = () => setCurrentStepIndex(p => Math.min(steps.length - 1, p + 1));
  const goToPrev = () => setCurrentStepIndex(p => Math.max(0, p - 1));

  // Scroll to top when changing steps
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStepIndex]);

  // Lock body scroll when CV modal is open
  useEffect(() => {
    if (isCvModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isCvModalOpen]);

  return (
    <div className="bg-surface text-on-surface min-h-full flex flex-col antialiased selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-hidden">
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/85 backdrop-blur-xl shadow-[0_2px_12px_rgba(44,40,37,0.04)]">
        <div className="h-16 px-margin-mobile flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <div className="w-7 h-7 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-[0_2px_6px_rgba(105,0,17,0.25)]">
              <span className="font-headline-sm text-label-sm tracking-wider font-semibold">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-lg text-label-md uppercase tracking-[0.14em] text-on-surface font-semibold truncate max-w-[200px]">Akshita Dalsaniya</span>
              <span className="font-body-sm text-[11px] text-primary italic leading-none font-medium">ANG by Aangi Shah Portfolio</span>
            </div>
          </div>
          <div className="flex items-center gap-space-xs">
            <button 
              onClick={() => setIsCvModalOpen(true)}
              className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center shadow-[0_2px_4px_rgba(44,40,37,0.08)] transition-transform hover:scale-105"
              aria-label="View Resume"
            >
              <span className="font-label-sm text-on-surface-variant font-bold text-[12px] tracking-widest">CV</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_2px_4px_rgba(44,40,37,0.08)]">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full bg-surface pt-24 pb-32 min-h-screen flex flex-col">
        <AnimatePresence mode="wait">
          
          {/* SECTION 1 — HERO */}
          {currentStepIndex === 0 && (
            <motion.section 
              key="hero"
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}
              className="px-margin-mobile flex-1 flex flex-col items-center justify-center text-center py-space-xl"
            >
              {/* Artisanal Wax Seal Motif */}
              <div className="relative mb-space-md group cursor-default">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-[0_4px_14px_rgba(105,0,17,0.32)] transition-transform duration-300 transform group-hover:scale-105">
                  <span className="material-symbols-outlined text-secondary-fixed text-[26px]">save_as</span>
                </div>
                <div className="absolute -inset-1 rounded-full bg-secondary-fixed-dim/20 -z-10 blur-[2px]"></div>
              </div>
              
              {/* Editorial Header Badge */}
              <div className="inline-flex items-center gap-space-2xs px-space-sm py-1 rounded-full bg-surface-container mb-space-sm shadow-[inset_0_1px_2px_rgba(44,40,37,0.05)]">
                <span className="material-symbols-outlined text-secondary text-[14px]">auto_stories</span>
                <span className="font-label-sm text-label-sm uppercase tracking-[0.16em] text-secondary font-medium">Bespoke Correspondence</span>
              </div>
              
              <h1 className="font-headline-2xl-mobile text-headline-2xl-mobile text-on-surface font-normal leading-tight max-w-[340px] mb-space-sm">
                Every Application Deserves a Seal
              </h1>
              
              <p className="font-body-md text-body-md text-on-surface-variant max-w-[320px] mx-auto leading-relaxed">
                A portfolio curated for ANG by Aangi Shah · Storytelling & Warm Client Experience by Akshita Dalsaniya
              </p>
              
              {/* Subtle Deckled Divider */}
              <div className="w-24 h-[1px] bg-outline-variant/60 mt-space-xl"></div>
            </motion.section>
          )}

          {/* SECTION 2 — HANDWRITTEN-STYLE NOTE */}
          {currentStepIndex === 1 && (
            <motion.section 
              key="story"
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}
              className="px-margin-mobile flex-1 flex flex-col justify-center py-space-lg"
            >
              <div className="relative bg-surface-container-lowest rounded-lg p-space-lg sm:p-space-xl shadow-[0_4px_20px_rgba(44,40,37,0.06),0_1px_3px_rgba(44,40,37,0.04)] overflow-hidden">
                {/* Deckle/Watermark Ambient Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
                
                {/* Card Top Wax Seal Accent */}
                <div className="flex justify-center -mt-space-xs mb-space-md">
                  <div className="w-8 h-8 rounded-full bg-primary-container text-secondary-fixed flex items-center justify-center shadow-[0_3px_6px_rgba(107,20,27,0.22)]">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                  </div>
                </div>
                
                {/* Letter Body */}
                <div className="font-body-lg text-body-lg text-[#2C2825] italic leading-loose tracking-wide space-y-space-md text-left">
                  <p className="font-headline-sm text-headline-sm not-italic font-medium text-primary">
                    Dear Aangi,
                  </p>
                  <p>
                    There's a quiet magic in your stationery, every ANG by Aangi Shah piece feels intentional, like it was held with care and loved before it reached its owner. Storytelling should feel the same way: personal, never rushed. As a fresher with a storyteller's heart and a love for warm client experiences, I'd love to help share ANG's magic. This note was written with the same care you pour into every piece.
                  </p>
                  <div className="pt-space-xs flex flex-col items-start not-italic">
                    <span className="font-label-sm text-label-sm uppercase tracking-[0.14em] text-secondary font-semibold">From the desk of</span>
                    <span className="font-headline-md text-headline-md text-on-surface font-serif mt-space-3xs">Akshita Dalsaniya</span>
                  </div>
                </div>
                
                {/* Corner Tactile Stamp Detail */}
                <div className="mt-space-lg pt-space-sm flex items-center justify-between text-on-surface-variant/60">
                  <div className="flex items-center gap-space-2xs">
                    <span className="material-symbols-outlined text-[16px]">bookmark_heart</span>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest">ANG Curated</span>
                  </div>
                  <span className="font-body-sm text-body-sm italic">Folio No. 01</span>
                </div>
              </div>
            </motion.section>
          )}

          {/* SECTION 3 — FLATLAY GALLERY */}
          {currentStepIndex === 2 && (
            <motion.section 
              key="folio"
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col justify-center py-space-lg"
            >
              <div className="px-margin-mobile mb-space-md flex items-end justify-between">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-[0.16em] text-secondary font-semibold block mb-1">Archival Visuals</span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface">Atelier Vignettes</h2>
                </div>
                <span className="font-body-sm text-body-sm italic text-on-surface-variant">3 Handcrafted Frames</span>
              </div>
              
              {/* Curated Horizontal Flatlay Reel */}
              <div className="flex gap-space-md overflow-x-auto px-margin-mobile pb-space-sm snap-x snap-mandatory">
                {/* Image 1 */}
                <div className="snap-center shrink-0 w-[270px] bg-surface-container-low rounded-lg p-space-xs shadow-[0_3px_12px_rgba(44,40,37,0.05)] flex flex-col">
                  <div className="relative w-full h-72 rounded-md overflow-hidden bg-surface-container">
                    <img alt="Folded letter tied with twine, sealed with deep red wax stamp" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYA3QYLCwFbCg4ua7mlPhSqRnECRlU83wjTQLAsfwsDnnqlTWkyb-zzDrv84b7Nj3OdLGGxe9JXS4_8C-r7xAeZDcnSStartNWLr7MnsPPNVyF0BzggT_P0NPtKaUSoUs_Fm9zD9Dc2RhB1A5EVeuR9aTIjYWUSdOSDJXw2JNB_LjBY3PxxouukV7n7NesXbjRc7oKUqI61uhk6w0cS1Z3_akyadhs99X7GIWdTQgf4EKvjtywYio1"/>
                    <div className="absolute bottom-2 left-2 px-2 py-1 rounded bg-surface/90 backdrop-blur-sm shadow-sm">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-medium">01 · Sealed Bond</span>
                    </div>
                  </div>
                  <div className="p-space-xs flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-surface mt-1">Twine & Seal</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant italic mt-space-3xs">Folded handmade cotton sheet secured with vermillion lacquer seal.</p>
                  </div>
                </div>
                
                {/* Image 2 */}
                <div className="snap-center shrink-0 w-[270px] bg-surface-container-low rounded-lg p-space-xs shadow-[0_3px_12px_rgba(44,40,37,0.05)] flex flex-col">
                  <div className="relative w-full h-72 rounded-md overflow-hidden bg-surface-container">
                    <img alt="Hand dripping warm wax with candle onto folded letter" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpX7CAaSD8lCxp-dKWxGCI0xHdMtj9SVDuUbnytSjnL6NKa1HKQfv5A_cf9JedoF0GBvrPbJwFkYthWHxQdk2lrqKKwhW2Unam4_fiCYOFOi79InypNQ1stnRGWZxwZ-5QOUYIHJYTthqEnWqEnW4JKok3VKiSn2R0xNposdyD24Gt1yn8b1tu1bgx3lgtTQLLb-UvmUeS9bnxlUuV1Q4xIsrENSqEMluj8UVKcbGxdsqG5U7LQbMw"/>
                    <div className="absolute bottom-2 left-2 px-2 py-1 rounded bg-surface/90 backdrop-blur-sm shadow-sm">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-medium">02 · The Ritual</span>
                    </div>
                  </div>
                  <div className="p-space-xs flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-surface mt-1">Living Flame</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant italic mt-space-3xs">Dripping deliberate warm wax onto heavyweight paper stock.</p>
                  </div>
                </div>
                
                {/* Image 3 */}
                <div className="snap-center shrink-0 w-[270px] bg-surface-container-low rounded-lg p-space-xs shadow-[0_3px_12px_rgba(44,40,37,0.05)] flex flex-col">
                  <div className="relative w-full h-72 rounded-md overflow-hidden bg-surface-container">
                    <img alt="Cream envelope with wax seal on resume/document" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZJnyCVxSCxCIX-rUwlUtwNi0yMPCk_A0wcDiCBoxrQ-VgniiwRW51Kn6qGBfvVwbsX_LCxkC0vrJQ1mA8aVfEiUGN8hURGb4tNbqEC3q0lBElxmZALy8NBoJCX6XCfChgnmaeJCsVq03yjH1C0iRgy3qAREjLpTQCkKWG5Kkhtt-D3e8jIQKThPOpYVjKaaWS-6QT8CZZi48tVNkuqAntSCOei6pvakW3_lsnYYHTDc6auOtX1H7E"/>
                    <div className="absolute bottom-2 left-2 px-2 py-1 rounded bg-surface/90 backdrop-blur-sm shadow-sm">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-medium">03 · The Dispatch</span>
                    </div>
                  </div>
                  <div className="p-space-xs flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-surface mt-1">Gilded Folio</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant italic mt-space-3xs">Cream deckled envelope stamped with custom house insignia.</p>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {/* SECTION 4 — STORYTELLER SAMPLES */}
          {currentStepIndex === 3 && (
            <motion.section 
              key="storyteller"
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}
              className="px-margin-mobile flex-1 py-space-lg"
            >
              <div className="text-center mb-space-xl">
                <span className="font-label-sm text-label-sm uppercase tracking-[0.18em] text-secondary font-semibold block mb-1">Portfolio Disciplines</span>
                <h2 className="font-headline-xl-mobile text-headline-xl-mobile text-on-surface">Storyteller Samples</h2>
              </div>
              
              <div className="flex flex-col space-y-space-xl">
                
                {/* SUBSECTION: Reel Concepts */}
                <div className="flex flex-col space-y-space-md">
                  <div className="flex items-center gap-space-xs pb-space-2xs">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <h3 className="font-headline-md text-headline-md text-on-surface">Reel Concepts</h3>
                  </div>
                  
                  {/* Reel Concept 1 */}
                  <div className="bg-surface-container-low rounded-lg p-space-md shadow-[0_2px_8px_rgba(44,40,37,0.04)]">
                    <div className="flex items-center justify-between mb-space-xs">
                      <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">Reel Concept 1</span>
                      <span className="material-symbols-outlined text-primary text-[18px]">movie_edit</span>
                    </div>
                    <p className="font-headline-sm text-headline-sm text-on-surface mb-space-xs font-serif">
                      “I need to brand my mithai” / Me: say less
                    </p>
                    <div className="bg-surface-container-lowest rounded-md p-space-sm my-space-xs space-y-space-2xs">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium block">Shot Plan</span>
                      <ul className="font-body-sm text-body-sm text-on-surface space-y-1 pl-4 list-disc">
                        <li>Hand pressing a mithai stamp into fresh mithai</li>
                        <li>The embossed design revealed</li>
                        <li>Finished branded box, tied and ready</li>
                      </ul>
                    </div>
                    <div className="mt-space-xs">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-medium block mb-1">Caption</span>
                      <p className="font-body-md text-body-md text-on-surface italic bg-surface-container/60 p-space-xs rounded-md">
                        “Give your mithai a signature of its own 🤎✨ Name, monogram, logo — because the smallest detail leaves the sweetest impression. Save this for your next brand box.”
                      </p>
                    </div>
                  </div>

                  {/* Reel Concept 2 */}
                  <div className="bg-surface-container-low rounded-lg p-space-md shadow-[0_2px_8px_rgba(44,40,37,0.04)]">
                    <div className="flex items-center justify-between mb-space-xs">
                      <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">Reel Concept 2</span>
                      <span className="material-symbols-outlined text-primary text-[18px]">movie_edit</span>
                    </div>
                    <p className="font-headline-sm text-headline-sm text-on-surface mb-space-xs font-serif">
                      “POV: you just found the missing piece for your wedding stationery”
                    </p>
                    <div className="bg-surface-container-lowest rounded-md p-space-sm my-space-xs space-y-space-2xs">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium block">Shot Plan</span>
                      <ul className="font-body-sm text-body-sm text-on-surface space-y-1 pl-4 list-disc">
                        <li>Melting wax</li>
                        <li>Pressing the seal</li>
                        <li>Finished seal on a real invite, close-up</li>
                      </ul>
                    </div>
                    <div className="mt-space-xs">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-medium block mb-1">Caption</span>
                      <p className="font-body-md text-body-md text-on-surface italic bg-surface-container/60 p-space-xs rounded-md">
                        “Every love story deserves to be sealed properly 💌 Handcrafted, one wax drop at a time. #HappyClients #WeddingStationery”
                      </p>
                    </div>
                  </div>

                  {/* Reel Concept 3 */}
                  <div className="bg-surface-container-low rounded-lg p-space-md shadow-[0_2px_8px_rgba(44,40,37,0.04)]">
                    <div className="flex items-center justify-between mb-space-xs">
                      <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">Reel Concept 3</span>
                      <span className="material-symbols-outlined text-primary text-[18px]">movie_edit</span>
                    </div>
                    <p className="font-headline-sm text-headline-sm text-on-surface mb-space-xs font-serif">
                      “POV: a client walks in while we're filming”
                    </p>
                    <div className="bg-surface-container-lowest rounded-md p-space-sm my-space-xs space-y-space-2xs">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium block">Shot Plan</span>
                      <ul className="font-body-sm text-body-sm text-on-surface space-y-1 pl-4 list-disc">
                        <li>Chaotic behind-the-scenes moment</li>
                        <li>Team laughing, resetting</li>
                        <li>Calm, polished finished product</li>
                      </ul>
                    </div>
                    <div className="mt-space-xs">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-medium block mb-1">Caption</span>
                      <p className="font-body-md text-body-md text-on-surface italic bg-surface-container/60 p-space-xs rounded-md">
                        “Behind every 'handcrafted for you' box, there's a slightly chaotic, very loving team 🫶 #BehindTheScenes #TeamAng”
                      </p>
                    </div>
                  </div>
                </div>

                {/* SUBSECTION: Caption Rewrites */}
                <div className="flex flex-col space-y-space-md">
                  <div className="flex items-center gap-space-xs pb-space-2xs">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    <h3 className="font-headline-md text-headline-md text-on-surface">Caption Rewrites</h3>
                  </div>
                  
                  {/* Caption Rewrite 1 */}
                  <div className="bg-surface-container-low rounded-lg p-space-md shadow-[0_2px_8px_rgba(44,40,37,0.04)] space-y-space-sm">
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold block">Caption Rewrite 1 · Wedding Suite</span>
                    <div className="space-y-space-2xs">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">Original</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant bg-surface-container-high/60 p-space-xs rounded line-through opacity-85">
                        From save-the-dates to thank-you notes — here's your complete wedding stationery checklist, curated with love by ANG by Aangi Shah. Everything you see can be customised to match your wedding vibe — the colors, the fonts, the language, the mood.
                      </p>
                    </div>
                    <div className="space-y-space-2xs">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-medium">Rewrite</span>
                      <p className="font-body-md text-body-md text-on-surface bg-surface-container-lowest p-space-sm rounded-md italic shadow-sm">
                        “Save-the-date to thank-you note — we've got your whole wedding stationery journey covered. Soft and romantic or bold and modern, your vibe, your paper. 🤍✨”
                      </p>
                    </div>
                  </div>

                  {/* Caption Rewrite 2 */}
                  <div className="bg-surface-container-low rounded-lg p-space-md shadow-[0_2px_8px_rgba(44,40,37,0.04)] space-y-space-sm">
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold block">Caption Rewrite 2 · Edible Branding</span>
                    <div className="space-y-space-2xs">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">Original</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant bg-surface-container-high/60 p-space-xs rounded line-through opacity-85">
                        Your packaging gets seen. But what if your food could carry your brand too? From chocolate stamps and mithai embossing to coffee stencils, custom ice, pasta stamps and branded cookies — edible branding turns your hero products into memorable brand touchpoints.
                      </p>
                    </div>
                    <div className="space-y-space-2xs">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-medium">Rewrite</span>
                      <p className="font-body-md text-body-md text-on-surface bg-surface-container-lowest p-space-sm rounded-md italic shadow-sm">
                        “Your box isn't the only thing that can carry your brand. Your food can too. 🍫☕ Chocolate, mithai, coffee, pasta, ice — branded, one bite at a time.”
                      </p>
                    </div>
                  </div>
                </div>

                {/* SUBSECTION: Mock Post */}
                <div className="flex flex-col space-y-space-xs">
                  <div className="flex items-center gap-space-xs pb-space-2xs">
                    <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                    <h3 className="font-headline-md text-headline-md text-on-surface">Mock Post</h3>
                  </div>
                  <div className="bg-surface-container-lowest rounded-lg p-space-lg shadow-[0_4px_16px_rgba(44,40,37,0.05)] space-y-space-sm">
                    <div className="flex items-center gap-space-xs">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-on-primary">
                        <span className="font-label-sm text-[10px]">A</span>
                      </div>
                      <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold">ANG by Aangi Shah</span>
                    </div>
                    
                    {/* Mock Post Images */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                      <img 
                        src="/src/a_museum_grade_high_fashion_editorial_campaign_photograph_4_5_portrait.png"
                        alt="ANG by Aangi Shah Mock Post Concept 1" 
                        className="w-full sm:w-1/2 aspect-[4/5] object-cover rounded-md shadow-sm"
                        referrerPolicy="no-referrer"
                      />
                      <img 
                        src="/src/a_museum_grade_high_fashion_editorial_campaign_photograph_4_5_portrait (1).png"
                        alt="ANG by Aangi Shah Mock Post Concept 2" 
                        className="w-full sm:w-1/2 aspect-[4/5] object-cover rounded-md shadow-sm"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <p className="font-headline-sm text-headline-sm text-primary font-serif pt-2">
                      This isn't just an invite. It's the first 'yes' of your wedding.
                    </p>
                    <p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
                      Every wedding starts long before the big day — it starts the moment someone opens your invite and feels it. That's the ANG promise: paper that carries emotion, not just information. 🤍✨
                    </p>
                    <div className="pt-space-xs">
                      <p className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                        #AngByAangiShah #WeddingStationery #HandcraftedInIndia #EveryDetailTellsAStory
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {/* SECTION 5 — CLIENT EXPERIENCE SAMPLES */}
          {currentStepIndex === 4 && (
            <motion.section 
              key="client"
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}
              className="px-margin-mobile flex-1 py-space-lg"
            >
              <div className="text-center mb-space-xl">
                <span className="font-label-sm text-label-sm uppercase tracking-[0.18em] text-secondary font-semibold block mb-1">Portfolio Disciplines</span>
                <h2 className="font-headline-xl-mobile text-headline-xl-mobile text-on-surface">Client Experience Samples</h2>
              </div>
              
              <div className="flex flex-col space-y-space-xl">
                
                {/* SUBSECTION: Case Studies */}
                <div className="flex flex-col space-y-space-md">
                  <div className="flex items-center gap-space-xs pb-space-2xs">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    <h3 className="font-headline-md text-headline-md text-on-surface">Case Studies</h3>
                  </div>
                  
                  {/* Case Study 1 */}
                  <div className="bg-surface-container-low rounded-lg p-space-md shadow-[0_2px_8px_rgba(44,40,37,0.04)] space-y-space-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">Case Study 1</span>
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Business Fair</span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-serif">The Joy Toy</h4>
                    <div className="text-body-sm font-body-sm text-on-surface space-y-2 pt-1">
                      <p><strong className="font-semibold text-on-surface">Situation:</strong> Co-led a business stall, The Joy Toy, at my school's Business Fair during higher secondary education.</p>
                      <p><strong className="font-semibold text-on-surface">What I Owned:</strong> Co-leadership of the venture — concept development, branding, and team coordination.</p>
                      <p><strong className="font-semibold text-on-surface">What I Did:</strong> Built the venture from idea to execution alongside my co-lead, driving both the creative concept and the branding.</p>
                      <p><strong className="font-semibold text-on-surface">Result:</strong> Earned the second-highest revenue among all participating ventures and received specific appreciation for the creativity behind the concept and branding.</p>
                      <div className="bg-surface-container p-space-xs rounded mt-space-xs">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold block mb-1">Why It Matters for ANG</span>
                        <p className="italic text-on-surface-variant">It taught me creativity and business aren't separate — they become far more powerful together. That's the exact instinct a brand like ANG by Aangi Shah needs.</p>
                      </div>
                    </div>
                  </div>

                  {/* Case Study 2 */}
                  <div className="bg-surface-container-low rounded-lg p-space-md shadow-[0_2px_8px_rgba(44,40,37,0.04)] space-y-space-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">Case Study 2</span>
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Social Initiative</span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-serif">Project L³ (Love. Laughter. Life.)</h4>
                    <div className="text-body-sm font-body-sm text-on-surface space-y-2 pt-1">
                      <p><strong className="font-semibold text-on-surface">Situation:</strong> Founded and lead a personal initiative advancing disability inclusion, built on a full 5-phase strategic roadmap.</p>
                      <p><strong className="font-semibold text-on-surface">What I Owned:</strong> The entire roadmap end-to-end — Research & Understanding, Community & Collaboration, Solutions & Innovation, Implementation, and A More Inclusive Future.</p>
                      <p><strong className="font-semibold text-on-surface">What I Did:</strong> Ran cross-sector stakeholder panels, community workshops and listening sessions, aligned institutional partners, and conducted needs-mapping and lived-experience interviews.</p>
                      <p><strong className="font-semibold text-on-surface">Result:</strong> Phase 1 is active and the full roadmap is defined and in motion — a real system, not just an idea on paper.</p>
                      <div className="bg-surface-container p-space-xs rounded mt-space-xs">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold block mb-1">Why It Matters for ANG</span>
                        <p className="italic text-on-surface-variant">This shows I can manage relationships across very different stakeholders and follow a plan all the way through — exactly what 'takes ownership and follows things through' means.</p>
                      </div>
                    </div>
                  </div>

                  {/* Case Study 3 */}
                  <div className="bg-surface-container-low rounded-lg p-space-md shadow-[0_2px_8px_rgba(44,40,37,0.04)] space-y-space-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">Case Study 3</span>
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Vietnam Internship</span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface font-serif">HUMG International Research Internship</h4>
                    <div className="text-body-sm font-body-sm text-on-surface space-y-2 pt-1">
                      <p><strong className="font-semibold text-on-surface">Situation:</strong> Selected for an international research internship on Sustainable Development in the Industrial Sector at Hanoi University of Mining and Geology, Vietnam (Aug 30 – Sep 29, 2025). Scored 3.7/4.0.</p>
                      <p><strong className="font-semibold text-on-surface">What I Owned:</strong> Served as a coordinator for collaborative activities within a cross-cultural team.</p>
                      <p><strong className="font-semibold text-on-surface">What I Did:</strong> Learned basic Vietnamese to connect with the local community, participated in discussions beyond the classroom, and reached out to local NGOs for potential community-impact work.</p>
                      <p><strong className="font-semibold text-on-surface">Result:</strong> Built trust and communicated effectively across language and cultural barriers in a completely unfamiliar environment.</p>
                      <div className="bg-surface-container p-space-xs rounded mt-space-xs">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold block mb-1">Why It Matters for ANG</span>
                        <p className="italic text-on-surface-variant">Meaningful work — research or client work — begins with understanding people before trying to solve their problem. That's the same instinct great client experience needs.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SUBSECTION: Mock Client-Scenario Response */}
                <div className="flex flex-col space-y-space-xs">
                  <div className="flex items-center gap-space-xs pb-space-2xs">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <h3 className="font-headline-md text-headline-md text-on-surface">Mock Client-Scenario Response</h3>
                  </div>
                  <div className="bg-surface-container-lowest rounded-lg p-space-lg shadow-[0_4px_16px_rgba(44,40,37,0.05)] space-y-space-sm">
                    <div className="flex items-center justify-between pb-space-xs">
                      <div className="flex items-center gap-space-2xs">
                        <span className="material-symbols-outlined text-secondary text-[18px]">forum</span>
                        <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">Live Simulation · Proactive Transparency</span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Resolution Time: Immediate</span>
                    </div>
                    <div className="bg-surface-container-low p-space-md rounded-md">
                      <p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
                        “Hi [Name], thank you for flagging this — I understand the frustration, you were counting on this being ready in time. I've checked with production directly: your order is at [stage], and I'm personally tracking it from here. I'll have a firm update for you by [time], and if there's any risk of delay I'll tell you immediately rather than let you wonder. Is there anything time-sensitive on your end I should know, so we prioritize correctly?”
                      </p>
                    </div>
                    <div className="pt-space-xs flex items-center gap-space-xs text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-[18px]">verified_user</span>
                      <span className="font-body-sm text-body-sm italic">De-escalation rooted in respect, immediate accountability, and calm clarity.</span>
                    </div>
                  </div>
                </div>

                {/* SUBSECTION: Client Onboarding Flow */}
                <div className="flex flex-col space-y-space-xs">
                  <div className="flex items-center gap-space-xs pb-space-2xs">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    <h3 className="font-headline-md text-headline-md text-on-surface">Client Onboarding Flow</h3>
                  </div>
                  <div className="bg-surface-container-low rounded-lg p-space-md shadow-[0_2px_8px_rgba(44,40,37,0.04)] space-y-space-sm">
                    <div className="space-y-space-sm pt-space-xs">
                      {/* Step 1 */}
                      <div className="flex gap-space-sm items-start">
                        <div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 font-label-sm font-semibold mt-1 shadow-sm">
                          1
                        </div>
                        <div className="flex flex-col">
                          <span className="font-headline-sm text-headline-sm text-on-surface">Inquiry received</span>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Acknowledge within hours, ask about occasion/timeline/vibe.</p>
                        </div>
                      </div>
                      {/* Step 2 */}
                      <div className="flex gap-space-sm items-start">
                        <div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 font-label-sm font-semibold mt-1 shadow-sm">
                          2
                        </div>
                        <div className="flex flex-col">
                          <span className="font-headline-sm text-headline-sm text-on-surface">Discovery chat</span>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Understand the story, not just the specs.</p>
                        </div>
                      </div>
                      {/* Step 3 */}
                      <div className="flex gap-space-sm items-start">
                        <div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 font-label-sm font-semibold mt-1 shadow-sm">
                          3
                        </div>
                        <div className="flex flex-col">
                          <span className="font-headline-sm text-headline-sm text-on-surface">Design proposal</span>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Mockup + timeline + price, one revision built in.</p>
                        </div>
                      </div>
                      {/* Step 4 */}
                      <div className="flex gap-space-sm items-start">
                        <div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 font-label-sm font-semibold mt-1 shadow-sm">
                          4
                        </div>
                        <div className="flex flex-col">
                          <span className="font-headline-sm text-headline-sm text-on-surface">Production check-ins</span>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Proactive updates, not just when asked.</p>
                        </div>
                      </div>
                      {/* Step 5 */}
                      <div className="flex gap-space-sm items-start">
                        <div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 font-label-sm font-semibold mt-1 shadow-sm">
                          5
                        </div>
                        <div className="flex flex-col">
                          <span className="font-headline-sm text-headline-sm text-on-surface">Delivery + follow-up</span>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Confirm arrival, ask for a review, keep the door open.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {/* SECTION 6 — CONTACT */}
          {currentStepIndex === 5 && (
            <motion.section 
              key="contact"
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}
              className="px-margin-mobile flex-1 min-h-[50vh] flex flex-col items-center justify-center text-center py-space-lg"
            >
              <div className="text-center w-full max-w-md mx-auto">
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Contact & Personal Details</h2>
                <div className="flex flex-col items-center gap-space-sm font-body-md text-on-surface-variant bg-surface-container-lowest p-space-lg rounded-xl shadow-[0_4px_16px_rgba(44,40,37,0.05)] border border-outline-variant/30">
                  <p className="w-full flex flex-col sm:flex-row sm:justify-between items-center gap-1 sm:gap-4 border-b border-outline-variant/20 pb-2">
                    <strong className="text-on-surface font-semibold tracking-wide uppercase text-[11px]">Email</strong>
                    <a href="mailto:dalsaniyaakshita1@gmail.com" className="hover:text-primary transition-colors">dalsaniyaakshita1@gmail.com</a>
                  </p>
                  <p className="w-full flex flex-col sm:flex-row sm:justify-between items-center gap-1 sm:gap-4 border-b border-outline-variant/20 pb-2">
                    <strong className="text-on-surface font-semibold tracking-wide uppercase text-[11px]">Contact No.</strong>
                    <span>+91 9725433903</span>
                  </p>
                  <p className="w-full flex flex-col sm:flex-row sm:justify-between items-center gap-1 sm:gap-4 border-b border-outline-variant/20 pb-2">
                    <strong className="text-on-surface font-semibold tracking-wide uppercase text-[11px]">LinkedIn</strong>
                    <a href="https://linkedin.com/in/akshita-dalsaniya" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">linkedin.com/in/akshita-dalsaniya</a>
                  </p>
                  <p className="w-full flex flex-col sm:flex-row sm:justify-between items-center gap-1 sm:gap-4 pb-1">
                    <strong className="text-on-surface font-semibold tracking-wide uppercase text-[11px]">Instagram</strong>
                    <a href="https://www.instagram.com/akshiita.patel?stkn=MXcwcXN1Ymt5cGxhZA==" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">@akshiita.patel</a>
                  </p>
                </div>
              </div>
            </motion.section>
          )}
          
        </AnimatePresence>

        {/* Global Footer attached to the bottom of whatever step is visible */}
        <footer className="px-margin-mobile pt-space-md pb-space-lg flex flex-col items-center text-center mt-auto">
          <div className="w-full flex items-center justify-center gap-space-sm mb-space-md">
            <div className="h-[1px] flex-1 bg-outline-variant/40"></div>
            <div className="w-7 h-7 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-[15px]">verified</span>
            </div>
            <div className="h-[1px] flex-1 bg-outline-variant/40"></div>
          </div>
          <p className="font-script-callout text-script-callout text-primary italic mb-space-3xs">
            Handcrafted, start to finish.
          </p>
          <span className="font-label-sm text-label-sm uppercase tracking-[0.16em] text-on-surface-variant/70">
            Akshita Dalsaniya · Curated for ANG by Aangi Shah
          </span>
        </footer>
      </main>

      {/* Action Navigation (Next / Back) */}
      <div className="fixed bottom-20 left-0 w-full px-margin-mobile z-40 flex items-center justify-between pointer-events-none">
        <button 
          onClick={goToPrev} 
          disabled={currentStepIndex === 0}
          className={`pointer-events-auto flex items-center gap-1 px-4 py-2 rounded-full bg-surface shadow-[0_2px_8px_rgba(44,40,37,0.1)] border border-outline-variant/30 text-on-surface transition-all duration-300 ${currentStepIndex === 0 ? 'opacity-0 scale-95' : 'opacity-100 scale-100 hover:bg-surface-container-low'}`}
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          <span className="font-label-sm uppercase tracking-wider font-semibold">Back</span>
        </button>
        
        <button 
          onClick={goToNext} 
          disabled={currentStepIndex === steps.length - 1}
          className={`pointer-events-auto flex items-center gap-1 px-4 py-2 rounded-full bg-primary text-on-primary shadow-[0_4px_12px_rgba(105,0,17,0.25)] transition-all duration-300 ${currentStepIndex === steps.length - 1 ? 'opacity-0 scale-95' : 'opacity-100 scale-100 hover:scale-105'}`}
        >
          <span className="font-label-sm uppercase tracking-wider font-semibold">Next</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </div>

      {/* Bottom Tab Nav */}
      <nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_-2px_16px_rgba(44,40,37,0.06)] border-t border-outline-variant/20">
        <div className="h-16 px-gutter-mobile flex items-center justify-around">
          <button onClick={() => setCurrentStepIndex(0)} className={`flex flex-col items-center justify-center min-w-[48px] min-h-[44px] transition-colors ${currentStepIndex === 0 ? 'text-primary font-semibold' : 'text-on-surface-variant hover:text-on-surface'}`}>
            <span className="material-symbols-outlined text-[20px]">home</span>
            <span className="font-label-sm text-[9px] tracking-[0.1em] mt-space-3xs uppercase">Hero</span>
          </button>
          <button onClick={() => setCurrentStepIndex(1)} className={`flex flex-col items-center justify-center min-w-[48px] min-h-[44px] transition-colors ${currentStepIndex === 1 ? 'text-primary font-semibold' : 'text-on-surface-variant hover:text-on-surface'}`}>
            <span className="material-symbols-outlined text-[20px]">history_edu</span>
            <span className="font-label-sm text-[9px] tracking-[0.1em] mt-space-3xs uppercase">Story</span>
          </button>
          <button onClick={() => setCurrentStepIndex(2)} className={`flex flex-col items-center justify-center min-w-[48px] min-h-[44px] transition-colors ${currentStepIndex === 2 ? 'text-primary font-semibold' : 'text-on-surface-variant hover:text-on-surface'}`}>
            <span className="material-symbols-outlined text-[20px]">auto_stories</span>
            <span className="font-label-sm text-[9px] tracking-[0.1em] mt-space-3xs uppercase">Folio</span>
          </button>
          <button onClick={() => setCurrentStepIndex(3)} className={`flex flex-col items-center justify-center min-w-[48px] min-h-[44px] transition-colors ${currentStepIndex === 3 ? 'text-primary font-semibold' : 'text-on-surface-variant hover:text-on-surface'}`}>
            <span className="material-symbols-outlined text-[20px]">ink_pen</span>
            <span className="font-label-sm text-[9px] tracking-[0.1em] mt-space-3xs uppercase">Craft</span>
          </button>
          <button onClick={() => setCurrentStepIndex(4)} className={`flex flex-col items-center justify-center min-w-[48px] min-h-[44px] transition-colors ${currentStepIndex === 4 ? 'text-primary font-semibold' : 'text-on-surface-variant hover:text-on-surface'}`}>
            <span className="material-symbols-outlined text-[20px]">favorite</span>
            <span className="font-label-sm text-[9px] tracking-[0.1em] mt-space-3xs uppercase">Care</span>
          </button>
          <button onClick={() => setCurrentStepIndex(5)} className={`flex flex-col items-center justify-center min-w-[48px] min-h-[44px] transition-colors ${currentStepIndex === 5 ? 'text-primary font-semibold' : 'text-on-surface-variant hover:text-on-surface'}`}>
            <span className="material-symbols-outlined text-[20px]">mail</span>
            <span className="font-label-sm text-[9px] tracking-[0.1em] mt-space-3xs uppercase">Contact</span>
          </button>
        </div>
      </nav>

      {/* CV Modal Overlay */}
      <AnimatePresence>
        {isCvModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-surface/80 backdrop-blur-md p-4 sm:p-6"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }} 
              animate={{ opacity: 1, y: 0, scale: 1 }} 
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-surface-container-lowest rounded-xl shadow-[0_8px_32px_rgba(44,40,37,0.12)] border border-outline-variant/30 relative"
            >
              {/* Sticky Header with Close button */}
              <div className="sticky top-0 right-0 p-4 flex justify-end bg-gradient-to-b from-surface-container-lowest to-transparent z-10 pointer-events-none">
                <button 
                  onClick={() => setIsCvModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors shadow-sm pointer-events-auto"
                  aria-label="Close Resume"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>
              
              {/* CV Content */}
              <div className="px-6 pb-12 sm:px-10 -mt-8 space-y-10">
                
                {/* Header */}
                <div className="text-center space-y-3 border-b border-outline-variant/40 pb-8">
                  <h2 className="font-headline-lg text-3xl text-on-surface uppercase tracking-widest text-primary">Akshita Dalsaniya</h2>
                  <p className="font-body-lg text-secondary italic">Storyteller & Client Experience Builder | Founder, Project L³</p>
                  <div className="font-label-sm text-on-surface-variant flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4 tracking-wider">
                    <span>Rajkot, Gujarat, India</span>
                    <span className="hidden sm:inline">•</span>
                    <span>dalsaniyaakshita1@gmail.com</span>
                    <span className="hidden sm:inline">•</span>
                    <span>+91 9725433903</span>
                    <span className="hidden sm:inline">•</span>
                    <span>linkedin.com/in/akshita-dalsaniya</span>
                  </div>
                </div>
                
                {/* Profile */}
                <section>
                  <h3 className="font-label-md uppercase tracking-[0.15em] text-primary border-b border-outline-variant/20 pb-2 mb-4">Profile</h3>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    Final-year BBA student and founder who moves easily between narrative and coordination — writing that carries a clear voice, and relationships (stakeholders, collaborators, teams) that are actively built and maintained rather than left to manage themselves. Experience spans international research documentation, disability-inclusion advocacy, and hands-on customer-facing coordination, with a consistent throughline of careful, human-centred communication.
                  </p>
                </section>

                {/* Relevant Experience */}
                <section>
                  <h3 className="font-label-md uppercase tracking-[0.15em] text-primary border-b border-outline-variant/20 pb-2 mb-6">Relevant Experience</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                        <h4 className="font-headline-sm text-on-surface font-semibold text-lg">Founder, Project L³ (Love. Laughter. Life.)</h4>
                        <span className="font-label-sm text-on-surface-variant italic mt-1 sm:mt-0">2026 – Present</span>
                      </div>
                      <p className="font-body-sm text-secondary mb-2 italic">Research-driven social innovation initiative for disability inclusion</p>
                      <ul className="list-disc list-outside pl-4 space-y-2 font-body-md text-on-surface-variant leading-relaxed">
                        <li>Built and sustain working relationships with educators, therapists, NGOs, and disability organizations, translating each stakeholder conversation into design decisions.</li>
                        <li>Conduct literature reviews and stakeholder research to shape an evidence-based, human-centred framework for inclusive systems.</li>
                        <li>Write and publish audience-facing content and captions for the initiative's social presence, shaping tone and voice for different platforms and readers.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                        <h4 className="font-headline-sm text-on-surface font-semibold text-lg">Business Fair Coordinator — "The Joy Toy"</h4>
                        <span className="font-label-sm text-on-surface-variant italic mt-1 sm:mt-0">2025</span>
                      </div>
                      <p className="font-body-sm text-secondary mb-2 italic">KG DHOLAKIYA</p>
                      <ul className="list-disc list-outside pl-4 space-y-2 font-body-md text-on-surface-variant leading-relaxed">
                        <li>Co-led a student venture to the second-highest revenue among all participating teams, owning pricing strategy and customer engagement start to finish.</li>
                        <li>Coordinated day-of operations under time pressure — setup, customer interactions, and troubleshooting — keeping the experience smooth for every visitor.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                        <h4 className="font-headline-sm text-on-surface font-semibold text-lg">Research Intern</h4>
                        <span className="font-label-sm text-on-surface-variant italic mt-1 sm:mt-0">Aug – Sep 2025</span>
                      </div>
                      <p className="font-body-sm text-secondary mb-2 italic">Hanoi University of Mining and Geology (HUMG), Vietnam</p>
                      <ul className="list-disc list-outside pl-4 space-y-2 font-body-md text-on-surface-variant leading-relaxed">
                        <li>Worked inside an international, cross-cultural research team, strengthening clear, client-ready communication across language and cultural differences.</li>
                        <li>Delivered polished literature reviews, documentation, and evidence-based findings for a global stakeholder audience — completed with a 3.7/4 performance score.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                        <h4 className="font-headline-sm text-on-surface font-semibold text-lg">Volunteer Coordinator, MFesta</h4>
                        <span className="font-label-sm text-on-surface-variant italic mt-1 sm:mt-0">2025</span>
                      </div>
                      <p className="font-body-sm text-secondary mb-2 italic">RK University</p>
                      <ul className="list-disc list-outside pl-4 space-y-2 font-body-md text-on-surface-variant leading-relaxed">
                        <li>Coordinated the on-ground experience for roughly 500 participants at RK University's flagship cultural festival, working with organizing committees to keep every touchpoint running smoothly.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Creative Writing */}
                <section>
                  <h3 className="font-label-md uppercase tracking-[0.15em] text-primary border-b border-outline-variant/20 pb-2 mb-4">Creative Writing</h3>
                  <div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                      <h4 className="font-headline-sm text-on-surface font-semibold text-lg">Debut Novel (Manuscript in Progress)</h4>
                    </div>
                    <p className="font-body-sm text-secondary mb-2 italic">Independent</p>
                    <ul className="list-disc list-outside pl-4 space-y-2 font-body-md text-on-surface-variant leading-relaxed">
                      <li>Writing an original long-form novel exploring human relationships, identity, and emotional resilience — building a distinct narrative voice and close attention to pacing, tone, and emotional detail.</li>
                    </ul>
                  </div>
                </section>

                {/* Education */}
                <section>
                  <h3 className="font-label-md uppercase tracking-[0.15em] text-primary border-b border-outline-variant/20 pb-2 mb-4">Education</h3>
                  <div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                      <h4 className="font-headline-sm text-on-surface font-semibold text-lg">Bachelor of Business Administration (BBA)</h4>
                      <span className="font-label-sm text-on-surface-variant italic mt-1 sm:mt-0">Expected 2027</span>
                    </div>
                    <p className="font-body-md text-on-surface-variant">RK University, Rajkot, Gujarat, India • CGPA 8.0/10</p>
                  </div>
                </section>

                {/* Skills */}
                <section>
                  <h3 className="font-label-md uppercase tracking-[0.15em] text-primary border-b border-outline-variant/20 pb-2 mb-4">Skills</h3>
                  <div className="space-y-3 font-body-md text-on-surface-variant">
                    <p><strong className="text-on-surface font-semibold">Client & Relationship Coordination:</strong> Stakeholder Engagement, Client/Customer Relations, Project Coordination, Cross-cultural Communication, Public Speaking, Team Leadership</p>
                    <p><strong className="text-on-surface font-semibold">Storytelling & Content:</strong> Narrative & Long-form Writing, Academic Writing, Research Documentation, Copy & Caption Writing</p>
                    <p><strong className="text-on-surface font-semibold">Technical:</strong> Microsoft Word, PowerPoint, Canva, Notion, Google Workspace</p>
                  </div>
                </section>

                {/* Honors & Distinctions */}
                <section>
                  <h3 className="font-label-md uppercase tracking-[0.15em] text-primary border-b border-outline-variant/20 pb-2 mb-4">
                    Honors & Distinctions 
                    <a href="https://1drv.ms/b/c/0bed5265e3924c42/IQDTpWy_BgaWRKNSiussC4bwAaAVf7BPRAHq8diSniM5Jm8" target="_blank" rel="noopener noreferrer" className="ml-2 lowercase font-body-sm tracking-normal text-secondary hover:text-primary transition-colors inline-block underline underline-offset-2">
                      [credentials.pdf]
                    </a>
                  </h3>
                  <ul className="list-disc list-outside pl-4 space-y-2 font-body-md text-on-surface-variant leading-relaxed">
                    <li>Silver Award, The Queens Commonwealth Essay Competition (International), The Royal Commonwealth Society</li>
                    <li>Represented Rajkot in the RBI90 Quiz (RBI); participated in the National Finance Literacy Quiz (NISM/SEBI)</li>
                  </ul>
                </section>

                {/* Languages */}
                <section>
                  <h3 className="font-label-md uppercase tracking-[0.15em] text-primary border-b border-outline-variant/20 pb-2 mb-4">Languages</h3>
                  <p className="font-body-md text-on-surface-variant">
                    Gujarati (Native) • English (Professional) • Hindi (Professional) • Spanish & French (Beginner)
                  </p>
                </section>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
