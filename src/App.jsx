// Main application component
// Import all bookstore components
import Header from "./components/Header";
import Hero from "./components/Hero";
import BookGrid from "./components/BookGrid";
import Events from "./components/Events";
import About from "./components/About";
import Footer from "./components/Footer";

// Main application component
function App() {
  return (
    <div className="min-h-screen bg-[#f8f5ef]">
      {/* Website header and navigation */}
      <Header />

      {/* Main page content */}
      <main>
        <Hero />
        <BookGrid />
        <Events />
        <About />
      </main>

      {/* Website footer */}
      <Footer />
    </div>
  );
}

export default App;
