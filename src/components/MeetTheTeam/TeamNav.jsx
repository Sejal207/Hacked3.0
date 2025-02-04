import { useState, lazy, Suspense } from "react";
import { motion } from "motion/react";

const Core = lazy(() => import("./Core"));
const Operations = lazy(() => import("./Operations"));
const On_Marketing = lazy(() => import("./On_Marketing"));
const Off_Marketing = lazy(() => import("./Off_Marketing"));
const Content = lazy(() => import("./Content"));
const Design = lazy(() => import("./Design"));
const Coverage = lazy(() => import("./Coverage"));
const Technical = lazy(() => import("./Technical"));
const Judges = lazy(() => import("./Judges"));
const Entry = lazy(() => import("./Entry"));
const Sponsorship = lazy(() => import("./Sponsorship"));

const items = [
  { id: "core", label: "Core", component: Core },
  { id: "operations", label: "Operations", component: Operations },
  { id: "On_marketing", label: "Online Marketing", component: On_Marketing },
  { id: "Off_marketing", label: "Offline Marketing", component: Off_Marketing },
  { id: "content", label: "Content", component: Content },
  { id: "design", label: "Design", component: Design },
  { id: "coverage", label: "Coverage", component: Coverage },
  { id: "technical", label: "Technical", component: Technical },
  { id: "judges", label: "Judges & PR", component: Judges },
  { id: "Entry", label: "Entry Management", component: Entry },
  { id: "sponsorship", label: "Sponsorship", component: Sponsorship },
];
const TeamNav = () => {
  const [Clicked, setClicked] = useState(items[0].id);

  const CurrentComponend = items.find((item) => item.id === Clicked)?.component;
  return (
    <div className="flex justify-center items-center px-4 md:mb-16">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-wrap justify-center items-center w-[80%]">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setClicked(item.id)}
            className={`${
              Clicked === item.id ? "" : "hover:text-white/60"
            } relative rounded-full px-5 md:px-8 md:py-4 py-3 md:text-2xl lg:text-4xl text-xl font-medium text-white`}
          >
            {Clicked === item.id && (
              <motion.span
                layoutId="nav"
                className="absolute inset-0 m-2 z-10 bg-white mix-blend-difference rounded-full my-2"
                transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
              />
            )}
            <span className="text-base md:text-xl whitespace-nowrap">
              {item.label}
            </span>
          </button>
        ))}
        </div>
        <Suspense
          fallback={
            <div className="relative w-full m-80 p-10 animate-pulse"></div>
          }
        >
          <motion.div
            key={Clicked}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {CurrentComponend && <CurrentComponend />}
          </motion.div>
        </Suspense>
      </div>
    </div>
  );
};
export default TeamNav;