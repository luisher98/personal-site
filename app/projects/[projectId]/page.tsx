import type { Metadata } from 'next'
import getProject from '../../../lib/getProject'

type Params = {
  projectId: number
}

export const metadata: Metadata = {
}

export default async function ProjectPage({ params: { projectId } }: { params: Params }) {
  const project: Project = await getProject(projectId);
  const { title, year, description, link, stack, media} = project; 


  return (
    <>     
      <h3>
        {title}
      </h3>
    </> 
  )
}
