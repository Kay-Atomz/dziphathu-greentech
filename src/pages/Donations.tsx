export default function Donations() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-forest-900 via-primary-900 to-forest-800 py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Support Our Environmental Mission
            </h1>
            <p className="text-xl text-forest-100 leading-relaxed mb-8">
              Your contribution helps us expand access to clean energy, reduce environmental
              pollution, and create sustainable livelihoods in rural communities across South Africa.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur text-white">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              100% of donations go directly to environmental projects
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Impact Areas */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Where Your Donation Goes
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Every contribution makes a tangible difference in communities and the environment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-forest-50 rounded-2xl p-8 border-2 border-transparent hover:border-primary-300 transition-all">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary-600 text-white mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                Clean Energy Production
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Funding equipment, materials, and operations to increase production of eco
                briquettes, providing more families with affordable, clean cooking energy.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-neutral-700">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Production equipment upgrades
                </li>
                <li className="flex items-start gap-2 text-sm text-neutral-700">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Raw material sourcing
                </li>
                <li className="flex items-start gap-2 text-sm text-neutral-700">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Quality control systems
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-forest-50 to-primary-50 rounded-2xl p-8 border-2 border-transparent hover:border-forest-300 transition-all">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-forest-600 text-white mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                Community Empowerment
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Supporting skills training, job creation, and cooperative development in rural
                communities, building local capacity for sustainable development.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-neutral-700">
                  <svg className="w-5 h-5 text-forest-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Youth employment programs
                </li>
                <li className="flex items-start gap-2 text-sm text-neutral-700">
                  <svg className="w-5 h-5 text-forest-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Skills transfer workshops
                </li>
                <li className="flex items-start gap-2 text-sm text-neutral-700">
                  <svg className="w-5 h-5 text-forest-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Cooperative support
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-earth-50 rounded-2xl p-8 border-2 border-transparent hover:border-earth-300 transition-all">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-earth-600 text-white mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                Environmental Protection
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                Funding research, conservation efforts, and sustainable sourcing practices that
                protect forests and reduce our environmental footprint.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-neutral-700">
                  <svg className="w-5 h-5 text-earth-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Waste collection programs
                </li>
                <li className="flex items-start gap-2 text-sm text-neutral-700">
                  <svg className="w-5 h-5 text-earth-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Sustainable sourcing research
                </li>
                <li className="flex items-start gap-2 text-sm text-neutral-700">
                  <svg className="w-5 h-5 text-earth-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Forest conservation initiatives
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Impact */}
      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Your Impact in Action
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              See what different contribution levels can help us achieve
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 border-2 border-primary-200">
              <div className="text-3xl font-bold text-primary-700 mb-2">R500</div>
              <div className="text-sm font-semibold text-neutral-900 mb-3">Materials for Production</div>
              <p className="text-sm text-neutral-700">
                Provides raw materials to produce 100kg of eco briquettes, serving 5 families for a month.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-forest-200">
              <div className="text-3xl font-bold text-forest-700 mb-2">R2,000</div>
              <div className="text-sm font-semibold text-neutral-900 mb-3">Skills Training</div>
              <p className="text-sm text-neutral-700">
                Funds a week-long skills training workshop for 10 community members.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-earth-200">
              <div className="text-3xl font-bold text-earth-700 mb-2">R5,000</div>
              <div className="text-sm font-semibold text-neutral-900 mb-3">Equipment Upgrade</div>
              <p className="text-sm text-neutral-700">
                Contributes to upgrading processing equipment, increasing production capacity by 20%.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-primary-300">
              <div className="text-3xl font-bold text-primary-700 mb-2">R10,000+</div>
              <div className="text-sm font-semibold text-neutral-900 mb-3">Major Impact</div>
              <p className="text-sm text-neutral-700">
                Enables expansion to new communities, creating jobs and environmental benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-600 to-forest-700 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Your contribution helps us create a cleaner environment and sustainable livelihoods.
            </p>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <svg className="w-6 h-6 text-primary-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg font-semibold">Donation options coming soon</span>
              </div>
              <p className="text-primary-100">
                We're setting up secure donation processing. In the meantime, contact us directly
                to learn about partnership and contribution opportunities.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white text-primary-700 font-medium hover:bg-primary-50 transition-colors"
              >
                Contact Us About Donations
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="mailto:info@dziphathugreentech.co.za"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-transparent text-white font-medium border-2 border-white hover:bg-white/10 transition-colors"
              >
                Email Us Directly
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Other Ways to Support Us
            </h2>
            <p className="text-xl text-neutral-600">
              Not ready to donate? Here are other ways you can help
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-neutral-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-700 mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Buy Our Products</h3>
              <p className="text-neutral-700 mb-4">
                Purchase our eco briquettes or plastic paving bricks. Every sale supports our
                operations and environmental mission.
              </p>
              <a href="/products" className="text-primary-700 font-medium hover:text-primary-800 inline-flex items-center gap-1">
                View Products
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="bg-white rounded-xl p-8 border border-neutral-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-forest-100 text-forest-700 mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Spread the Word</h3>
              <p className="text-neutral-700 mb-4">
                Share our story on social media and help raise awareness about sustainable waste
                management solutions.
              </p>
              <a href="https://facebook.com/dziphathugreentech" target="_blank" rel="noopener noreferrer" className="text-forest-700 font-medium hover:text-forest-800 inline-flex items-center gap-1">
                Follow Us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="bg-white rounded-xl p-8 border border-neutral-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-earth-100 text-earth-700 mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Partner With Us</h3>
              <p className="text-neutral-700 mb-4">
                Organizations can partner with us on projects, provide resources, or offer expertise
                to amplify our impact.
              </p>
              <a href="/contact" className="text-earth-700 font-medium hover:text-earth-800 inline-flex items-center gap-1">
                Get in Touch
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 rounded-2xl p-8 md:p-12 border border-primary-200">
            <div className="text-center mb-8">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-600 text-white mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                Our Commitment to Transparency
              </h3>
            </div>
            <div className="space-y-4 text-neutral-700">
              <p>
                We believe in complete transparency about how donations are used. Every contribution
                is tracked and allocated directly to our environmental and community programs.
              </p>
              <p>
                As a B-BBEE Level 1 certified company, we maintain the highest standards of governance,
                accountability, and ethical operations. Regular updates on our impact and financial
                stewardship will be shared with all supporters.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
