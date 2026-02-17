import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { projects } from '../data/projects'

const defaultSectionTitles = {
  problem: 'The Problem',
  productStrategy: 'The Product Strategy',
  technicalStack: 'The Technical Stack',
  keyLessons: 'Key Lessons',
}

const sectionKeys = Object.keys(defaultSectionTitles)

export default function ProjectDeepDive() {
  const { slug } = useParams()
  const project = projects.find((p) => p.id === slug)

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">
          Project not found
        </h1>
        <Link
          to="/"
          className="text-indigo-600 font-medium hover:text-indigo-700"
        >
          Back to home
        </Link>
      </div>
    )
  }

  const {
    title,
    tagline,
    liveUrl,
    repoUrl,
    sections,
    liveButtonLabel,
    repoButtonLabel,
  } = project

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="px-4 sm:px-6 max-w-3xl mx-auto py-12 sm:py-16"
    >
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
          {title}
        </h1>
        {tagline && (
          <p className="mt-2 text-lg text-slate-600">{tagline}</p>
        )}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 w-full sm:w-auto justify-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
          >
            <ExternalLink size={20} aria-hidden />
            {liveButtonLabel ?? 'Visit Live App'}
          </a>
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:border-indigo-300 hover:text-indigo-600 transition-colors"
            >
              <Github size={20} aria-hidden />
              {repoButtonLabel ?? 'View code'}
            </a>
          )}
        </div>
      </div>

      <div className="space-y-12">
        {sectionKeys
          .filter((key) => sections[key] != null && String(sections[key]).trim() !== '')
          .map((key) => {
            const label = project.sectionTitles?.[key] ?? defaultSectionTitles[key]
            return (
              <motion.section
                key={key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                  {label}
                </h2>
                <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                  {sections[key]}
                </p>
              </motion.section>
            )
          })}
      </div>

      <div className="mt-16 pt-8 border-t border-slate-200">
        <Link
          to="/"
          className="text-indigo-600 font-medium hover:text-indigo-700"
        >
          ← Back to home
        </Link>
      </div>
    </motion.div>
  )
}
