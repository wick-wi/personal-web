import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function ProjectGrid() {
  return (
    <section id="projects" className="px-4 sm:px-6 max-w-5xl mx-auto py-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-12">
        Personal Projects
      </h2>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <li key={project.id}>
            <ProjectCard project={project} index={index} />
          </li>
        ))}
      </ul>
    </section>
  )
}
