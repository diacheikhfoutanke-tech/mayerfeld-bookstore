// Hero component: introduces the independent bookstore
function Hero() {
  return (
    <section id="home" className="bg-[#f8f5ef] px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          {/* Small introductory label */}
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#b77945]">
            Your next chapter starts here
          </p>

          {/* Main page heading */}
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#2d493b] sm:text-5xl lg:text-7xl">
            Discover Your Next Great Read
          </h1>

          {/* Introduction */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6b706b] sm:text-xl">
            Explore thoughtfully selected stories, inspiring ideas, and books
            that stay with you long after the final page.
          </p>

          {/* Call-to-action button */}
          <a
            href="#books"
            className="mt-8 inline-flex rounded-md bg-[#2d493b] px-7 py-3.5 font-semibold text-white transition-colors hover:bg-[#20372c]"
          >
            Explore Our Books
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
