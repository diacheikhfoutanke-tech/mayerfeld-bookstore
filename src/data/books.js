// Store all bookstore products in one data file
const books = [
  // Fiction books
  {
    id: 1,
    title: "The Silent Garden",
    author: "Elena Brooks",
    price: 18,
    category: "Fiction",
    image: `${import.meta.env.BASE_URL}images/the silence garden.png`,
  },
  {
    id: 2,
    title: "Beyond the Horizon",
    author: "Amelia Carter",
    price: 21,
    category: "Fiction",
    image: `${import.meta.env.BASE_URL}images/beyond-the-horizon.png`,
  },
  {
    id: 3,
    title: "The Last Chapter",
    author: "Daniel Moore",
    price: 16,
    category: "Fiction",
    image: `${import.meta.env.BASE_URL}images/the last chapter.png`,
  },

  // Non-fiction books
  {
    id: 4,
    title: "Ideas That Changed Us",
    author: "Marcus Reed",
    price: 20,
    category: "Non-fiction",
    image: `${import.meta.env.BASE_URL}images/ideas that change us.png`,
  },
  {
    id: 5,
    title: "A World of Ideas",
    author: "Sophie Martin",
    price: 19,
    category: "Non-fiction",
    image: `${import.meta.env.BASE_URL}images/a world of ideas.png`,
  },
  {
    id: 6,
    title: "Understanding Tomorrow",
    author: "James Wilson",
    price: 22,
    category: "Non-fiction",
    image: `${import.meta.env.BASE_URL}images/understanding.png`,
  },

  // Staff picks
  {
    id: 7,
    title: "The Hidden Path",
    author: "Olivia Stone",
    price: 17,
    category: "Staff Picks",
    image: `${import.meta.env.BASE_URL}images/the hidden path.png`,
  },
  {
    id: 8,
    title: "Letters to Tomorrow",
    author: "Noah Bennett",
    price: 19,
    category: "Staff Picks",
    image: `${import.meta.env.BASE_URL}images/letter.png`,
  },
  {
    id: 9,
    title: "Between the Lines",
    author: "Emma Collins",
    price: 18,
    category: "Staff Picks",
    image: `${import.meta.env.BASE_URL}images/between.png`,
  },
];

export default books;
