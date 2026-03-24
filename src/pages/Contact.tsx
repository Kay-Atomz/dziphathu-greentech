import { useState } from 'react';
import { motion } from 'framer-motion';

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number]} },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', subject: '', message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass =
    'w-full px-0 py-3 bg-transparent border-0 border-b border-[#DEDAD3] text-[#111110] placeholder-[#9E9C96] text-sm focus:outline-none focus:border-[#111110] transition-colors';

  return (
    <>
      {/* Hero */}
      <section className="bg-[#111110] pt-[72px]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.p variants={reveal} className="text-xs font-semibold tracking-widest uppercase text-[#6B6A65] mb-6">
              Contact
            </motion.p>
            <motion.h1 variants={reveal} className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-[#F7F6F2] max-w-2xl leading-tight mb-8">
              Let's start a conversation.
            </motion.h1>
            <motion.p variants={reveal} className="text-lg text-[#9E9C96] max-w-md leading-relaxed">
              For product enquiries, quotes, partnerships, or general questions — we respond within 24 hours.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact section */}
      <section className="bg-[#F7F6F2]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-20">

            {/* Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#6B6A65] mb-10">Send a message</p>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-[#6B6A65] mb-1">Full Name *</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className={inputClass} placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-[#6B6A65] mb-1">Email *</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} placeholder="john@example.com" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-[#6B6A65] mb-1">Phone</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+27 XX XXX XXXX" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs font-medium text-[#6B6A65] mb-1">Organisation</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className={inputClass} placeholder="Company name" />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-[#6B6A65] mb-1">Subject *</label>
                  <select id="subject" name="subject" required value={formData.subject} onChange={handleChange} className={inputClass}>
                    <option value="">Select a subject</option>
                    <option value="quote">Request a Quote</option>
                    <option value="briquettes">Eco Charcoal Briquettes</option>
                    <option value="paving">Plastic Paving Bricks</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-[#6B6A65] mb-1">Message *</label>
                  <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Tell us about your needs…" />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#F7F6F2] bg-[#111110] px-6 py-3 hover:bg-[#2A5C45] transition-colors group"
                >
                  Send message
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
              className="lg:pl-8"
            >
              <motion.p variants={reveal} className="text-xs font-semibold tracking-widest uppercase text-[#6B6A65] mb-10">
                Contact details
              </motion.p>

              <div className="space-y-0">
                {[
                  { label: 'Phone', value: '+27 71 168 7921', href: 'tel:+27711687921' },
                  { label: 'Email', value: 'info@dziphathugreentech.co.za', href: 'mailto:info@dziphathugreentech.co.za' },
                  { label: 'Location', value: 'Dzanani, Limpopo, South Africa', href: null },
                  { label: 'Hours', value: 'Mon–Fri 8AM–4PM · Sat 8AM–1PM', href: null },
                ].map((item) => (
                  <motion.div key={item.label} variants={reveal} className="border-t border-[#DEDAD3] py-6">
                    <p className="text-xs text-[#6B6A65] mb-2">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-[#111110] font-medium hover:text-[#2A5C45] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[#111110] font-medium">{item.value}</p>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div variants={reveal} className="mt-10 border-t border-[#DEDAD3] pt-8">
                <p className="text-xs font-semibold tracking-widest uppercase text-[#6B6A65] mb-4">Response time</p>
                <p className="text-sm text-[#6B6A65] leading-relaxed">
                  We respond to all enquiries within 24 hours during business hours.
                  For urgent matters, call us directly.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
