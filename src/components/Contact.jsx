import { motion } from 'framer-motion'
import { Mail, Github } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="px-4 sm:px-6 max-w-5xl mx-auto py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        className="max-w-2xl"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
          Contact
        </h2>
        <p className="text-slate-600 mb-8">
          Open to product and fintech opportunities. Get in touch.
        </p>
        <div className="flex flex-wrap gap-6">
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
            aria-label="Email"
          >
            <Mail size={20} />
            Email
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-300 text-slate-700 font-medium hover:border-indigo-300 hover:text-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
            aria-label="GitHub"
          >
            <Github size={20} />
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  )
}
