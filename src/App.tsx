import Navbar from "@/components/navbar.tsx";
import FilterBar from "@/components/filter-bar.tsx";

function App() {
  return (
    <div className={'flex flex-1 bg-background'}>
      <div className={'flex flex-col gap-y-6 items-center w-full'}>
          <Navbar/>
          <FilterBar/>
      </div>
    </div>
  )
}

export default App
