import Filters from "@/components/filters.tsx";
import Stats from "@/components/stats.tsx";

export default function InfoBar() {
  return (
    <div className={"border rounded-lg w-full flex flex-col bg-white"}>
      <Filters />
      <Stats />
    </div>
  );
}
