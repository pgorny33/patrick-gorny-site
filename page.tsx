'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'

const properties = [
  {
    title: 'Skyline Tower',
    location: 'Long Island City, Queens',
    detail: 'Development Advisory / Buyer Representation',
    image: '/assets/skyline-view.png',
  },
  {
    title: 'Lucent33 Condominium',
    location: 'Long Island City, Queens',
    detail: 'Development Advisory / Buyer & Seller Representation',
    image: '/assets/lucent33-exterior.jpg',
  },
  {
    title: 'Factory House / Brooklyn Portfolio',
    location: 'Brooklyn, NY',
    detail: 'Seller Representation',
    image: '/assets/interior-view.png',
  },
]

const services = [
  {
    title: 'Buyer Advisory',
    text: 'Strategic representation for buyers seeking architectural quality, strong layouts, neighborhood positioning, and long-term value across New York City.',
  },
  {
    title: 'Seller Representation',
    text: 'Editorial presentation, pricing strategy, launch planning, negotiation, and transaction management tailored to maximize positioning and outcome.',
  },
  {
    title: 'Development Advisory',
    text: 'Sales and marketing advisory for residential developers including pricing analysis, floor plan evaluation, branding strategy, buyer targeting, and sellout execution.',
  },
]

const developmentProjects = ['Skyline Tower', 'Lucent33', 'The Greene', 'Radiant LIC']

const representationStats = [
  { value: '280+', label: 'Buyer & Seller Transactions' },
  { value: '$300M+', label: 'Residential Transaction Volume' },
  { value: '4', label: 'Development Advisory Projects' },
]

