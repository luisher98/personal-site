import projectsData from '../data/projectsData.json'; // Update the path to your JSON file

export default function Projects() {
  return (
    <div>
      <h3 className={`md:text-4xl font-bold text-center p-5 `}>Projects</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectsData.map(({id, title, description, imageSrc, url}) => (
          <div key={id} className="bg-white p-4 shadow-md rounded-lg">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h4 className="mt-2 text-xl font-semibold">{title}</h4>
            <p className="mt-2 text-gray-600">{description}</p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}