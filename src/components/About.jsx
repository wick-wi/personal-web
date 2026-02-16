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
            Hi, I'm Wick Wijesekera. I'm a Senior Product Manager specializing in Fintech and Capital Markets. With 5 years of experience in card infrastructure and 3 years experience in Post Trade and Settlement, I bridge the gap between complex financial protocols and seamless user experiences.
          </p>

          <p>
            I thrive at the intersection of technical architecture and commercial growth. I've led the 0 to 1 modernization of multi-currency/ multi-asset post trade and settlement platforms and managed funding and application experiences for over 2M customers adding to bottom line, millions of dollars in annual profit.
          </p>

          <p>
            Throughout the diverse industries I have brought my skills to, my approach is the same: tackle the biggest problems first, ground every decision in data, build for reliability and compliance, and test thoroughly before release. I believe the best financial products aren't just functional—they are invisible, resilient, and meticulously engineered.
          </p>
        </div>
      </motion.div>
    </section>
  );
}