import HeroSection from "@/components/HeroSection";
import Blog from "@/components/Blog";
export default function BlogPage() {
  return (
    <>
      <HeroSection
        backgroundColor="bg-blue-800"
        paddingTop="pt-12"
        paddingBottom="pb-64"
        heading="Notes on design and development."
        headingHighlight="design"
        headingHighlightColor="text-white"
        paragraph="Short reflections on portfolio work, design process, and product decisions."
        paragraphColor="text-white"
        headingSize="text-7xl"
        headingWeight="font-semibold"
        headingTracking="tracking-tighter"
        paragraphSize="text-3xl"
        paragraphWeight="font-light"
      />
      <div className="mx-auto max-w-7xl px-8 md:px-20">
        <div className="pt-12 font-sans text-zinc-700">
          <h1 className="mb-4 mt-24 border-b border-t-zinc-700 pb-4 font-sans text-9xl font-semibold tracking-tighter text-black">
            Site Relaunch 2025
          </h1>
          <p className="font-mono text-black">Feb 26, 2025</p>

          <div className="mt-2 max-w-2xl text-xl">
            <h2 className="my-8 font-sans text-2xl font-semibold tracking-tight text-zinc-500">
              Why I rebuilt the portfolio
            </h2>
            <p className="mb-6">
              Near the end of 2024, work on my previous portfolio slowed while
              I focused on contract work. When I returned to it, I decided to
              rethink the site instead of continuing in the same direction.
            </p>
            <p className="mb-6">
              Previous versions focused too heavily on final visuals and did
              not give enough context for the thinking behind the work. The
              process, constraints, decisions, and tradeoffs are often as
              important as the outcome. This version gives each project more
              room to explain how the work came together.
            </p>
            <h2 className="my-8 font-sans text-2xl font-semibold tracking-tight text-zinc-500">
              Why the change?
            </h2>
            <p className="mb-6">
              A polished portfolio is useful, but it is not enough on its own.
              Collaborators and clients need to understand how a designer thinks,
              solves problems, and adapts to constraints. I wanted the site to
              work less like a gallery and more like a clear record of project
              decisions.
            </p>
            <h2 className="my-8 font-sans text-2xl font-semibold tracking-tight text-zinc-500">
              What&apos;s new?
            </h2>{" "}
            <p className="mb-6">
              The updated site gives case studies more structure, including the
              project context, problem, design direction, and execution details.
              It also creates space for notes on process, product decisions, and
              lessons learned from the work.
            </p>
            <h2 className="my-8 font-sans text-2xl font-semibold tracking-tight text-zinc-500">
              Looking ahead
            </h2>
            <p className="mb-6">
              I will continue refining the portfolio as new projects are ready
              to share. The goal is simple: show the work, explain the thinking,
              and make it easier for people to understand where I can contribute.
            </p>
          </div>
        </div>
      </div>
      <Blog />
    </>
  );
}
