import Button from "@/components/Button";
import MotionButton from "@/components/Button";

export default function ProjectNavigation({ prevProject, nextProject }) {
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between py-12 md:py-24">
      {prevProject ? (
        <MotionButton
          text={`← Previous: ${prevProject.title}`}
          bgColor="gray"
          textColor="black"
          hoverBgColor="black"
          hoverTextColor="white"
          href={`/casestudies/${prevProject.slug}`}
        />
      ) : (
        <div /> // Empty div to maintain alignment
      )}

      {nextProject ? (
        <MotionButton
          text={`Next: ${nextProject.title} →`}
          bgColor="gray"
          textColor="black"
          hoverBgColor="black"
          hoverTextColor="white"
          href={`/casestudies/${nextProject.slug}`}
        />
      ) : (
        <div /> // Empty div to maintain alignment
      )}
    </div>
  );
}
