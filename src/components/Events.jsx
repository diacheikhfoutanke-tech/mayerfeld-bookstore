// Events component: displays upcoming bookstore events
function Events() {
  // List of upcoming bookstore events
  const events = [
    {
      id: 1,
      date: "OCT 24",
      title: "Evening Reading",
      description:
        "Enjoy a relaxing evening with inspiring stories and fellow readers.",
      time: "6:00 PM",
    },
    {
      id: 2,
      date: "OCT 29",
      title: "Book Club",
      description:
        "Share your thoughts and discover new perspectives with our book club.",
      time: "5:30 PM",
    },
    {
      id: 3,
      date: "NOV 05",
      title: "Meet the Author",
      description:
        "Meet a local author and learn about the inspiration behind their work.",
      time: "4:00 PM",
    },
  ];

  return (
    <section id="events" className="bg-[#f8f5ef] px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#b77945]">
            Join our community
          </p>

          <h2 className="text-3xl font-bold text-[#2d493b] sm:text-4xl">
            Events at The Reading Room
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-[#6b706b]">
            Connect with readers, exchange ideas, and celebrate the joy of
            discovering great books together.
          </p>
        </div>

        {/* Responsive events grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.id}
              className="border border-[#e5ded3] bg-white p-6 transition-shadow hover:shadow-lg"
            >
              {/* Event date */}
              <p className="mb-5 inline-block bg-[#f8f5ef] px-3 py-2 text-sm font-bold text-[#b77945]">
                {event.date}
              </p>

              {/* Event details */}
              <h3 className="text-xl font-bold text-[#2d493b]">
                {event.title}
              </h3>

              <p className="mt-3 leading-7 text-[#6b706b]">
                {event.description}
              </p>

              <p className="mt-5 text-sm font-semibold text-[#2d493b]">
                {event.time}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
