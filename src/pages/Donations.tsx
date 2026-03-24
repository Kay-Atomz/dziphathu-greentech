import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number]} },
};

const tiers = [
  { amount: 'R500', title: 'Materials', desc: 'Raw materials to produce 100 kg of eco briquettes — serving 5 families for a month.' },
  { amount: 'R2,000', title: 'Skills Training', desc: 'Funds a week-long skills training workshop for 10 community members.' },
  { amount: 'R5,000', title: 'Equipment', desc: 'Contributes to upgrading processing equipment, increasing production capacity by 20%.' },
  { amount: 'R10,000+', title: 'Major Impact', desc: 'Enables expansion to new communities, creating jobs and environmental benefits.' },
];

const impactAreas = [
  {
    title: 'Community Empowerment',
    body: 'Skills training, job creation, and cooperative development in rural communities.',
    items: ['Youth employment programs', 'Skills transfer workshops', 'Cooperative support'],
  },
  {
    title: 'Clean Energy Production',
    body: 'Equipment, materials, and operations to increase eco briquette production.',
    items: ['Production equipment upgrades', 'Raw material sourcing', 'Quality control systems'],
  },
  {
    title: 'Environmental Protection',
    body: 'Research, conservation, and sustainable sourcing that protects forests.',
    items: ['Waste collection programs', 'Sustainable sourcing research', 'Forest conservation'],
  },
];

export default function Donations() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111110] pt-[72px]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.p variants={reveal} className="text-xs font-semibold tracking-widest uppercase text-[#6B6A65] mb-6">
              Support our work
            </motion.p>
            <motion.h1 variants={reveal} className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-[#F7F6F2] max-w-3xl leading-tight mb-8">
              Help us build a cleaner South Africa.
            </motion.h1>
            <motion.p variants={reveal} className="text-lg text-[#9E9C96] max-w-lg leading-relaxed mb-8">
              Your contribution expands access to clean energy, reduces pollution, and creates
              sustainable livelihoods in rural Limpopo.
            </motion.p>
            <motion.p variants={reveal} className="text-sm text-[#2A5C45] font-medium">
              100% of donations go directly to environmental projects
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Impact areas */}
      <section className="bg-[#F7F6F2]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
            className="text-xs font-semibold tracking-widest uppercase text-[#6B6A65] mb-12"
          >
            Where your donation goes
          </motion.p>

          <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#DEDAD3]">
            {impactAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
                className={`py-8 ${i > 0 ? 'md:pl-10' : ''} ${i < 2 ? 'md:pr-10' : ''}`}
              >
                <h3 className="font-medium text-[#111110] mb-3">{area.title}</h3>
                <p className="text-sm text-[#6B6A65] leading-relaxed mb-5">{area.body}</p>
                <ul className="space-y-1.5">
                  {area.items.map((item) => (
                    <li key={item} className="text-sm text-[#6B6A65] flex items-start gap-2">
                      <span className="text-[#2A5C45] mt-0.5">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contribution tiers */}
      <section className="bg-[#EEECEA]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
            className="text-xs font-semibold tracking-widest uppercase text-[#6B6A65] mb-12"
          >
            Contribution levels
          </motion.p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#DEDAD3]">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.amount}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
                className={`py-8 ${i > 0 ? 'sm:pl-8' : ''} ${i < 3 ? 'sm:pr-8' : ''}`}
              >
                <div className="font-heading text-3xl font-bold text-[#111110] mb-1">{tier.amount}</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#2A5C45] mb-3">{tier.title}</div>
                <p className="text-sm text-[#6B6A65] leading-relaxed">{tier.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to donate */}
      <section className="bg-[#F7F6F2]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="max-w-2xl"
          >
            <motion.p variants={reveal} className="text-xs font-semibold tracking-widest uppercase text-[#6B6A65] mb-6">
              How to donate
            </motion.p>
            <motion.h2 variants={reveal} className="font-heading text-3xl md:text-4xl font-bold text-[#111110] mb-4">
              Donation processing coming soon.
            </motion.h2>
            <motion.p variants={reveal} className="text-[#6B6A65] leading-relaxed mb-8">
              We're setting up secure donation processing. In the meantime, contact us directly
              to discuss partnership and contribution opportunities.
            </motion.p>
            <motion.div variants={reveal} className="flex flex-wrap gap-8 items-center">
              <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-[#2A5C45] hover:gap-3 transition-all">
                Contact us about donations →
              </Link>
              <a href="mailto:info@dziphathugreentech.co.za" className="text-sm text-[#6B6A65] hover:text-[#111110] transition-colors">
                Email us directly
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Other ways to help */}
      <section className="bg-[#111110]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.p variants={reveal} className="text-xs font-semibold tracking-widest uppercase text-[#6B6A65] mb-12">
              Other ways to support us
            </motion.p>
            <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#1C1C1A]">
              {[
                { title: 'Buy our products', body: 'Purchase eco briquettes or plastic paving bricks. Every sale supports our operations and environmental mission.', link: { to: '/products', label: 'View products' } },
                { title: 'Spread the word', body: 'Share our story on social media and raise awareness about sustainable waste management.', link: { to: '/hasha-mulilo', label: 'Read our story' } },
                { title: 'Partner with us', body: 'Organisations can partner on projects, provide resources, or offer expertise to amplify our impact.', link: { to: '/contact', label: 'Get in touch' } },
              ].map((item, i) => (
                <motion.div key={item.title} variants={reveal} className={`py-8 ${i > 0 ? 'md:pl-10' : ''} ${i < 2 ? 'md:pr-10' : ''}`}>
                  <h3 className="font-medium text-[#F7F6F2] mb-3">{item.title}</h3>
                  <p className="text-sm text-[#9E9C96] leading-relaxed mb-5">{item.body}</p>
                  <Link to={item.link.to} className="text-sm text-[#2A5C45] hover:text-[#3D7A5E] transition-colors inline-flex items-center gap-1">
                    {item.link.label} →
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transparency */}
      <section className="bg-[#EEECEA] border-t border-[#DEDAD3]">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}
          className="mx-auto max-w-6xl px-6 lg:px-8 py-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#6B6A65] mb-4">Transparency</p>
          <p className="text-[#6B6A65] max-w-2xl leading-relaxed">
            Every contribution is tracked and allocated directly to our environmental and community programs.
            As a B-BBEE Level 1 certified company, we maintain the highest standards of governance and accountability.
            Regular impact updates will be shared with all supporters.
          </p>
        </motion.div>
      </section>
    </>
  );
}
