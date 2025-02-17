import Navbar from "@/components/navbar.tsx";
import Cards from "@/components/cards.tsx";

function App() {

  return (
    <div className={'flex flex-col flex-1 bg-background items-center'}>
      <Navbar />
      <Cards />
    </div>
  )
}

export default App
