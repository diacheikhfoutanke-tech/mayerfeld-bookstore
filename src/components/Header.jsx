// Header component: displays the bookstore logo and navigation
function Header() {
  return (
    <header className="border-b border-[#e5ded3] bg-[#f8f5ef]">
      <nav
        className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 sm:flex-row"
        aria-label="Main navigation"
      >
        {/* Bookstore name */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight text-[#2d493b]"
        >
          The Reading Room<span className="text-[#b77945]">.</span>
        </a>

        {/* Navigation links */}
        <ul className="flex flex-wrap items-center justify-center gap-5 text-sm font-medium text-[#4b514c] sm:gap-7">
          <li>
            <a href="#home" className="transition-colors hover:text-[#b77945]">
              Home
            </a>
          </li>

          <li>
            <a href="#books" className="transition-colors hover:text-[#b77945]">
              Our Books
            </a>
          </li>

          <li>
            <a
              href="#events"
              className="transition-colors hover:text-[#b77945]"
            >
              Events
            </a>
          </li>

          <li>
            <a href="#about" className="transition-colors hover:text-[#b77945]">
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
