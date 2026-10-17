// Footer component: displays bookstore information and navigation
function Footer() {
  return (
    <footer className="bg-[#2d493b] px-6 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 border-b border-white/20 pb-8 sm:flex-row">
        {/* Bookstore information */}
        <div className="max-w-md">
          <a href="#home" className="text-2xl font-bold tracking-tight">
            The Reading Room<span className="text-[#d6a16e]">.</span>
          </a>

          <p className="mt-3 leading-7 text-white/75">
            An independent bookstore for curious readers, thoughtful ideas, and
            unforgettable stories.
          </p>
        </div>

        {/* Footer navigation */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/80">
            <li>
              <a href="#home" className="transition-colors hover:text-white">
                Home
              </a>
            </li>

            <li>
              <a href="#books" className="transition-colors hover:text-white">
                Books
              </a>
            </li>

            <li>
              <a href="#events" className="transition-colors hover:text-white">
                Events
              </a>
            </li>

            <li>
              <a href="#about" className="transition-colors hover:text-white">
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Copyright information */}
      <div className="mx-auto max-w-7xl pt-6 text-center text-sm text-white/60">
        <p>
          &copy; {new Date().getFullYear()} The Reading Room. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
