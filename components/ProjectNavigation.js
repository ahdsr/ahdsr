import Button from "@/components/Button";

export default function ProjectNavigation({ prevProject, nextProject }) {
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between py-12 md:py-24">
      {prevProject ? (
        <Button
          href={`/casestudies/${prevProject.slug}`}
          text={`← Previous: ${prevProject.title}`}
          size="large"
        />
      ) : (
        <div /> // Empty div to maintain alignment
      )}

      {nextProject ? (
        <Button
          href={`/casestudies/${nextProject.slug}`}
          text={`Next: ${nextProject.title} →`}
          size="large"
        />
      ) : (
        <div /> // Empty div to maintain alignment
      )}
    </div>
  );
}
