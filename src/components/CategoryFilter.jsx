// CategoryFilter component: allows users to select a book category
function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div
      className="mb-10 flex flex-wrap gap-3"
      aria-label="Filter books by category"
    >
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onCategoryChange(category)}
          aria-pressed={selectedCategory === category}
          className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
            selectedCategory === category
              ? "border-[#2d493b] bg-[#2d493b] text-white"
              : "border-[#e5ded3] bg-white text-[#4b514c] hover:border-[#2d493b]"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
