import type { Metadata } from 'next'
import getProjects from '../../lib/getProjectsData'
import Projects from '../sections/Projects'

export const metadata: Metadata = {
}

export default function ProjectsPage() {
  const projects: Projects = getProjects();

  return (
    <Projects />
  )
}
