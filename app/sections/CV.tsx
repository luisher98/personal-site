import getExperience from "../../lib/getExperienceData";
import getStudies from "../../lib/getStudiesData";

export default async function CV() {
  const experience = await getExperience();
  const studies = await getStudies();

  const cvData = { Experience: experience, Studies: studies };

  return (
    <>
      <h3 className="md:text-4xl font-bold text-center mt-10">
        Curriculum vitae
      </h3>

      {Object.keys(cvData).map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <h2 className="text-2xl font-semibold py-4">{category}</h2>
          <table className="table-auto border-collapse w-full">
            <thead>
              <tr>
                {cvData[category].headers.map((header, headerIndex) => (
                  <th key={headerIndex} className="border p-2">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cvData[category].data.map((item, itemIndex) => (
                <tr key={itemIndex}>
                  {Object.values(item).map((value, valueIndex) => (
                    <td key={valueIndex} className="border p-2">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </>
  );
}
