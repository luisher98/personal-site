import type { Metadata } from 'next'
import getProjectsData from '../../../lib/getProjectsData'
import Projects from '../sections/Projects'

export const metadata: Metadata = {
}

export default function ProjectsPage() {


  return (
    <Projects />
  )
}
