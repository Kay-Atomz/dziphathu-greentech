import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import briquettesImage from '../assets/images/Product burning.jpeg';
import briquettesDarkImage from '../assets/images/Product burning (Dark).jpeg';
import bricksImage from '../assets/images/Product bricks.jpeg';
import productMultipleImage from '../assets/images/Product (multiple).jpeg';
import packagedImage from '../assets/images/Product packaged.jpeg';

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Products() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111110] pt-[72px]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.p variants={reveal} className="text-xs font-semibold tracking-widest uppercase text-[#6B6A65] mb-6">
              Products
            </motion.p>
            <motion.h1 variants={reveal} className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-[#F7F6F2] max-w-3xl leading-tight mb-8">
              Waste turned into value.
            </motion.h1>
            <motion.p variants={reveal} className="text-lg text-[#9E9C96] max-w-xl leading-relaxed">
              Two products. Both made from waste. Both building a cleaner, more economically
              resilient South Africa.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Product 01 — Eco Briquettes */}
      <section id="briquettes" className="bg-[#F7F6F2] scroll-mt-[72px]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p variants={reveal} className="text-xs font-semibold tracking-widest uppercase text-[#6B6A65] mb-16">
              01 — Clean Energy
            </motion.p>

            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
              <motion.div variants={reveal}>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#111110] mb-6 leading-tight">
                  Eco Charcoal Briquettes
                </h2>
                <p className="text-[#6B6A65] leading-relaxed mb-4">
                  Our flagship product converts biomass waste into high-quality, smokeless charcoal
                  briquettes. An affordable, sustainable energy source for households, businesses,
                  and institutions.
                </p>
                <p className="text-[#6B6A65] leading-relaxed mb-10">
                  We use naturally fallen materials from near Kruger National Park — zero trees cut.
                  Every briquette is smokeless, odorless, and burns longer than traditional charcoal.
                </p>

                <div className="space-y-5 mb-10">
                  {[
                    { label: 'Smokeless & odorless', desc: 'Clean burning with minimal emissions — safer for indoor cooking.' },
                    { label: 'Cost-effective', desc: 'More affordable than traditional charcoal with longer burn time.' },
                    { label: 'Zero deforestation', desc: 'Sourced from naturally fallen biomass only.' },
                    { label: 'Waste conversion', desc: 'Diverts biomass from landfills and reduces air pollution.' },
                  ].map((item) => (
                    <div key={item.label} className="border-t border-[#DEDAD3] pt-5">
                      <div className="flex items-start justify-between gap-4">
                        <span className="font-medium text-[#111110] text-sm">{item.label}</span>
                        <span className="text-sm text-[#6B6A65] text-right max-w-xs">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#DEDAD3] pt-8">
                  <p className="text-xs font-semibold tracking-widest uppercase text-[#6B6A65] mb-4">Used by</p>
                  <p className="text-[#6B6A65] text-sm">
                    Households · Restaurants & food businesses · Schools · Commercial kitchens
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    to="/hasha-mulilo"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#2A5C45] hover:gap-3 transition-all"
                  >
                    Read the Hasha Mulilo story →
                  </Link>
                </div>
              </motion.div>

              <motion.div variants={reveal} className="space-y-4">
                <div className="overflow-hidden rounded-sm">
                  <img src={briquettesImage} alt="Eco charcoal briquettes burning" className="w-full h-72 object-cover" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="overflow-hidden rounded-sm">
                    <img src={briquettesDarkImage} alt="Briquettes burning dark" className="w-full h-40 object-cover" />
                  </div>
                  <div className="overflow-hidden rounded-sm">
                    <img src={packagedImage} alt="Packaged briquettes" className="w-full h-40 object-cover" />
                  </div>
                </div>

                {/* Metrics */}
                <div className="bg-[#EEECEA] p-6 mt-2">
                  <p className="text-xs font-semibold tracking-widest uppercase text-[#6B6A65] mb-5">Performance</p>
                  <div className="space-y-4">
                    {[
                      { label: 'Carbon reduction vs wood fuel', value: '90%' },
                      { label: 'Biomass waste diverted', value: '95%' },
                      { label: 'Burning efficiency', value: '85%' },
                    ].map((m) => (
                      <div key={m.label} className="flex items-center justify-between">
                        <span className="text-sm text-[#6B6A65]">{m.label}</span>
                        <span className="text-sm font-semibold text-[#2A5C45]">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="border-t border-[#DEDAD3] mx-auto max-w-6xl" />

      {/* Product 02 — Paving Bricks */}
      <section id="paving" className="bg-[#F7F6F2] scroll-mt-[72px]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p variants={reveal} className="text-xs font-semibold tracking-widest uppercase text-[#6B6A65] mb-16">
              02 — Sustainable Construction
            </motion.p>

            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
              <motion.div variants={reveal} className="space-y-4 order-2 md:order-1">
                <div className="overflow-hidden rounded-sm">
                  <img src={bricksImage} alt="Recycled plastic paving bricks" className="w-full h-72 object-cover" />
                </div>
                <div className="overflow-hidden rounded-sm">
                  <img src={productMultipleImage} alt="Products" className="w-full h-48 object-cover" />
                </div>

                {/* Spec table */}
                <div className="bg-[#EEECEA] p-6">
                  <p className="text-xs font-semibold tracking-widest uppercase text-[#6B6A65] mb-5">Specifications</p>
                  <div className="space-y-3">
                    {[
                      { label: 'Durability', value: 'High strength' },
                      { label: 'Water resistance', value: 'Excellent' },
                      { label: 'Lifespan', value: '50+ years' },
                      { label: 'Recycled content', value: '100%' },
                      { label: 'Cost vs concrete', value: '20–40% less' },
                    ].map((s) => (
                      <div key={s.label} className="flex items-center justify-between border-t border-[#DEDAD3] pt-3">
                        <span className="text-sm text-[#6B6A65]">{s.label}</span>
                        <span className="text-sm font-semibold text-[#111110]">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div variants={reveal} className="order-1 md:order-2">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#111110] mb-6 leading-tight">
                  Recycled Plastic Paving Bricks
                </h2>
                <p className="text-[#6B6A65] leading-relaxed mb-4">
                  Manufactured entirely from recycled plastic waste — a durable, cost-effective alternative
                  to traditional concrete or asphalt paving. Stronger, longer-lasting, and sustainable.
                </p>
                <p className="text-[#6B6A65] leading-relaxed mb-10">
                  Every square metre diverts kilograms of plastic from the environment. Lightweight and
                  simple to install without specialist equipment.
                </p>

                <div className="space-y-5 mb-10">
                  {[
                    { label: 'Superior durability', desc: 'Resistant to weathering, cracking, and UV damage.' },
                    { label: 'Easy installation', desc: 'Lightweight — no heavy machinery required.' },
                    { label: 'Environmental offset', desc: 'Each project diverts significant plastic from landfills.' },
                    { label: 'Cost savings', desc: '20–40% cheaper than traditional paving materials.' },
                  ].map((item) => (
                    <div key={item.label} className="border-t border-[#DEDAD3] pt-5">
                      <div className="flex items-start justify-between gap-4">
                        <span className="font-medium text-[#111110] text-sm">{item.label}</span>
                        <span className="text-sm text-[#6B6A65] text-right max-w-xs">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#DEDAD3] pt-8 mb-8">
                  <p className="text-xs font-semibold tracking-widest uppercase text-[#6B6A65] mb-4">Applications</p>
                  <p className="text-[#6B6A65] text-sm">
                    Driveways · Walkways · Public spaces & parks · Government & municipal projects
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#2A5C45] hover:gap-3 transition-all"
                >
                  Request a quote →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111110]">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
          className="mx-auto max-w-6xl px-6 lg:px-8 py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
        >
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#F7F6F2] mb-2">
              Ready to order?
            </h2>
            <p className="text-[#9E9C96]">Get pricing and availability for our products.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#F7F6F2] hover:text-white transition-colors group shrink-0"
          >
            Contact us
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </section>
    </>
  );
}
