import { Button } from "@/components/ui/button.tsx";
import { cn } from "@/lib/utils.ts";
import { GridIcon, ListIcon } from "lucide-react";
import { useFiltersStore } from "@/store/useFiltersStore.ts";
import { DataStore, useDataStore } from "@/store/useDataStore.ts";
import SearchInputWithTooltip from "@/components/functional/search-input.tsx";

export type FiltersProps = {
  showButtonFilters?: boolean;
};

export default function Filters({ showButtonFilters = true }: FiltersProps) {
  const { view, setView } = useFiltersStore();

  return (
    <section
      className={
        "flex justify-between items-center gap-x-1 min-w-full px-3 pt-3 min-h-11"
      }
    >
      <SearchInputWithTooltip />
      {showButtonFilters && (
        <div className={"flex gap-x-1 items-center ml-2"}>
          <ButtonFilter filter={"period"}>Epoka</ButtonFilter>
          <ButtonFilter filter={"author"}>Autor</ButtonFilter>
          <ButtonFilter filter={"motive"}>Motyw</ButtonFilter>
        </div>
      )}
      <div className={"flex gap-x-3 items-center ml-auto"}>
        <Button
          onClick={() => {
            setView(view === "list" ? "grid" : "list");
          }}
          className={"cursor-pointer size-6"}
          variant={"outline"}
          size={"icon"}
        >
          {view === "list" ? (
            <GridIcon className={"size-4"} />
          ) : (
            <ListIcon className={"size-4"} />
          )}
        </Button>
      </div>
    </section>
  );
}

function ButtonFilter({
  children,
  filter,
}: {
  children: string;
  filter: DataStore["groupBy"];
}) {
  const { groupByField, groupBy } = useDataStore();
  return (
    <Button
      onClick={() => {
        if (groupBy === filter) {
          groupByField(null);
        } else {
          groupByField(filter);
        }
      }}
      className={cn(
        "hover:cursor-pointer",
        groupBy === filter && "bg-primary text-primary-foreground",
      )}
      variant={"ghost"}
      size={"sm"}
    >
      {children}
    </Button>
  );
}
