import Navbar from "@/components/navbar.tsx";
import Cards from "@/components/cards.tsx";
import Stats from "@/components/stats.tsx";

function App() {
  return (
    <div
      className={
        "flex flex-col flex-1 bg-background items-center max-w-full md:max-w-3/4 xl:max-w-1/2 mx-auto"
      }
    >
      <Navbar />
      <Stats />
      <Cards />
    </div>
  );
}

export default App;
