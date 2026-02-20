import { useState } from 'react';
import bookHashaMulilo from '../assets/Books/Book Hasha Mulilo.png';

export default function Book() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscription:', { name, email });
    setIsSubmitted(true);
  };

  return (
    <>
      <section className="bg-gradient-to-br from-forest-900 via-primary-900 to-forest-800 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-8">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-semibold text-forest-100">
              Featured Publication
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Hasha Mulilo:
              <span className="block text-primary-200">Our Story of Sustainable Innovation</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-forest-100">
              Discover how local observation, hands-on experimentation, and disciplined execution
              built a clean energy enterprise creating real environmental and economic impact.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                <div className="text-sm font-semibold text-white">Real Journey</div>
                <div className="mt-1 text-sm text-forest-100">From village insight to registered enterprise.</div>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                <div className="text-sm font-semibold text-white">Technical Lessons</div>
                <div className="mt-1 text-sm text-forest-100">Practical learning from materials to process control.</div>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                <div className="text-sm font-semibold text-white">Proven Impact</div>
                <div className="mt-1 text-sm text-forest-100">Cleaner energy alternatives and stronger communities.</div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#book-subscribe"
                className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-700"
              >
                Get Free Digital Copy
              </a>
              <a
                href="#book-highlights"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-transparent px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore Book Highlights
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl p-5 shadow-2xl sm:p-6">
              <img
                src={bookHashaMulilo}
                alt="Hasha Mulilo book cover"
                className="mx-auto w-full max-w-md rounded-2xl object-contain shadow-2xl"
              />
              <div className="mt-4 rounded-xl bg-neutral-50 px-4 py-3 text-sm text-neutral-700">
                A practical, first-hand account of building a sustainable energy business in Southern Africa.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="book-highlights" className="bg-gradient-to-b from-forest-50 to-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-neutral-900 md:text-5xl">What You Will Learn</h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-neutral-600">
              A practical roadmap for entrepreneurs, innovators, and sustainability leaders.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-neutral-900">From Idea to Enterprise</h3>
              <p className="mt-3 text-neutral-700">
                How a simple village observation evolved into a company delivering sustainable energy solutions.
              </p>
            </article>
            <article className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-neutral-900">Technical Mastery</h3>
              <p className="mt-3 text-neutral-700">
                Lessons from testing moisture, pressure, material composition, and combustion performance.
              </p>
            </article>
            <article className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-neutral-900">Strategic Partnerships</h3>
              <p className="mt-3 text-neutral-700">
                How collaborations with UNDP, SANParks, and others supported scale and credibility.
              </p>
            </article>
            <article className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-neutral-900">Business Sustainability</h3>
              <p className="mt-3 text-neutral-700">
                Balancing profitability, mission alignment, and long-term operational resilience.
              </p>
            </article>
            <article className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-neutral-900">Environmental Outcomes</h3>
              <p className="mt-3 text-neutral-700">
                Real progress in reducing deforestation pressure and building cleaner fuel options.
              </p>
            </article>
            <article className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-neutral-900">Honest Lessons</h3>
              <p className="mt-3 text-neutral-700">
                Straight reflections on failures, pivots, and decisions that changed the trajectory.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 md:p-12">
            <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">About the Story</h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-700">
              This book chronicles the real journey of Dziphathu Green Tech and the Hasha Mulilo
              Eco Briquettes project, from a question asked in Tshikuwi Village to a structured clean
              energy enterprise operating near Kruger National Park.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-neutral-700">
              It is not a theoretical guide. It is the account of what happened in practice: manual
              production from 2019 to 2022, lessons from failed batches, early funding support from
              UNDP, strategic pivots, and the partnerships that enabled growth.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-neutral-700">
              Written for entrepreneurs and environmental changemakers, this publication provides
              grounded insights shaped by lived experience, technical experimentation, and disciplined
              execution.
            </p>
          </div>
        </div>
      </section>

      <section id="book-subscribe" className="bg-gradient-to-br from-primary-600 to-forest-700 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center text-white">
            <h2 className="text-4xl font-bold md:text-5xl">Get Your Free Digital Copy</h2>
            <p className="mt-4 text-xl text-primary-100">
              Subscribe to receive book access and updates from Dziphathu Green Tech.
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-8 shadow-xl md:p-12">
              <div className="space-y-6">
                <div>
                  <label htmlFor="book-name" className="mb-2 block text-sm font-medium text-neutral-900">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="book-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border border-neutral-300 px-4 py-3.5 text-lg outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="book-email" className="mb-2 block text-sm font-medium text-neutral-900">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="book-email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-neutral-300 px-4 py-3.5 text-lg outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="rounded-lg border border-forest-200 bg-forest-50 p-4">
                  <p className="text-sm text-neutral-700">
                    By subscribing, you will also receive updates on our environmental initiatives,
                    products, and sustainability insights. You can unsubscribe anytime.
                  </p>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-primary-600 to-forest-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:from-primary-700 hover:to-forest-700"
                >
                  Subscribe & Get the Book
                </button>

                <p className="text-center text-sm text-neutral-600">
                  We respect your privacy. Your information will never be shared.
                </p>
              </div>
            </form>
          ) : (
            <div className="rounded-2xl bg-white p-8 text-center shadow-xl md:p-12">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mb-4 text-3xl font-bold text-neutral-900">You&apos;re All Set!</h3>
              <p className="mb-6 text-lg text-neutral-700">
                Thank you for subscribing. We will email your free digital copy and book updates.
              </p>
              <div className="rounded-lg border border-primary-200 bg-primary-50 p-6">
                <p className="text-sm text-neutral-700">
                  Check your inbox for confirmation and add us to your contacts so you do not miss any updates.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
