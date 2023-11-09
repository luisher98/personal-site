import Image from "next/image";
import TechStack from "./TechStack";
import style from './styles/About.module.scss'

export default function About() {
  return (
    <>
      <h3 className={`md:text-4xl font-bold text-center p-5 ${style.aboutMe__heading}`}>About me</h3>
      <div className="md:flex">
        <div className="card md:w-1/4 md:pr-8">
          <Image src="/profile-pic.jpg" alt="Picture of Luis Hernandez" width="200" height="500" />
        </div>
        <div className="md:w-3/4 md:pr-8">
          <p className="text-sm md:text-base mt-2 pr-20 text-slate-300 drop-shadow-xl">
            I am a Front-End Developer with a passion for building beautiful and
            functional user interfaces. I have experience working with React,
            Next.js, TailwindCSS, and other technologies.
          </p>
        </div>
      </div>

    </>
  );
}
