import getProjects from "../../lib/getProjectsData";
import Link from "next/link";

export default async function Projects() {
  const projectsData = await getProjects();


  return (
    <div>
      <h3 className={`md:text-4xl font-bold text-center p-5 `}>Projects</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectsData.map(({projectId, title, description, imageSrc}) => (
          <div key={projectId} className="bg-white p-4 shadow-md rounded-lg">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h4 className="mt-2 text-xl font-semibold">{title}</h4>
            <p className="mt-2 text-gray-600">{description}</p>
            <Link
              href={`/projects/${projectId}`}
              rel="noopener noreferrer"
              className="mt-4 block text-blue-500 hover:underline"
            >
              View Project
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
