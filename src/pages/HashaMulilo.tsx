export default function HashaMulilo() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-forest-900 via-forest-800 to-primary-900 py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-800 text-forest-200 text-sm font-medium mb-6">
              Our Flagship Project
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Hasha Mulilo Eco Briquettes
            </h1>
            <p className="text-xl text-forest-100 leading-relaxed">
              From a simple observation in Tshikuwi Village to a clean energy enterprise
              transforming lives across Limpopo Province.
            </p>
          </div>
        </div>
        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Timeline Story */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">The Journey</h2>
            <p className="text-xl text-neutral-600">
              A story of innovation, persistence, and environmental impact
            </p>
          </div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {/* 2017 */}
            <div className="relative pl-8 border-l-4 border-primary-200">
              <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-primary-600 border-4 border-white"></div>
              <div className="mb-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold">
                  2017
                </span>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">The Observation</h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                The idea began not as a business concept or project proposal, but as an observation
                shaped by everyday life in Tshikuwi Village, in the Nzhelele area of Limpopo Province.
                A growing curiosity about how people cook, how energy is produced, and how natural
                resources are used led to a simple but demanding question:
              </p>
              <blockquote className="border-l-4 border-forest-600 pl-4 italic text-lg text-neutral-800">
                "Can clean cooking energy be produced using waste, without cutting trees?"
              </blockquote>
            </div>

            {/* 2019 */}
            <div className="relative pl-8 border-l-4 border-forest-200">
              <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-forest-600 border-4 border-white"></div>
              <div className="mb-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-forest-100 text-forest-700 text-sm font-semibold">
                  2019
                </span>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                The Beginning: Manual Production
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                In 2019, the idea took its first formal step when Dziphathu Green Tech was registered
                as a company. Production began in a grandmother's backyard using bare hands, basic
                tools, and manual machines that were fabricated from scratch.
              </p>
              <div className="bg-forest-50 rounded-lg p-6 mb-4">
                <h4 className="font-semibold text-neutral-900 mb-3">Early Tools & Methods</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-neutral-700">
                    <svg className="w-5 h-5 text-forest-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Simple briquette extruder built by hand
                  </li>
                  <li className="flex items-start gap-2 text-neutral-700">
                    <svg className="w-5 h-5 text-forest-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Handmade mortar and pestle for crushing materials
                  </li>
                  <li className="flex items-start gap-2 text-neutral-700">
                    <svg className="w-5 h-5 text-forest-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Every briquette produced manually until 2022
                  </li>
                </ul>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                This early phase was not about speed or scale. It was about learning. Working
                without machines forced a deep understanding of materials, moisture control,
                pressure, and combustion behavior. Each failure revealed something new. Each
                improvement strengthened the product and clarified what was technically possible.
              </p>
            </div>

            {/* 2022 */}
            <div className="relative pl-8 border-l-4 border-primary-200">
              <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-primary-600 border-4 border-white"></div>
              <div className="mb-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold">
                  2022
                </span>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                First Funding & Transition
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                As the product began to prove itself, the journey entered a new phase. Hasha Mulilo
                received its first funding support from the UNDP GEF Vhembe Biosphere Reserve (VBR),
                enabling the purchase of a crusher and marking the transition from purely manual
                production to early-stage processing capacity.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white border-2 border-primary-200 rounded-lg p-6">
                  <h4 className="font-semibold text-neutral-900 mb-2">Business Development</h4>
                  <p className="text-sm text-neutral-700">
                    Through engagement with Indalo Inclusive South Africa, the business model was
                    clarified and strengthened. Strategy, operations, governance, and financial
                    planning were refined.
                  </p>
                </div>
                <div className="bg-white border-2 border-forest-200 rounded-lg p-6">
                  <h4 className="font-semibold text-neutral-900 mb-2">Production Excellence</h4>
                  <p className="text-sm text-neutral-700">
                    Integration into the National Cleaner Production Centre South Africa (NCPC-SA)
                    ecosystem strengthened process efficiency and quality management.
                  </p>
                </div>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                A strategic shift in sourcing also occurred. Early raw materials came from schools,
                but volume inconsistencies and contamination made scaling difficult. This led to
                identifying Bende Mutale Village in the Mutale area as a more suitable location.
              </p>
            </div>

            {/* 2023 */}
            <div className="relative pl-8 border-l-4 border-forest-200">
              <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-forest-600 border-4 border-white"></div>
              <div className="mb-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-forest-100 text-forest-700 text-sm font-semibold">
                  2023
                </span>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                Expansion Near Kruger National Park
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                A formal production site was established near the Kruger National Park, close to
                Pafuri Gate—an area with abundant naturally fallen leaves and twigs that can be
                collected without damaging living trees.
              </p>
              <div className="bg-gradient-to-br from-forest-600 to-forest-800 rounded-lg p-6 text-white mb-4">
                <h4 className="font-semibold mb-3">Key Partnerships</h4>
                <p className="text-forest-100 mb-3">
                  This expansion was realized through collaboration with leading organizations:
                </p>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Kruger National Park
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    TotalEnergies
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Vhembe Biosphere Reserve
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Indalo Inclusive SA
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    NCPC-SA
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    LIDET
                  </li>
                </ul>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                During this period, production systems, quality control, and environmental
                performance were significantly strengthened.
              </p>
            </div>

            {/* Today */}
            <div className="relative pl-8">
              <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-earth-600 border-4 border-white"></div>
              <div className="mb-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-earth-100 text-earth-700 text-sm font-semibold">
                  Today
                </span>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                A Clean Energy Enterprise
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Today, Hasha Mulilo Eco Briquettes stands as a clean energy enterprise shaped by
                lived experience, technical learning, and disciplined growth. From a simple question
                in a rural village to a sustainable business model creating environmental and
                economic value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-primary-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Impact at a Glance</h2>
            <p className="text-xl text-primary-100">
              The difference we're making in Limpopo and beyond
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-white mb-2">Zero</div>
              <div className="text-primary-100 mb-4">Trees Cut Down</div>
              <p className="text-sm text-primary-50">
                All materials sourced from naturally fallen biomass
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-primary-100 mb-4">Waste Conversion</div>
              <p className="text-sm text-primary-50">
                Every bit of collected biomass is transformed into energy
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-white mb-2">Clean</div>
              <div className="text-primary-100 mb-4">Cooking Energy</div>
              <p className="text-sm text-primary-50">
                Smokeless, odorless fuel protecting health and environment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Looking Forward</h2>
            <p className="text-xl text-neutral-600">
              The journey continues with expanded impact and reach
            </p>
          </div>

          <div className="bg-gradient-to-br from-forest-50 to-primary-50 rounded-2xl p-8 md:p-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-forest-600 text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Scaling Production</h3>
                  <p className="text-neutral-700">
                    Expanding capacity to serve more communities across South Africa while
                    maintaining quality and environmental standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Community Growth</h3>
                  <p className="text-neutral-700">
                    Creating more employment opportunities and transferring skills to empower
                    local communities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-earth-600 text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Environmental Protection</h3>
                  <p className="text-neutral-700">
                    Continuing to develop sustainable solutions that protect forests and reduce
                    carbon emissions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-forest-600 to-primary-700 rounded-3xl px-8 py-16 md:px-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Support Clean Energy Innovation
            </h2>
            <p className="text-xl text-forest-100 mb-8 max-w-3xl mx-auto">
              Join us in expanding access to clean, affordable cooking energy across South Africa.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white text-forest-700 font-medium hover:bg-forest-50 transition-colors"
              >
                Partner With Us
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/donations"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-transparent text-white font-medium border-2 border-white hover:bg-white/10 transition-colors"
              >
                Support Our Mission
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