export default function PatrickGornyWebsite() {
  return (
    <div className="min-h-screen bg-[#f4f1eb] text-[#1f1f1f] selection:bg-[#1f1f1f] selection:text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-[#f4f1eb]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <a href="#home" className="text-sm uppercase tracking-[0.32em]">Patrick Gorny</a>
          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.22em] md:flex">
            <a href="#about" className="hover:opacity-60">About</a>
            <a href="#advisory" className="hover:opacity-60">Advisory</a>
            <a href="#properties" className="hover:opacity-60">Portfolio</a>
            <a href="#contact" className="hover:opacity-60">Contact</a>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="relative flex min-h-screen items-end overflow-hidden px-6 pb-12 pt-28 md:px-10 md:pb-16">
          <div className="absolute inset-0 z-0">
            <Image src="/assets/hero-terrace.png" alt="New York residential terrace" fill priority className="object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1f1f1f]/75 via-[#1f1f1f]/25 to-[#f4f1eb]/5" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative z-10 max-w-5xl text-white"
          >
            <p className="mb-5 text-xs uppercase tracking-[0.32em] text-white/80">New York Residential Advisory</p>
            <h1 className="max-w-4xl text-5xl font-light leading-[0.95] tracking-[-0.04em] md:text-8xl">
              Real estate with discipline, design, and market perspective.
            </h1>
            <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center">
              <a href="#contact" className="inline-flex w-fit items-center gap-3 border border-white/70 px-6 py-4 text-xs uppercase tracking-[0.22em] transition hover:bg-white hover:text-[#1f1f1f]">
                Start a Conversation <ArrowRight size={15} />
              </a>
              <p className="max-w-md text-sm leading-6 text-white/80">
                Patrick Gorny, Founder of PG Residential at Corra Realty Group.
              </p>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
          <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-3">
            {representationStats.map((stat) => (
              <div key={stat.label} className="bg-[#f4f1eb] p-8 md:p-10">
                <p className="text-4xl font-light tracking-[-0.04em] md:text-6xl">{stat.value}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.22em] text-black/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
          <div className="md:col-span-4">
            <div className="relative aspect-[4/5] overflow-hidden bg-black/5">
              <Image src="/assets/patrick-gorny-headshot.jpeg" alt="Patrick Gorny" fill className="object-cover" />
            </div>
          </div>

          <div className="md:col-span-4">
            <p className="mb-6 text-xs uppercase tracking-[0.28em] text-black/50">Approach</p>
            <h2 className="text-4xl font-light leading-tight tracking-[-0.03em] md:text-6xl">
              A more considered way to advise, position, and sell New York real estate.
            </h2>
          </div>
          <div className="space-y-8 text-lg font-light leading-8 text-black/70 md:col-span-4">
            <p>
              Patrick Gorny advises buyers, sellers, investors, and developers throughout New York City with a focus on pricing strategy, floor plan evaluation, market positioning, presentation, and long-term value.
            </p>
            <p>
              Through PG Residential at Corra Realty Group, Patrick has represented more than 280 buyers and sellers while also advising developers on sales strategy, pricing, branding, positioning, and residential sellout execution for projects including Skyline Tower, Lucent33, The Greene, and Radiant LIC.
            </p>
          </div>
        </section>

        <section id="advisory" className="border-y border-black/10 bg-[#ebe6dc] px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="mb-6 text-xs uppercase tracking-[0.28em] text-black/50">PG Residential</p>
                <h2 className="max-w-3xl text-4xl font-light tracking-[-0.03em] md:text-6xl">Advisory Services</h2>
              </div>
              <p className="max-w-md text-base leading-7 text-black/60">
                Built for clients who value clarity, discretion, and a more strategic real estate process.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-3">
              {services.map((service, index) => (
                <div key={service.title} className="bg-[#ebe6dc] p-8 md:p-10">
                  <p className="mb-12 text-xs tracking-[0.28em] text-black/40">0{index + 1}</p>
                  <h3 className="mb-5 text-2xl font-light tracking-[-0.02em]">{service.title}</h3>
                  <p className="text-sm leading-7 text-black/60">{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
          <div className="md:col-span-5">
            <p className="mb-6 text-xs uppercase tracking-[0.28em] text-black/50">Development Advisory</p>
            <h2 className="text-4xl font-light leading-tight tracking-[-0.03em] md:text-6xl">
              Sales, marketing, and product strategy for residential developers.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="mb-10 text-lg font-light leading-8 text-black/70">
              Patrick has supported developer-led residential projects through pricing strategy, sales execution, buyer positioning, and market-facing advisory across Long Island City and Brooklyn.
            </p>
            <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 sm:grid-cols-2">
              {developmentProjects.map((project) => (
                <div key={project} className="bg-[#f4f1eb] p-6">
                  <p className="text-xl font-light tracking-[-0.02em]">{project}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-black/45">Sales & Marketing Advisory</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="properties" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.28em] text-black/50">Portfolio</p>
              <h2 className="text-4xl font-light tracking-[-0.03em] md:text-6xl">Selected Representation</h2>
            </div>
            <a href="#contact" className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] hover:opacity-60">
              Discuss Representation <ArrowRight size={15} />
            </a>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {properties.map((property) => (
              <article key={property.title} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-black/10">
                  <Image src={property.image} alt={property.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="mt-5 border-t border-black/20 pt-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-black/45">{property.location}</p>
                  <h3 className="mt-3 text-2xl font-light tracking-[-0.02em]">{property.title}</h3>
                  <p className="mt-2 text-sm text-black/60">{property.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid min-h-[70vh] md:grid-cols-2">
          <div className="bg-[#1f1f1f] px-6 py-24 text-white md:px-10 md:py-32">
            <div className="mx-auto max-w-xl">
              <p className="mb-6 text-xs uppercase tracking-[0.28em] text-white/50">Market Perspective</p>
              <h2 className="text-4xl font-light leading-tight tracking-[-0.03em] md:text-6xl">
                Strategy begins before a home reaches the market.
              </h2>
              <p className="mt-8 text-base leading-8 text-white/65">
                From pricing and floor plan analysis to photography, staging, copy, and launch timing, every detail shapes perception and outcome.
              </p>
            </div>
          </div>
          <div className="relative min-h-[480px]">
            <Image src="/assets/living-room.png" alt="Residential interior" fill className="object-cover" />
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-14 md:grid-cols-12">
            <div className="md:col-span-6">
              <p className="mb-6 text-xs uppercase tracking-[0.28em] text-black/50">Contact</p>
              <h2 className="text-4xl font-light leading-tight tracking-[-0.03em] md:text-6xl">
                Begin with a private conversation.
              </h2>
            </div>
            <div className="space-y-8 md:col-span-5 md:col-start-8">
              <div className="space-y-5 text-sm leading-7 text-black/70">
                <p className="flex items-center gap-3"><Mail size={16} /> patrick.g@corrarealty.com</p>
                <p className="flex items-center gap-3"><Phone size={16} /> 646-737-2293</p>
                <p className="flex items-center gap-3"><MapPin size={16} /> Corra Realty Group / New York City</p>
              </div>
              <div className="space-y-4">
                <input className="w-full border border-black/15 bg-transparent px-4 py-4 text-sm outline-none placeholder:text-black/35" placeholder="Name" />
                <input className="w-full border border-black/15 bg-transparent px-4 py-4 text-sm outline-none placeholder:text-black/35" placeholder="Email" />
                <textarea className="h-36 w-full border border-black/15 bg-transparent px-4 py-4 text-sm outline-none placeholder:text-black/35" placeholder="How can I help?" />
                <a href="mailto:patrick.g@corrarealty.com?subject=Website Inquiry" className="inline-flex items-center gap-3 bg-[#1f1f1f] px-6 py-4 text-xs uppercase tracking-[0.22em] text-white transition hover:bg-black/80">
                  Submit Inquiry <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs uppercase tracking-[0.2em] text-black/45 md:flex-row">
          <p>© 2026 Patrick Gorny / PG Residential</p>
          <p>Corra Realty Group</p>
        </div>
        <div className="mx-auto mt-6 max-w-7xl text-[10px] leading-5 text-black/40">
          <p>Equal Housing Opportunity. This website is for informational purposes only. All real estate services are provided through Corra Realty Group. Brokerage, licensing, fair housing, and standard operating procedure language should be reviewed and finalized with Corra Realty Group prior to launch.</p>
        </div>
      </footer>
    </div>
  )
}
