import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import heroImage from '../assets/images/Working in field.jpeg';
import teamImage from '../assets/images/Team in uniform.jpeg';
import briquettesImage from '../assets/images/Product burning (Dark).jpeg';
import bricksImage from '../assets/images/Product bricks.jpeg';
import hashaImage from '../assets/images/Product Hasha mulilo.jpeg';

// Stat counter hook
function useCountUp(end: number, isActive: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!isActive) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [end, isActive, duration]);
  return value;
}

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

// Individual stat with count-up
function Stat({ value, suffix, label, isActive }: { value: number; suffix: string; label: string; isActive: boolean }) {
  const count = useCountUp(value, isActive);
  return (
    <div className="flex flex-col gap-1">
      <span className="font-heading text-5xl md:text-6xl font-bold text-[#111110] leading-none tabular-nums">
        {count}{suffix}
      </span>
      <span className="text-sm text-[#6B6A65] mt-2">{label}</span>
    </div>
  );
}

const partners = [
  'Vhembe Biosphere Reserve', 'CSIR', 'South African National Parks',
  'UNDP', 'DFFE', 'Young Water Solutions', 'Indalo Inclusive',
  'NCPC-SA', 'TotalEnergies', 'PWK Waste Management', 'Start Up Business Campus',
];

export default function Home() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsVisible = useInView(statsRef, { once: true, margin: '-80px' });

  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Working in field"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#111110]/72" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 pt-[72px]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.p
              variants={reveal}
              className="text-xs font-semibold tracking-widest uppercase text-[#9E9C96] mb-6"
            >
              Dzanani, Limpopo · Est. 2019
            </motion.p>
            <motion.h1
              variants={reveal}
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-[#F7F6F2] leading-[1.05] text-balance max-w-4xl"
            >
              Waste reimagined.<br />
              <span className="italic font-normal text-[#9E9C96]">Limpopo renewed.</span>
            </motion.h1>
            <motion.p
              variants={reveal}
              className="mt-8 text-lg text-[#9E9C96] max-w-xl leading-relaxed"
            >
              We convert plastic and biomass waste into high-value products —
              eco charcoal briquettes and recycled paving bricks — creating
              clean energy and economic opportunity in rural South Africa.
            </motion.p>
            <motion.div variants={reveal} className="mt-10 flex flex-wrap items-center gap-8">
              <Link
                to="/products"
                className="text-sm font-medium text-[#F7F6F2] hover:text-white transition-colors inline-flex items-center gap-2 group"
              >
                See our products
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/contact"
                className="text-sm font-medium text-[#9E9C96] hover:text-[#F7F6F2] transition-colors"
              >
                Get in touch
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-12 bg-[#F7F6F2]/20 mx-auto" />
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────────────────── */}
      <section className="bg-[#EEECEA]">
        <div ref={statsRef} className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-[#DEDAD3]">
            <div className="md:px-10 first:pl-0 last:pr-0">
              <Stat value={800} suffix="+" label="Tons of waste recycled" isActive={statsVisible} />
            </div>
            <div className="md:px-10">
              <Stat value={12} suffix="+" label="Youth employed" isActive={statsVisible} />
            </div>
            <div className="md:px-10">
              <Stat value={99} suffix="%" label="Client satisfaction" isActive={statsVisible} />
            </div>
            <div className="md:px-10">
              <div className="flex flex-col gap-1">
                <span className="font-heading text-5xl md:text-6xl font-bold text-[#111110] leading-none">
                  L1
                </span>
                <span className="text-sm text-[#6B6A65] mt-2">B-BBEE certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ────────────────────────────────────────────── */}
      <section className="bg-[#F7F6F2]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24">
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
            className="text-xs font-semibold tracking-widest uppercase text-[#6B6A65] mb-16"
          >
            What we make
          </motion.p>

          {/* Product 01 */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-24 pb-24 border-b border-[#DEDAD3]"
          >
            <motion.div variants={reveal}>
              <p className="text-xs text-[#6B6A65] mb-4 tracking-wider">01</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#111110] mb-6 leading-tight">
                Eco Charcoal<br />Briquettes
              </h2>
              <p className="text-[#6B6A65] leading-relaxed mb-4">
                Smokeless, odorless fuel made from biomass waste. Cleaner than
                traditional charcoal, with no trees cut — materials sourced from
                naturally fallen leaves and twigs near Kruger National Park.
              </p>
              <p className="text-[#6B6A65] leading-relaxed mb-8">
                Used by households, restaurants, schools, and commercial kitchens
                across Limpopo.
              </p>
              <Link
                to="/products#briquettes"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#2A5C45] hover:gap-3 transition-all"
              >
                Learn more →
              </Link>
            </motion.div>
            <motion.div variants={reveal} className="overflow-hidden rounded-sm">
              <img
                src={briquettesImage}
                alt="Eco charcoal briquettes"
                className="w-full h-80 md:h-[420px] object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Product 02 */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid md:grid-cols-2 gap-12 md:gap-20 items-center"
          >
            <motion.div variants={reveal} className="order-2 md:order-1 overflow-hidden rounded-sm">
              <img
                src={bricksImage}
                alt="Recycled plastic paving bricks"
                className="w-full h-80 md:h-[420px] object-cover"
              />
            </motion.div>
            <motion.div variants={reveal} className="order-1 md:order-2">
              <p className="text-xs text-[#6B6A65] mb-4 tracking-wider">02</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#111110] mb-6 leading-tight">
                Recycled Plastic<br />Paving Bricks
              </h2>
              <p className="text-[#6B6A65] leading-relaxed mb-4">
                100% recycled plastic. High strength, weatherproof, 50+ year
                lifespan. 20–40% less expensive than concrete alternatives —
                and every square metre diverts kilograms of plastic from landfills
                and waterways.
              </p>
              <p className="text-[#6B6A65] leading-relaxed mb-8">
                Used in driveways, walkways, public spaces, and government projects.
              </p>
              <Link
                to="/products#paving"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#2A5C45] hover:gap-3 transition-all"
              >
                Learn more →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── HASHA MULILO ────────────────────────────────────────── */}
      <section className="bg-[#111110]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.p variants={reveal} className="text-xs font-semibold tracking-widest uppercase text-[#6B6A65] mb-6">
                Our flagship project
              </motion.p>
              <motion.h2 variants={reveal} className="font-heading text-4xl md:text-5xl font-bold text-[#F7F6F2] mb-6 leading-tight">
                Hasha Mulilo<br />Eco Briquettes
              </motion.h2>
              <motion.blockquote variants={reveal} className="border-l-2 border-[#2A5C45] pl-5 mb-6">
                <p className="text-[#9E9C96] text-lg leading-relaxed italic">
                  "Can clean cooking energy be produced using waste, without cutting trees?"
                </p>
                <footer className="mt-2 text-sm text-[#6B6A65]">
                  — Tshikuwi Village, Limpopo, 2017
                </footer>
              </motion.blockquote>
              <motion.p variants={reveal} className="text-[#9E9C96] leading-relaxed mb-8">
                That question became a company. From a grandmother's backyard with hand-built tools
                to a structured enterprise near Kruger National Park — supported by UNDP, SANParks,
                TotalEnergies, and 11 partner organisations.
              </motion.p>
              <motion.div variants={reveal}>
                <Link
                  to="/hasha-mulilo"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#F7F6F2] hover:gap-3 transition-all group"
                >
                  Read the full story
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </motion.div>
            </div>

            <motion.div variants={reveal} className="overflow-hidden rounded-sm">
              <img
                src={hashaImage}
                alt="Hasha Mulilo eco briquettes"
                className="w-full h-[400px] md:h-[480px] object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── WHO WE WORK WITH ────────────────────────────────────── */}
      <section className="bg-[#F7F6F2]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.p variants={reveal} className="text-xs font-semibold tracking-widest uppercase text-[#6B6A65] mb-4">
              Our stakeholders
            </motion.p>
            <motion.p variants={reveal} className="text-[#111110] text-lg mb-10">
              Supported by {partners.length} leading organisations
            </motion.p>
            <motion.div variants={reveal} className="flex flex-wrap gap-x-8 gap-y-3">
              {partners.map((name, i) => (
                <span key={name} className="text-sm text-[#6B6A65]">
                  {name}{i < partners.length - 1 && <span className="ml-8 text-[#DEDAD3]">·</span>}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── TEAM CONTEXT ────────────────────────────────────────── */}
      <section className="bg-[#EEECEA]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-0">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid md:grid-cols-2 gap-0"
          >
            <motion.div variants={reveal} className="overflow-hidden">
              <img
                src={teamImage}
                alt="Dziphathu GreenTech team"
                className="w-full h-72 md:h-96 object-cover"
              />
            </motion.div>
            <motion.div variants={reveal} className="flex flex-col justify-center px-8 md:px-14 py-16">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#6B6A65] mb-4">The team</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#111110] mb-4 leading-tight">
                Local people.<br />Real impact.
              </h2>
              <p className="text-[#6B6A65] leading-relaxed mb-6">
                Honesty, transparency, and reliability — our core values shape every product we make
                and every community we serve. B-BBEE Level 1 certified.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#2A5C45] hover:gap-3 transition-all"
              >
                About us →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────── */}
      <section className="bg-[#F7F6F2] border-t border-[#DEDAD3]">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
          className="mx-auto max-w-6xl px-6 lg:px-8 py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
        >
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#111110] mb-2">
              Ready to work with us?
            </h2>
            <p className="text-[#6B6A65]">Partner with us, buy our products, or support our mission.</p>
          </div>
          <div className="flex flex-wrap gap-8 items-center shrink-0">
            <Link
              to="/contact"
              className="text-sm font-medium text-[#2A5C45] hover:text-[#1E4433] transition-colors inline-flex items-center gap-2 group"
            >
              Get in touch
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              to="/donations"
              className="text-sm font-medium text-[#6B6A65] hover:text-[#111110] transition-colors"
            >
              Support our work
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
