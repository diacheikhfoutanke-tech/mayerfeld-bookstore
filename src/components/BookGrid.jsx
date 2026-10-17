import { useState } from "react";
import books from "../data/books";
import CategoryFilter from "./CategoryFilter";
import QuantityStepper from "./QuantityStepper";
// BookGrid component: displays and filters bookstore products
function BookGrid() {
  // Store the currently selected category
  const [selectedCategory, setSelectedCategory] = useState("All");
  // Store the selected quantity for each book
  const [quantities, setQuantities] = useState(
    Object.fromEntries(books.map((book) => [book.id, 1])),
  );

  // Update the quantity of a specific book
  function handleQuantityChange(bookId, quantity) {
    setQuantities((previousQuantities) => ({
      ...previousQuantities,
      [bookId]: quantity,
    }));
  }

  // Filter books according to the selected category
  const filteredBooks =
    selectedCategory === "All"
      ? books
      : books.filter((book) => book.category === selectedCategory);

  // Available categories
  const categories = ["All", "Fiction", "Non-fiction", "Staff Picks"];

  return (
    <section id="books" className="bg-white px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#b77945]">
            Our collection
          </p>

          <h2 className="text-3xl font-bold text-[#2d493b] sm:text-4xl">
            Find Your Next Favorite
          </h2>

          <p className="mt-3 max-w-2xl text-[#6b706b]">
            Explore our carefully selected books, from unforgettable stories to
            inspiring ideas.
          </p>
        </div>

        {/* Reusable controlled category filter */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Responsive book grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBooks.map((book) => (
            <article
              key={book.id}
              className="overflow-hidden border border-[#e5ded3] bg-white transition-shadow hover:shadow-lg"
            >
              {/* Book cover */}
              <div className="aspect-[4/3] overflow-hidden bg-[#2d3f34]">
                <img
                  src={book.image}
                  alt={`Cover of ${book.title}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Book details */}
              <div className="p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#b77945]">
                  {book.category}
                </p>

                <h3 className="text-lg font-bold text-[#2d493b]">
                  {book.title}
                </h3>

                <p className="mt-1 text-[#6b706b]">{book.author}</p>

                <p className="mt-4 font-semibold text-[#b77945]">
                  ${book.price.toFixed(2)}
                </p>

                <QuantityStepper
                  quantity={quantities[book.id]}
                  onQuantityChange={(quantity) =>
                    handleQuantityChange(book.id, quantity)
                  }
                />
              </div>
            </article>
          ))}
        </div>

        {/* Display the number of matching books */}
        <p className="mt-8 text-sm text-[#6b706b]" aria-live="polite">
          Showing {filteredBooks.length}{" "}
          {filteredBooks.length === 1 ? "book" : "books"}
        </p>
      </div>
    </section>
  );
}

export default BookGrid;
