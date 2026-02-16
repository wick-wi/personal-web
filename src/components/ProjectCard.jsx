import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function ProjectCard({ project, index }) {
  const { id, title, tagline, image } = project

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        to={`/projects/${id}`}
        className="group block rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-indigo-200 transition-all"
      >
        <div className="aspect-video bg-slate-100 flex items-center justify-center overflow-hidden">
          {image ? (
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <span className="text-slate-400 text-sm">Project image</span>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-slate-600 text-sm">{tagline}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-indigo-600 font-medium text-sm group-hover:gap-2 transition-all">
            View case study
            <ArrowRight size={16} />
          </span>
        </div>
      </Link>
    </motion.article>
  )
}
