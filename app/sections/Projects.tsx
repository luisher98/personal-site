import getProjects from "../../lib/getProjectsData";
import Link from "next/link";
import Image from "next/image";

export default async function Projects() {
  const projects: Projects = await getProjects();

  return (
    <div>
      <h3 className={`md:text-4xl font-bold text-center p-5 `}>Projects</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map(
          ({ id, title, year, description, link, stack, media }) => {
            const mainImage = media?.find((m) => m.mediaType === "main-image")
            return (
              <div key={id} className="bg-white p-4 shadow-md rounded-lg">
                <Image
                  src={mainImage?.src || ""}
                  alt={title}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h4 className="mt-2 text-xl font-semibold">{title}</h4>
                <p className="mt-2 text-gray-600">{description}</p>
                <Link
                  href={`/projects/${id}`}
                  rel="noopener noreferrer"
                  className="mt-4 block text-blue-500 hover:underline"
                >
                  View Project
                </Link>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
