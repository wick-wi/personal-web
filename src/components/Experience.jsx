import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Briefcase, School, Blocks, Tent, School2 } from 'lucide-react'

// Add company logos in public/images/experience/ (e.g. capital-one.png, lseg.png)
// Use logo: '/images/experience/filename.png' — if omitted, the icon is shown
const roles = [
  {
    company: 'Capital One',
    role: 'Senior Product Manager',
    dates: '2020 - 2025',
    description:
      'Owned strategy and roadmap for secured card platform, improving UX and driving funding rate lift resulting in $2.2M in NPV uplift. Optimized Application Funnel UX for 1.6M+ annual card applicants, driving 4M+ in annual NPV lift. ',
    logo: '/images/experience/capital-one.png',
    icon: ShieldCheck,
  },
  {
    company: 'Blockchain Founders Fund',
    role: 'Strategy Associate (Part Time)',
    dates: '2020 - 2022',
    description:
      'Owned discovery and implementation of a 0→1 startup due diligence platform, automating review flows to cut cycle time from weeks to 3 days and increase analyst throughput 3×',
    logo: '/images/experience/bff.png',
    icon: Blocks,
  },
  {
    company: 'INSEAD',
    role: 'MBA',
    dates: '2019 - 2020',
    description:
      'MBA from one of the top 3 business schools in the world.',
    logo: '/images/experience/INSEAD.png',
    icon: School,
  },
  {
    company: 'Aspira',
    role: 'Product Manager',
    dates: '2018 - 2019',
    description:
      'Optimized functionality and UX for Campground management software. Owned discovery and lanuch of a analytics dashboard for US state parks, reducing 90% of manual reporting.',
    logo: '/images/experience/aspira.png',
    icon: Tent,
  },
  {
    company: 'LSEG',
    role: 'Senior Business Analyst',
    dates: '2014 - 2017',
    description:
      'Directed the 0-1 modernization of multi-currency/ multi-asset clearing and settlement platform saving $2M+ in annual opex.',
    logo: '/images/experience/lseg1.png',
    icon: Briefcase,
  },
  {
    company: 'University of Moratuwa',
    role: 'BSc in Electronics Engineering',
    dates: '2009-2013',
    description:
      'Graduated with First Class Honours from the #1 Engineering University in Sri Lanka',
    logo: '/images/experience/UoM.png',
    icon: School2,
  },
]

function ExperienceItem({ item, index }) {
  const [logoError, setLogoError] = useState(false)
  const showLogo = item.logo && !logoError

  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.1 }}
      className="relative flex items-stretch gap-6"
    >
      {/* Logo circle: large fixed size so logos are legible (roughly tile height) */}
      <div className="relative flex h-28 w-28 shrink-0 sm:h-36 sm:w-36 md:h-40 md:w-40 items-center justify-center">
        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-white border border-slate-200 shadow-sm">
          {showLogo ? (
            <img
              src={item.logo}
              alt=""
              className="h-full w-full object-contain p-3 sm:p-4"
              onError={() => setLogoError(true)}
            />
          ) : (
            <item.icon className="h-10 w-10 text-indigo-600 sm:h-12 sm:w-12 md:h-14 md:w-14" />
          )}
        </div>
      </div>
      <div className="min-w-0 flex-1 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-semibold text-slate-900">{item.role}</h3>
          <span className="text-sm text-slate-500">{item.dates}</span>
        </div>
        <p className="mt-1 text-indigo-600 font-medium">{item.company}</p>
        <p className="mt-3 text-slate-600">{item.description}</p>
      </div>
    </motion.li>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="px-4 sm:px-6 max-w-5xl mx-auto py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        className="text-2xl sm:text-3xl font-bold text-slate-900 mb-12"
      >
        Experience & Education
      </motion.h2>

      <div className="relative">
        {/* Vertical line through center of logo circles */}
        <div className="absolute left-14 top-0 bottom-0 w-px bg-slate-200 sm:left-[4.5rem] md:left-20" />

        <ul className="space-y-12">
          {roles.map((item, i) => (
            <ExperienceItem key={item.company} item={item} index={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}
