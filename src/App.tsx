import Navbar from "@/components/navbar.tsx";
import FilterBar from "@/components/filter-bar.tsx";
import {useDataStore} from "@/store/useDataStore.ts";

function App() {

  const {filteredData} = useDataStore();

  return (
    <div className={'flex flex-1 bg-background'}>
      <div className={'flex flex-col gap-y-6 items-center w-full'}>
          <Navbar/>
          <FilterBar/>
          <pre className={'w-1/2'}>{JSON.stringify(filteredData, null, 2)}</pre>
      </div>
    </div>
  )
}

export default App
