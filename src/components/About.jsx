import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="px-4 sm:px-6 max-w-5xl mx-auto py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
          About
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed">
          MBA and product leader focused on fintech infrastructure. I combine
          strategic thinking with hands-on execution to build products that
          improve how financial systems operate—from wealth management to
          enterprise data and compliance.
        </p>
      </motion.div>
    </section>
  )
}
