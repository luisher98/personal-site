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
  const { title, description, imageSrc } = project;
  console.log(title)

  return (
    <>     
      <h3>
        {title}
      </h3>
    </> 
  )
}
