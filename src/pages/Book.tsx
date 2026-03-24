import { motion } from 'framer-motion';
import bookImage from '../assets/Books/Book Hasha Mulilo.png';

declare const ml: (action: string, id: string, force?: boolean) => void;

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number]} },
};

const chapters = [
  { title: 'From Idea to Enterprise', body: 'How a simple village observation evolved into a company delivering sustainable energy solutions.' },
  { title: 'Technical Mastery', body: 'Lessons from testing moisture, pressure, material composition, and combustion performance.' },
  { title: 'Strategic Partnerships', body: 'How collaborations with UNDP, SANParks, and others supported scale and credibility.' },
  { title: 'Business Sustainability', body: 'Balancing profitability, mission alignment, and long-term operational resilience.' },
  { title: 'Environmental Outcomes', body: 'Real progress in reducing deforestation pressure and building cleaner fuel options.' },
  { title: 'Honest Lessons', body: 'Straight reflections on failures, pivots, and decisions that changed the trajectory.' },
];

export default function Book() {
  const openSubscribeForm = () => ml('show', 'rBpFwN', true);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#111110] pt-[72px]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden" animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.p variants={reveal} className="text-xs font-semibold tracking-widest uppercase text-[#6B6A65] mb-6">
                Featured publication
              </motion.p>
              <motion.h1 variants={reveal} className="font-heading text-5xl md:text-6xl font-bold text-[#F7F6F2] leading-tight mb-6">
                Hasha Mulilo:<br />
                <span className="italic font-normal text-[#9E9C96]">Our Story of Sustainable Innovation</span>
              </motion.h1>
              <motion.p variants={reveal} className="text-[#9E9C96] leading-relaxed mb-10 max-w-md">
                A first-hand account of building a clean energy enterprise in Southern Africa —
                from backyard experimentation to a structured business near Kruger National Park.
              </motion.p>
              <motion.div variants={reveal} className="flex flex-wrap gap-8 items-center">
                <button
                  onClick={openSubscribeForm}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#F7F6F2] bg-[#2A5C45] px-6 py-3 hover:bg-[#1E4433] transition-colors group"
                >
                  Get free digital copy
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
                <a href="#highlights" className="text-sm text-[#9E9C96] hover:text-[#F7F6F2] transition-colors">
                  See highlights ↓
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            >
              <img
                src={bookImage}
                alt="Hasha Mulilo book cover"
                className="w-full max-w-sm mx-auto object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About the book */}
      <section className="bg-[#F7F6F2]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid md:grid-cols-2 gap-16"
          >
            <motion.div variants={reveal}>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#6B6A65] mb-6">About the story</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#111110] mb-6 leading-tight">
                Not a guide.<br />An account.
              </h2>
            </motion.div>
            <motion.div variants={reveal} className="space-y-5">
              <p className="text-[#6B6A65] leading-relaxed">
                This book chronicles the real journey of Dziphathu GreenTech — from a question asked
                in Tshikuwi Village to a structured clean energy enterprise operating near Kruger National Park.
              </p>
              <p className="text-[#6B6A65] leading-relaxed">
                It is the account of what happened in practice: manual production from 2019 to 2022,
                lessons from failed batches, early funding from UNDP, strategic pivots, and the partnerships
                that enabled growth.
              </p>
              <p className="text-[#6B6A65] leading-relaxed">
                Written for entrepreneurs and environmental changemakers — grounded insights shaped by
                lived experience, technical experimentation, and disciplined execution.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Chapter highlights */}
      <section id="highlights" className="bg-[#EEECEA] scroll-mt-[72px]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
            className="text-xs font-semibold tracking-widest uppercase text-[#6B6A65] mb-12"
          >
            What you will learn
          </motion.p>
          <div className="grid md:grid-cols-2 gap-0">
            {chapters.map((ch, i) => (
              <motion.div
                key={ch.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
                className={`border-t border-[#DEDAD3] py-8 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:border-l'}`}
              >
                <h3 className="font-medium text-[#111110] mb-2">{ch.title}</h3>
                <p className="text-sm text-[#6B6A65] leading-relaxed">{ch.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="bg-[#111110]">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
          className="mx-auto max-w-6xl px-6 lg:px-8 py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
        >
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#F7F6F2] mb-2">
              Get your free digital copy.
            </h2>
            <p className="text-[#9E9C96] text-sm">Subscribe to receive access. We respect your privacy.</p>
          </div>
          <button
            onClick={openSubscribeForm}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#111110] bg-[#F7F6F2] px-6 py-3 hover:bg-[#EEECEA] transition-colors group shrink-0"
          >
            Subscribe & get the book
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </motion.div>
      </section>
    </>
  );
}
