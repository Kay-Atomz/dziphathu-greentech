import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import founderImage from '../assets/images/Founder.jpeg';
import founderWorkingImage from '../assets/images/Founder working.jpeg';

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number]} },
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111110] pt-[72px]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.p variants={reveal} className="text-xs font-semibold tracking-widest uppercase text-[#6B6A65] mb-6">
              About us
            </motion.p>
            <motion.h1 variants={reveal} className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-[#F7F6F2] max-w-3xl leading-tight mb-8">
              Building a sustainable Limpopo.
            </motion.h1>
            <motion.p variants={reveal} className="text-lg text-[#9E9C96] max-w-xl leading-relaxed">
              Since 2019, Dziphathu GreenTech has transformed environmental challenges into
              economic opportunities — converting waste into valuable products and jobs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-[#F7F6F2] border-b border-[#DEDAD3]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid md:grid-cols-2 gap-16"
          >
            <motion.div variants={reveal}>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#6B6A65] mb-4">Vision</p>
              <p className="font-heading text-2xl md:text-3xl font-bold text-[#111110] leading-snug">
                To become a recognised leader in sustainable waste management across South Africa and beyond.
              </p>
            </motion.div>
            <motion.div variants={reveal}>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#6B6A65] mb-4">Mission</p>
              <p className="text-[#6B6A65] leading-relaxed text-lg">
                Provide sustainable, cost-effective waste management solutions that empower businesses
                and households to reduce their environmental impact — while creating meaningful
                economic opportunities in our communities.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founder photo + What we do */}
      <section className="bg-[#EEECEA]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-0">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid md:grid-cols-2 gap-0"
          >
            <motion.div variants={reveal} className="overflow-hidden">
              <img
                src={founderImage}
                alt="Founder of Dziphathu GreenTech"
                className="w-full h-80 md:h-full object-cover"
                style={{ minHeight: '380px' }}
              />
            </motion.div>
            <motion.div variants={reveal} className="flex flex-col justify-center px-8 md:px-14 py-16">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#6B6A65] mb-6">What we do</p>
              <div className="space-y-6">
                {[
                  { title: 'Waste Collection & Processing', body: 'We collect plastic and biomass waste from schools, businesses, and communities across Limpopo.' },
                  { title: 'Product Manufacturing', body: 'Converting waste into eco briquettes and plastic paving bricks that serve households and construction.' },
                  { title: 'Community Empowerment', body: 'Creating jobs and supporting local cooperatives through skills transfer and youth employment.' },
                ].map((item) => (
                  <div key={item.title} className="border-t border-[#DEDAD3] pt-5">
                    <h3 className="font-medium text-[#111110] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#6B6A65] leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core values */}
      <section className="bg-[#F7F6F2]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.p variants={reveal} className="text-xs font-semibold tracking-widest uppercase text-[#6B6A65] mb-12">
              Core values
            </motion.p>
            <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#DEDAD3]">
              {[
                { title: 'Honesty', body: 'We operate with integrity in all dealings — ensuring trust and credibility with clients, partners, and communities.' },
                { title: 'Transparency', body: 'Clear communication and openness about our processes, impact, and operations build lasting relationships and accountability.' },
                { title: 'Reliability', body: 'We consistently deliver on our promises, providing dependable solutions that our clients can count on long term.' },
              ].map((v, i) => (
                <motion.div key={v.title} variants={reveal} className={`py-8 ${i > 0 ? 'md:pl-12' : ''} ${i < 2 ? 'md:pr-12' : ''}`}>
                  <h3 className="font-heading text-2xl font-bold text-[#111110] mb-3">{v.title}</h3>
                  <p className="text-sm text-[#6B6A65] leading-relaxed">{v.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact numbers */}
      <section className="bg-[#111110]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p variants={reveal} className="text-xs font-semibold tracking-widest uppercase text-[#6B6A65] mb-12">
              Impact
            </motion.p>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { value: '800+ Tons', label: 'of waste diverted from landfills and turned into valuable products' },
                { value: '12+ Jobs', label: 'created for youth in our community, building a skilled local workforce' },
                { value: 'B-BBEE L1', label: 'certified — our highest standard of transformation and governance' },
              ].map((item) => (
                <motion.div key={item.value} variants={reveal} className="border-t border-[#1C1C1A] pt-8">
                  <div className="font-heading text-4xl font-bold text-[#F7F6F2] mb-3">{item.value}</div>
                  <p className="text-sm text-[#9E9C96] leading-relaxed">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder working */}
      <section className="bg-[#F7F6F2]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-0">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid md:grid-cols-2 gap-0"
          >
            <motion.div variants={reveal} className="flex flex-col justify-center py-16 pr-0 md:pr-16">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#6B6A65] mb-6">Get involved</p>
              <h2 className="font-heading text-4xl font-bold text-[#111110] mb-4 leading-tight">
                Work with us.
              </h2>
              <p className="text-[#6B6A65] leading-relaxed mb-8">
                Whether you're looking for sustainable waste solutions, want to stock our products,
                or are interested in a partnership — we'd like to hear from you.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#2A5C45] hover:gap-3 transition-all"
              >
                Get in touch →
              </Link>
            </motion.div>
            <motion.div variants={reveal} className="overflow-hidden">
              <img
                src={founderWorkingImage}
                alt="Founder working"
                className="w-full h-72 md:h-full object-cover"
                style={{ minHeight: '360px' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
