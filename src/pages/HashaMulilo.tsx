import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import hashaImage from '../assets/images/Product Hasha mulilo.jpeg';
import burningDarkImage from '../assets/images/Product burning (Dark).jpeg';
import founderEarlyImage from '../assets/images/Founder early stages.jpeg';

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number]} },
};

const timeline = [
  {
    year: '2017',
    title: 'The Observation',
    body: `The idea began not as a business concept, but as an observation shaped by everyday life in Tshikuwi Village, Nzhelele, Limpopo. A growing curiosity about how people cook, how energy is produced, and how natural resources are used led to a single demanding question:`,
    quote: '"Can clean cooking energy be produced using waste, without cutting trees?"',
  },
  {
    year: '2019',
    title: 'Manual Production Begins',
    body: `Dziphathu GreenTech was registered and production began in a grandmother's backyard. Every briquette made by hand using a simple extruder built from scratch. No machines. No shortcuts. This phase was about learning — moisture control, pressure, material composition, combustion behaviour. Each failure revealed something new.`,
    quote: null,
  },
  {
    year: '2022',
    title: 'First Funding & Scale',
    body: `First funding from the UNDP GEF Vhembe Biosphere Reserve enabled the purchase of a crusher — the transition from manual to early-stage processing. Business development through Indalo Inclusive refined strategy, governance, and financial planning. Integration into NCPC-SA strengthened process efficiency and quality.`,
    quote: null,
  },
  {
    year: '2023',
    title: 'Kruger National Park',
    body: `A formal production site established near Pafuri Gate — an area with abundant naturally fallen leaves and twigs that can be collected without damaging living trees. Partnerships formalised with Kruger National Park, TotalEnergies, Vhembe Biosphere Reserve, Indalo Inclusive, NCPC-SA, and LIDET.`,
    quote: null,
  },
  {
    year: 'Today',
    title: 'A Clean Energy Enterprise',
    body: `Hasha Mulilo Eco Briquettes stands as a clean energy enterprise shaped by lived experience, technical learning, and disciplined growth. From a question in a rural village to a sustainable business creating environmental and economic value across Limpopo.`,
    quote: null,
  },
];

export default function HashaMulilo() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111110] pt-[72px]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.p variants={reveal} className="text-xs font-semibold tracking-widest uppercase text-[#6B6A65] mb-6">
              Flagship project
            </motion.p>
            <motion.h1 variants={reveal} className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-[#F7F6F2] max-w-3xl leading-tight mb-8">
              Hasha Mulilo Eco Briquettes
            </motion.h1>
            <motion.p variants={reveal} className="text-lg text-[#9E9C96] max-w-xl leading-relaxed">
              From a simple observation in Tshikuwi Village to a clean energy enterprise
              transforming lives across Limpopo Province.
            </motion.p>
          </motion.div>
        </div>

        {/* Hero image */}
        <div className="mx-auto max-w-6xl px-6 lg:px-8 pb-0">
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
            className="overflow-hidden"
          >
            <img
              src={hashaImage}
              alt="Hasha Mulilo eco briquettes"
              className="w-full h-64 md:h-96 object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Impact numbers */}
      <section className="bg-[#EEECEA]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16">
          <div className="grid grid-cols-3 gap-0 divide-x divide-[#DEDAD3]">
            {[
              { value: 'Zero', label: 'Trees cut down' },
              { value: '100%', label: 'Waste conversion' },
              { value: 'Clean', label: 'Smokeless fuel' },
            ].map((item) => (
              <div key={item.label} className="px-8 first:pl-0 last:pr-0 text-center md:text-left">
                <div className="font-heading text-3xl md:text-4xl font-bold text-[#111110] mb-1">{item.value}</div>
                <div className="text-sm text-[#6B6A65]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#F7F6F2]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24">
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
            className="text-xs font-semibold tracking-widest uppercase text-[#6B6A65] mb-16"
          >
            The journey
          </motion.p>

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={reveal}
                className="grid md:grid-cols-[120px_1fr] gap-6 border-t border-[#DEDAD3] py-12"
              >
                <div className="shrink-0">
                  <span className="text-sm font-semibold text-[#2A5C45]">{item.year}</span>
                </div>
                <div className="max-w-2xl">
                  <h3 className="font-heading text-2xl font-bold text-[#111110] mb-4">{item.title}</h3>
                  <p className="text-[#6B6A65] leading-relaxed mb-4">{item.body}</p>
                  {item.quote && (
                    <blockquote className="border-l-2 border-[#2A5C45] pl-5 mt-6">
                      <p className="text-[#111110] font-heading text-xl italic leading-relaxed">{item.quote}</p>
                    </blockquote>
                  )}
                  {/* Images for certain milestones */}
                  {i === 1 && (
                    <div className="mt-6 overflow-hidden rounded-sm">
                      <img src={founderEarlyImage} alt="Founder at early stages" className="w-full h-52 object-cover" />
                    </div>
                  )}
                  {i === 2 && (
                    <div className="mt-6 overflow-hidden rounded-sm">
                      <img src={burningDarkImage} alt="Hasha Mulilo product" className="w-full h-52 object-cover" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="bg-[#111110]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.p variants={reveal} className="text-xs font-semibold tracking-widest uppercase text-[#6B6A65] mb-6">
              Partners & supporters
            </motion.p>
            <motion.div variants={reveal} className="flex flex-wrap gap-x-8 gap-y-3">
              {['Kruger National Park', 'TotalEnergies', 'Vhembe Biosphere Reserve', 'UNDP', 'Indalo Inclusive SA', 'NCPC-SA', 'LIDET', 'CSIR', 'Young Water Solutions'].map((name, i, arr) => (
                <span key={name} className="text-sm text-[#9E9C96]">
                  {name}{i < arr.length - 1 && <span className="ml-8 text-[#2A2A2A]">·</span>}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Looking forward */}
      <section className="bg-[#F7F6F2]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p variants={reveal} className="text-xs font-semibold tracking-widest uppercase text-[#6B6A65] mb-12">
              Looking forward
            </motion.p>
            <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#DEDAD3]">
              {[
                { title: 'Scaling Production', body: 'Expanding capacity to serve more communities across South Africa while maintaining quality and environmental standards.' },
                { title: 'Community Growth', body: 'Creating more employment opportunities and transferring skills to empower local communities.' },
                { title: 'Environmental Protection', body: 'Continuing to develop sustainable solutions that protect forests and reduce carbon emissions.' },
              ].map((item, i) => (
                <motion.div key={item.title} variants={reveal} className={`py-8 ${i > 0 ? 'md:pl-12' : ''} ${i < 2 ? 'md:pr-12' : ''}`}>
                  <h3 className="font-medium text-[#111110] mb-3">{item.title}</h3>
                  <p className="text-sm text-[#6B6A65] leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#EEECEA] border-t border-[#DEDAD3]">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
          className="mx-auto max-w-6xl px-6 lg:px-8 py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
        >
          <div>
            <h2 className="font-heading text-3xl font-bold text-[#111110] mb-2">Support clean energy innovation.</h2>
            <p className="text-[#6B6A65]">Partner with us or support our mission.</p>
          </div>
          <div className="flex flex-wrap gap-8 items-center shrink-0">
            <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-[#2A5C45] hover:gap-3 transition-all">
              Partner with us →
            </Link>
            <Link to="/donations" className="text-sm text-[#6B6A65] hover:text-[#111110] transition-colors">
              Support our mission
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
