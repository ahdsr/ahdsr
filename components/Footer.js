export default function Footer() {
  return (
    <div className="mx-auto w-full bg-white">
      <footer className="border-t border-t-zinc-200">
        <div className="container mx-auto w-full max-w-7xl px-8 py-24 sm:px-20">
          <div className="overflow-hidden">
            <h1 className="max-w-5xl pb-2 font-sans text-6xl font-semibold tracking-tighter text-black">
              Let&apos;s work together
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-8 pt-12 font-sans text-sm sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold text-indigo-500">
                Find me on
              </h3>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li>
                  <a
                    href="https://www.linkedin.com/in/lucasczuchraj/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-left font-sans text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Lucas Czuchraj
          </div>
        </div>
      </footer>
    </div>
  );
}
