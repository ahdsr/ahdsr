import HeroSection from "@/components/HeroSection";
import Blog from "@/components/Blog";
export default function BlogPage() {
  return (
    <>
      <HeroSection
        backgroundColor="bg-blue-800"
        paddingTop="pt-12"
        paddingBottom="pb-64"
        heading="Blog blog."
        headingHighlight="blog"
        headingHighlightColor="text-white"
        paragraph="Thoughts, insights, and occasional design musings—sometimes profound, sometimes just me thinking out loud."
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
              It was time for a change edit
            </h2>
            <p className="mb-6">
              With 2024 ending, and my old portfolio site development progress
              interrupted with another contract gig, I decided to take a new
              direction with this one and make some updates.
            </p>
            <p className="mb-6">
              I rarely spent time talking about my work on my previous sites,
              and just showed the final products. This was an error on my part,
              as it did not do some of the projects any justice. The process
              behind the work – the challenges, solutions, and creative
              decisions – is just as important as the outcome itself. This new
              site aims to bridge that gap by offering a deeper dive into how my
              projects come together.
            </p>
            <h2 className="my-8 font-sans text-2xl font-semibold tracking-tight text-zinc-500">
              Why the Change?
            </h2>
            <p className="mb-6">
              In the fast-paced world of design and development, showcasing a
              polished portfolio isn’t enough. Potential collaborators or
              clients want to understand how you think, how you solve problems,
              and how you adapt to challenges. I wanted my portfolio to be more
              than a gallery – it’s now a space to tell the stories behind the
              work.
            </p>
            <h2 className="my-8 font-sans text-2xl font-semibold tracking-tight text-zinc-500">
              Whats New?
            </h2>{" "}
            <p className="mb-6">
              Case Studies: Each project now includes a detailed case study,
              walking you through the initial problem, the strategy behind the
              solution, and the steps taken to execute it. Tools and
              Technologies: I’ve added a section for each project detailing the
              tools and technologies used. Whether it’s a programming language,
              design software, or frameworks, it’s all there. Lessons Learned:
              Reflecting on what I gained from each project—whether it’s a
              technical skill, a new workflow, or insight into
              collaboration—helps paint a fuller picture of my growth as a
              professional.
            </p>{" "}
            Blog Section: Beyond showcasing projects, I’ll also be sharing
            thoughts on industry trends, tips, and tricks I’ve picked up along
            the way, and reflections on my journey. ## Looking Ahead This
            portfolio is not just a culmination of the past but a foundation for
            the future. As I continue to work on exciting projects, I’ll be
            updating the site regularly to keep it fresh and relevant. My hope
            is that it not only showcases my skills but also sparks
            conversations and connections. To anyone thinking about updating
            their portfolio: don’t just show what you’ve done; show how and why
            you did it. That’s where the magic happens. Thank you for taking the
            time to check out my new site. Feel free to explore, and let me know
            what you think!
          </div>
        </div>
      </div>
      <Blog />
    </>
  );
}
