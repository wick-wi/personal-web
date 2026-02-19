import { motion } from "framer-motion";

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
          About Me
        </h2>
        
        {/* This container ensures the text style and spacing work together */}
        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
          <p>
          I am a Senior Product Manager specializing in Fintech and Capital Markets. With eight years of experience spanning card infrastructure and post-trade settlement, I bridge the gap between complex financial protocols and seamless user experiences.
          </p>

          <p>
          I thrive at the intersection of technical architecture and commercial growth. My track record includes building 0-to-1 products, driving millions in annual profitability. I believe the best financial products aren't just functional; they are invisible, resilient, and meticulously engineered.
          </p>
        </div>
      </motion.div>
    </section>
  );
}