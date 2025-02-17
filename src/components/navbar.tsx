import { Button } from "@/components/ui/button.tsx";
import { DataStore, useDataStore } from "@/store/useDataStore.ts";
import { cn } from "@/lib/utils.ts";
import { GridIcon, ListIcon } from "lucide-react";
import { useFiltersStore } from "@/store/useFiltersStore.ts";
import { statusesObj } from "@/constants/statusesObject.ts";

export default function Navbar() {
  const { view, setView } = useFiltersStore();

  return (
    <div className={"flex flex-col gap-y-6 w-1/2 items-center rounded-xl py-6"}>
      <nav>
        <ul
          className={
            "flex justify-between items-center bg-white px-2 h-12 w-fit rounded-2xl gap-x-1 border border-muted"
          }
        >
          <ButtonNav>Podstawa</ButtonNav>
          <ButtonNav>Rozszerzenie</ButtonNav>
          <ButtonNav>Ustna</ButtonNav>
        </ul>
      </nav>
      <section
        className={
          "flex justify-between items-center bg-white px-3 h-8 w-fit rounded-full gap-x-1 min-w-full border border-muted"
        }
      >
        <div className={"flex gap-x-1 items-center"}>
          <ButtonFilter filter={"period"}>Epoka</ButtonFilter>
          <ButtonFilter filter={"motive"}>Motyw</ButtonFilter>
          <ButtonFilter filter={"author"}>Autor</ButtonFilter>
        </div>
        <div className={"flex gap-x-2"}>
          {Object.entries(statusesObj).map(([key, value]) => {
            return (
              <Button
                key={key}
                variant={"ghost"}
                size={"icon"}
                className={cn("size-6 rounded-xl cursor-pointer")}
              >
                <value.icon className={"size-5"} />
              </Button>
            );
          })}
          <Button
            onClick={() => {
              setView(view === "list" ? "grid" : "list");
            }}
            className={"size-6 items-center flex"}
            variant={"ghost"}
            size={"icon"}
          >
            {view === "list" ? <GridIcon /> : <ListIcon />}
          </Button>
        </div>
      </section>
    </div>
  );
}

function ButtonNav({ children }: { children: string }) {
  return (
    <Button className={"hover:cursor-pointer rounded-xl"} variant={"ghost"}>
      {children}
    </Button>
  );
}

function ButtonFilter({
  children,
  filter,
}: {
  children: string;
  filter: DataStore["filterBy"];
}) {
  const { filterByField, filterBy } = useDataStore();
  return (
    <Button
      onClick={() => {
        if (filterBy === filter) {
          filterByField(null);
        } else {
          filterByField(filter);
        }
      }}
      className={cn(
        "hover:cursor-pointer h-6 rounded-xl",
        filterBy === filter && "bg-accent text-accent-foreground",
      )}
      variant={"ghost"}
      size={"sm"}
    >
      {children}
    </Button>
  );
}
