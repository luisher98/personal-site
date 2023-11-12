import type { Metadata } from 'next'
import getProject from '../../../lib/getProject'

type Params = {
  projectId: number
}

export const metadata: Metadata = {
  // ... you should define the metadata properties here
}

export default async function ProjectPage({ params: { projectId } }: { params: Params }) {
  const project = await getProject(projectId);


  return (
    <>     
      <h3>
        {project.title}
      </h3>
    </> 
  )
}
