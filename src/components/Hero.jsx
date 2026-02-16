import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="flex flex-col justify-center px-4 sm:px-6 max-w-5xl mx-auto py-8 sm:py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
          Senior Product Manager in Fintech & Capital Markets
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-slate-600">
          Expert in Platforms, User Experience, Funnel Conversion and Process Automation.
        </p>
      </motion.div>
    </section>
  )
}
