export default function Footer() {
  return (
    <div className="w-full mx-auto bg-white">
      <footer className="border-t border-t-zinc-200">
        <div className="container w-full px-8 py-24 mx-auto max-w-7xl sm:px-20">
          <div className="overflow-hidden">
            <h1 className="max-w-5xl pb-2 font-sans text-6xl font-semibold tracking-tighter text-black">
              Let's work together
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-8 pt-12 font-sans text-sm sm:grid-cols-2 md:grid-cols-4">
            {/* Column 1 */}
            <div>
              <h3 className="text-lg font-semibold text-indigo-500">
                Find me on
              </h3>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-lg font-semibold text-indigo-500">Other</h3>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom text */}
          <div className="mt-12 font-sans text-xs text-left text-gray-500">
            © {new Date().getFullYear()} Lucas Czuchraj
          </div>
        </div>
      </footer>
    </div>
  );
}
