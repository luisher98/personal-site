import techStackData from "../data/techStackData.json";

export default function TechStack() {
  return (
    <>
      <h3 className={`md:text-4xl font-bold text-center p-5 `}>My Tech Stack</h3>

      <div className="grid grid-cols-8 justify-between">
        {techStackData.map((tech, index) => (
          <div className="" key={index}>
            <img
              src={tech.iconSrc}
              alt={tech.altText}
              className="w-16 h-16 mx-auto"
            />
            {/*
              Make it so that the name of the technology is displayed below the icon
            <p className="text-center text-slate-300">{tech.name}</p> */}
          </div>
        ))}
      </div>
    </>
  );
}
