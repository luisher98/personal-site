import HeroHeading from "../components/HeroHeading";
import Model3D from "../components/Model3D";
import { BgGlowDecoratorHeroBottomLeft } from "../components/BgGlowDecorators";
import SectionDivider from "../components/SectionDivider";

export default function Hero() {
  return (
    <>
      {/*bg-slate-900*/}
      <div className="h-[80vh] min-h-[20rem] max-h-[50rem] md:flex md:items-center">
        {/* Left Section (2/3 width) */}
        <div className="md:w-2/3 md:pr-8">
          <HeroHeading />
        </div>

        {/* Right Section (1/3 width) */}
        <div className="md:w-1/3 h-full mt-4 md:mt-0 md:flex md:justify-center">
          <div
            className="flex items-center justify-center w-full h-full"
            id="container3D"
          >
            <Model3D />
          </div>
        </div>
      {/* <BgGlowDecoratorHeroBottomLeft /> */}
      </div>
      <SectionDivider />
    </>
  );
}
