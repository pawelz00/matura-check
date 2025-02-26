import Navbar from "@/components/navbar.tsx";
import InfoBar from "@/components/info-bar.tsx";
import Cards from "@/components/cards.tsx";

function App() {
  return (
    <div
      className={
        "flex flex-col flex-1 bg-background items-center max-w-full md:max-w-3/4 xl:max-w-1/2 mx-auto mb-12"
      }
    >
      <Navbar />
      <InfoBar />
      <Cards />
    </div>
  );
}

export default App;
