import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import { Suspense } from "react";
import BottomNav from "./BottomNav";

const Tech = () => {
  return (
    <>
      <div
        className="flex flex-row flex-wrap
    justify-center  p-[50px] gap-16 min-h-[100vh]"
      >
        {technologies.map((technology) => (
          <Suspense
            fallback={<div>{technology.name}</div>}
            key={technology.name}
          >
            <div className="w-28 h-28">
              <BallCanvas icon={technology.icon} />
            </div>
          </Suspense>
        ))}
      </div>
      <BottomNav link="/contact" title="Contact" />
    </>
  );
};

export default SectionWrapper(Tech, "");
