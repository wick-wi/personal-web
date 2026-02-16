import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Briefcase } from 'lucide-react'

// Add company logos in public/images/experience/ (e.g. capital-one.png, lseg.png)
// Use logo: '/images/experience/filename.png' — if omitted, the icon is shown
const roles = [
  {
    company: 'Capital One',
    role: 'Product Manager',
    dates: '2020 Oct - 2025 Sep',
    description:
      'Optimized money movement pipelines for 2M+ customers, driving over millions of dollars in total NPV uplift through redesigned payment and application flows.',
    logo: '/images/experience/capital-one.png',
    icon: ShieldCheck,
  },
  {
    company: 'LSEG',
    role: 'Business Analyst',
    dates: '2013 Mar - 2017 June',
    description:
      'Directed the 0-1 modernization of multi-currency clearing and settlement systems saving millions of dollars in annual opex.',
    logo: '/images/experience/lseg.png',
    icon: Briefcase,
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
      className="relative pl-14 sm:pl-16"
    >
      <div className="absolute left-0 top-1 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center overflow-hidden rounded-full bg-white border border-slate-200 shadow-sm">
        {showLogo ? (
          <img
            src={item.logo}
            alt=""
            className="h-full w-full object-contain p-1.5"
            onError={() => setLogoError(true)}
          />
        ) : (
          <item.icon size={20} className="text-indigo-600 sm:w-6 sm:h-6" />
        )}
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
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
        Experience
      </motion.h2>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-px bg-slate-200" />

        <ul className="space-y-12">
          {roles.map((item, i) => (
            <ExperienceItem key={item.company} item={item} index={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}
