import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-[80vh] flex flex-col justify-center px-4 sm:px-6 max-w-5xl mx-auto py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
          Product Leader & MBA | Building the Future of Fintech Infrastructure.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-600">
          Bridging strategy and execution to ship products that scale.
        </p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          onClick={scrollToProjects}
          className="mt-10 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
        >
          View my work
        </motion.button>
      </motion.div>
    </section>
  )
}
