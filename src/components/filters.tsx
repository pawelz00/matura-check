import { statusesObj } from "@/constants/statusesObject.ts";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip.tsx";
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
  const { view, setView, status, setStatus } = useFiltersStore();

  return (
    <section
      className={
        "flex justify-between items-center gap-x-1 min-w-full px-3 pt-3 min-h-11"
      }
    >
      <SearchInputWithTooltip />
      {showButtonFilters && (
        <div className={"flex gap-x-1 items-center"}>
          <ButtonFilter filter={"period"}>Epoka</ButtonFilter>
          <ButtonFilter filter={"author"}>Autor</ButtonFilter>
          <ButtonFilter filter={"motive"}>Motyw</ButtonFilter>
        </div>
      )}
      <div className={"flex gap-x-3 items-center ml-auto"}>
        {Object.entries(statusesObj).map(([key, value]) => {
          return (
            <TooltipProvider key={key}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={() => {
                      setStatus(status === value.status ? null : value.status);
                    }}
                    key={key}
                    variant={"ghost"}
                    size={"icon"}
                    className={cn(
                      "cursor-pointer size-6",
                      status === value.status &&
                        "bg-accent text-accent-foreground",
                    )}
                  >
                    <value.icon className={"size-4"} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{value.text}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
        <Button
          onClick={() => {
            setView(view === "list" ? "grid" : "list");
          }}
          className={"cursor-pointer size-6"}
          variant={"ghost"}
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
        "hover:cursor-pointer ",
        groupBy === filter && "bg-accent text-accent-foreground",
      )}
      variant={"ghost"}
      size={"sm"}
    >
      {children}
    </Button>
  );
}
