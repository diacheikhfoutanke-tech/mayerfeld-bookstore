// About component: introduces the bookstore and its values
function About() {
  return (
    <section id="about" className="bg-white px-6 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2">
        {/* About text */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#b77945]">
            Our story
          </p>

          <h2 className="text-3xl font-bold leading-tight text-[#2d493b] sm:text-4xl">
            More Than Just a Bookstore
          </h2>

          <p className="mt-5 leading-8 text-[#6b706b]">
            The Reading Room is an independent bookstore built around a simple
            belief: every book has the power to open a new world.
          </p>

          <p className="mt-4 leading-8 text-[#6b706b]">
            We carefully select stories, ideas, and perspectives that inspire
            curiosity, encourage discovery, and bring readers together.
          </p>

          <a
            href="#books"
            className="mt-7 inline-flex rounded-md bg-[#2d493b] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#20372c]"
          >
            Explore Our Collection
          </a>
        </div>

        {/* Decorative visual panel */}
        <div className="flex min-h-64 items-center justify-center bg-[#f8f5ef] p-10 sm:min-h-80">
          <div className="max-w-sm text-center">
            <p className="text-5xl text-[#b77945]" aria-hidden="true">
              ❝
            </p>

            <p className="mt-3 text-2xl font-semibold leading-relaxed text-[#2d493b]">
              A room without books is like a body without a soul.
            </p>

            <p className="mt-5 text-sm font-medium text-[#6b706b]">
              A place for curious minds and passionate readers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
