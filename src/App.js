import Advertisements from "./components/Advertisements";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Header />
      </header>

      <main className="container mt-5">
        <Advertisements />
      </main>
    </>
  );
}

export default App;
