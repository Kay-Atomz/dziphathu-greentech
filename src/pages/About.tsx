export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-forest-50 via-white to-primary-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
              Building a Sustainable Future
            </h1>
            <p className="text-xl text-neutral-700 leading-relaxed">
              Since 2019, Dziphathu Green Tech has been at the forefront of waste management
              innovation in South Africa, transforming environmental challenges into opportunities
              for sustainable development.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-primary-50 rounded-2xl p-8 md:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">Our Vision</h2>
              <p className="text-lg text-neutral-700 leading-relaxed">
                To become a dependable and recognized leader in the waste management industry,
                setting the standard for sustainable solutions across South Africa and beyond.
              </p>
            </div>

            <div className="bg-forest-50 rounded-2xl p-8 md:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest-600 text-white mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">Our Mission</h2>
              <p className="text-lg text-neutral-700 leading-relaxed">
                To provide sustainable, cost-effective waste management solutions that empower
                businesses and households to reduce their environmental impact while creating
                economic opportunities in our communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-neutral-200">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 text-primary-700 mb-6">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Honesty</h3>
              <p className="text-neutral-700 leading-relaxed">
                We operate with integrity in all our dealings, ensuring trust and credibility
                with our clients, partners, and communities.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-neutral-200">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-forest-100 text-forest-700 mb-6">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Transparency</h3>
              <p className="text-neutral-700 leading-relaxed">
                Clear communication and openness about our processes, impact, and operations
                build lasting relationships and accountability.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-neutral-200">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-earth-100 text-earth-700 mb-6">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Reliability</h3>
              <p className="text-neutral-700 leading-relaxed">
                We consistently deliver on our promises, providing dependable solutions that
                our clients can count on for the long term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-neutral-900 mb-6">
                What We Do
              </h2>
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                We specialize in converting waste materials into valuable, sustainable products
                that serve multiple purposes while protecting our environment.
              </p>
              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                By recycling plastic and biomass waste, we reduce the amount of harmful materials
                entering landfills and oceans, while creating affordable alternatives that benefit
                communities across South Africa.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-primary-700 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Waste Collection & Processing</h4>
                    <p className="text-neutral-700">
                      We collect plastic and biomass waste from schools, businesses, and communities
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-primary-700 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Product Manufacturing</h4>
                    <p className="text-neutral-700">
                      Converting waste into eco briquettes and plastic paving bricks
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-primary-700 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Community Empowerment</h4>
                    <p className="text-neutral-700">
                      Creating jobs and supporting local cooperatives through skills transfer
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-600 to-forest-700 rounded-2xl p-8 md:p-10 text-white">
              <h3 className="text-3xl font-bold mb-6">Our Impact</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-white/30 pl-6">
                  <div className="text-4xl font-bold mb-2">800+ Tons</div>
                  <div className="text-primary-100">
                    of waste diverted from landfills and turned into valuable products
                  </div>
                </div>
                <div className="border-l-4 border-white/30 pl-6">
                  <div className="text-4xl font-bold mb-2">12+ Jobs</div>
                  <div className="text-primary-100">
                    created for youth in our community, building a skilled workforce
                  </div>
                </div>
                <div className="border-l-4 border-white/30 pl-6">
                  <div className="text-4xl font-bold mb-2">99% Satisfaction</div>
                  <div className="text-primary-100">
                    from clients who trust our sustainable solutions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Certified Excellence
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our commitment to quality and empowerment is recognized through official certifications
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border-2 border-primary-200 text-center">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary-100 text-primary-700 mb-6">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">B-BBEE Level 1</h3>
              <p className="text-neutral-700 leading-relaxed">
                We are proud to hold a Level 1 B-BBEE certification, demonstrating our commitment
                to economic transformation and empowerment in South Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-forest-600 to-primary-700 rounded-3xl px-8 py-16 md:px-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Us in Creating Change
            </h2>
            <p className="text-xl text-forest-100 mb-8 max-w-3xl mx-auto">
              Whether you're a business looking for sustainable solutions or want to support
              our environmental mission, we'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white text-forest-700 font-medium hover:bg-forest-50 transition-colors"
              >
                Get in Touch
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
