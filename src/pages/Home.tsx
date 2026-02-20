import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn } from '../utils/animations';
import teamImage from '../assets/images/Team in uniform.jpeg';
import founderImage from '../assets/images/Founder.jpeg';
import founderSpeechImage from '../assets/images/Founder giving speech.jpeg';
import workingFieldImage from '../assets/images/Working in field.jpeg';
import productBurningImage from '../assets/images/Product burning.jpeg';
import productBricksImage from '../assets/images/Product bricks.jpeg';
import productPackagedImage from '../assets/images/Product packaged.jpeg';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-forest-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {/* <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                <motion.span
                  className="flex h-2 w-2 rounded-full bg-primary-600"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Operating since 2019
              </motion.div> */}
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 leading-tight">
                Creating a{' '}
                <span className="text-primary-600">Cleaner</span>{' '}
                Environment
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl text-neutral-700 mb-8 leading-relaxed">
                Transforming plastic and biomass waste into valuable, sustainable products.
                We're building a cleaner future through innovative waste management solutions.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 hover:scale-105 transition-all group"
                >
                  Explore Our Products
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white text-neutral-900 font-medium border-2 border-neutral-200 hover:border-neutral-300 hover:scale-105 transition-all"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative lg:h-[500px] hidden lg:block"
            >
              <motion.div
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-72 h-72 bg-primary-200 rounded-3xl"
              />
              <motion.div
                animate={{ rotate: [0, -5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-0 left-0 w-72 h-72 bg-forest-200 rounded-3xl"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[22rem] h-[22rem] bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer"
              >
                <img
                  src={founderImage}
                  alt="Founder of Dziphathu Green Tech"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-900/80 to-transparent p-6">
                  <p className="text-lg font-semibold text-white">
                    Sustainable Solutions in Action
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary-600 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '800+', label: 'Tons Waste Recycled' },
              { value: '12+', label: 'Youths Employed' },
              { value: '99%', label: 'Client Satisfaction' },
              { value: 'Level 1', label: 'B-BBEE Certified' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                  className="text-4xl md:text-5xl font-bold text-white mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-primary-100 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Environmentally Friendly Solutions */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <div className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">
              SAVING THE ENVIRONMENT
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Environmentally Friendly Solutions
            </h2>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto">
              We recycle plastic and biomass by converting them into a variety of useful and valuable products,
              such as plastic paving bricks and charcoal briquettes.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInLeft} className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    Converting biomass to charcoal briquettes
                  </h3>
                  <p className="text-neutral-700">
                    By recycling this biomass, we can reduce the amount of waste being sent to landfills,
                    while providing a clean, efficient, and affordable source of energy.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInLeft} className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    Reducing air pollution
                  </h3>
                  <p className="text-neutral-700">
                    Charcoal briquettes can also provide a smokeless and odorless fuel for households and
                    small businesses, improving air quality and reducing the risk of health problems caused
                    by burning wood and other fuels.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={teamImage}
                  alt="Dziphathu Green Tech Team"
                  className="w-full h-auto object-cover"
                />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs"
              >
                <div className="text-3xl font-bold text-primary-600 mb-1">Our Team</div>
                <div className="text-sm text-neutral-600">
                  Empowering communities through sustainable solutions
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">
              OUR CLIENTS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Industries we serve
            </h2>
          </div>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: 'Schools',
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                title: 'Government',
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Businesses',
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
                title: 'Residential',
              },
            ].map((industry, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -8, scale: 1.05 }}
                className="bg-white rounded-2xl p-8 border border-neutral-200 text-center hover:border-primary-300 hover:shadow-lg transition-all cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center justify-center mb-6 text-primary-600"
                >
                  {industry.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-neutral-900">{industry.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Products Section */}
      <section className="py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Our Products
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Converting waste into valuable, eco-friendly products that benefit communities and the environment
            </p>
          </div>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
            {/* Eco Briquettes */}
            <motion.div
              variants={scaleIn}
              whileHover={{ y: -8 }}
              className="group relative bg-gradient-to-br from-forest-50 to-primary-50 rounded-2xl p-8 hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="mb-6 overflow-hidden rounded-xl">
                <img
                  src={productBurningImage}
                  alt="Eco charcoal briquettes"
                  className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-start justify-between mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex h-14 w-14 items-center justify-center rounded-xl bg-forest-600 text-white"
                >
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                Eco Charcoal Briquettes
              </h3>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                Smokeless, odorless fuel made from biomass waste. An affordable and sustainable energy source that reduces landfill waste and air pollution.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'Made from renewable biomass',
                  'Smokeless and odorless combustion',
                  'Cost-effective energy solution',
                ].map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-2 text-sm text-neutral-700"
                  >
                    <svg className="w-5 h-5 text-forest-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <Link
                to="/products#briquettes"
                className="inline-flex items-center gap-2 text-forest-700 font-medium group-hover:gap-3 transition-all"
              >
                Learn more
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            {/* Plastic Paving Bricks */}
            <motion.div
              variants={scaleIn}
              whileHover={{ y: -8 }}
              className="group relative bg-gradient-to-br from-primary-50 to-earth-50 rounded-2xl p-8 hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="mb-6 overflow-hidden rounded-xl">
                <img
                  src={productBricksImage}
                  alt="Recycled plastic paving bricks"
                  className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-start justify-between mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-600 text-white"
                >
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                Recycled Plastic Paving Bricks
              </h3>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                Durable, cost-effective paving solutions made from recycled plastic. More affordable than concrete while reducing ocean and landfill pollution.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'Made from 100% recycled plastic',
                  'More durable than traditional bricks',
                  'Cost-effective alternative',
                ].map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-2 text-sm text-neutral-700"
                  >
                    <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <Link
                to="/products#paving"
                className="inline-flex items-center gap-2 text-primary-700 font-medium group-hover:gap-3 transition-all"
              >
                Learn more
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Hasha Mulilo Feature */}
      <section className="bg-forest-900 py-20 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-800 text-forest-200 text-sm font-medium mb-6">
                Featured Project
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Hasha Mulilo Eco Briquettes
              </h2>
              <p className="text-xl text-forest-100 mb-6 leading-relaxed">
                From a simple observation in 2017 to a clean energy enterprise.
                Producing clean cooking energy from waste, without cutting trees.
              </p>
              <p className="text-forest-200 mb-8 leading-relaxed">
                What started in a backyard with bare hands and basic tools has evolved into a
                structured enterprise supported by UNDP, SANParks, and other leading organizations.
                Today, we operate near Kruger National Park, collecting naturally fallen materials
                to create sustainable energy solutions.
              </p>
              <Link
                to="/hasha-mulilo"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white text-forest-900 font-medium hover:bg-forest-50 hover:scale-105 transition-all group"
              >
                Read the Full Story
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            <motion.div variants={fadeInRight} className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="col-span-2 overflow-hidden rounded-2xl border border-forest-700"
              >
                <img
                  src={founderSpeechImage}
                  alt="Founder sharing the Hasha Mulilo vision"
                  className="h-56 w-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="overflow-hidden rounded-xl border border-forest-700"
              >
                <img
                  src={workingFieldImage}
                  alt="Field work for biomass collection"
                  className="h-40 w-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="overflow-hidden rounded-xl border border-forest-700"
              >
                <img
                  src={productPackagedImage}
                  alt="Packaged Hasha Mulilo products"
                  className="h-40 w-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Partners Section - Our Stakeholders */}
      <section className="py-20 bg-neutral-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">
              OUR PARTNERSHIPS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Our Stakeholders
            </h2>
            <p className="text-neutral-600">
              Supported by 11 leading organizations
            </p>
          </div>
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {[
              'Vhembe Biosphere Reserve',
              'CSIR',
              'South African National Parks',
              'UNDP',
              'DFFE',
              'Young Water Solutions',
              'Indalo Inclusive',
              'NCPC-SA',
              'TotalEnergies',
              'PWK Waste Management',
              'Start Up Business Campus',
            ].map((partner) => (
              <motion.div
                key={partner}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center justify-center p-6 bg-white rounded-xl border border-neutral-200 hover:border-primary-300 hover:shadow-lg transition-all cursor-pointer"
              >
                <span className="text-sm font-medium text-neutral-700 text-center">
                  {partner}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 to-forest-700 px-8 py-16 md:px-16"
          >
            <div className="relative z-10 max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to make a difference?
                </h2>
                <p className="text-xl text-primary-100 mb-8">
                  Partner with us for sustainable waste management solutions or support our mission
                  to create a cleaner environment.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white text-primary-600 font-medium hover:bg-primary-50 hover:scale-105 transition-all group"
                  >
                    Get in Touch
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    to="/donations"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-transparent text-white font-medium border-2 border-white hover:bg-white/10 hover:scale-105 transition-all"
                  >
                    Support Our Work
                  </Link>
                </div>
              </motion.div>
            </div>
            {/* Decorative elements */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"
            />
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, -90, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 left-0 w-96 h-96 bg-forest-900/30 rounded-full translate-y-1/2 -translate-x-1/2"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
