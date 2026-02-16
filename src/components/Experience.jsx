import { motion } from 'framer-motion'
import { ShieldCheck, Briefcase } from 'lucide-react'

const roles = [
  {
    company: 'Capital One',
    role: 'Your role title',
    dates: 'Dates',
    description:
      'Short description of your impact and focus. Replace with your copy.',
    icon: ShieldCheck,
  },
  {
    company: 'LSEG',
    role: 'Your role title',
    dates: 'Dates',
    description:
      'Short description of your impact and focus. Replace with your copy.',
    icon: Briefcase,
  },
]

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
            <motion.li
              key={item.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-14 sm:pl-16"
            >
              <div className="absolute left-0 top-1 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                <item.icon size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.role}
                  </h3>
                  <span className="text-sm text-slate-500">{item.dates}</span>
                </div>
                <p className="mt-1 text-indigo-600 font-medium">{item.company}</p>
                <p className="mt-3 text-slate-600">{item.description}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
