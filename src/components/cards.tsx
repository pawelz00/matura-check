import { useDataStore } from "@/store/useDataStore";
import SingleCard from "@/components/card/single-card.tsx";
import { useFiltersStore } from "@/store/useFiltersStore";
import { cn } from "@/lib/utils.ts";
import { CardGroup } from "@/components/card/card-group.tsx";
import { useMemo } from "react";
import { Items } from "@/data/data.ts";
import EmptyState from "@/components/empty-state.tsx";

export default function Cards() {
  const { data, groupedData, groupBy, statuses } = useDataStore();
  const { view, status, search } = useFiltersStore();

  // Todo: Extract to a separate file
  const classNames = {
    grid: "grid grid-cols-2 gap-6",
    list: "flex flex-col gap-6",
  };

  // Todo: Extract this logic to a separate function
  const filteredData = useMemo(() => {
    if (!groupBy) {
      let newData: Items = [...data];

      if (status) {
        newData = data.filter((item) => statuses[item.id] === status);
      }

      if (search) {
        newData = data.filter((item) => {
          return (
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item?.author?.toLowerCase().includes(search.toLowerCase()) ||
            item?.period?.toLowerCase().includes(search.toLowerCase()) ||
            item?.questions?.some((question) =>
              question.motive.toLowerCase().includes(search.toLowerCase()),
            )
          );
        });
      }

      return newData;
    } else {
      let newData = groupedData;

      if (status) {
        newData = Object.fromEntries(
          Object.entries(groupedData ?? {}).map(([key, value]) => {
            return [key, value.filter((item) => statuses[item.id] === status)];
          }),
        );
      }

      if (search) {
        newData = Object.fromEntries(
          Object.entries(groupedData ?? {}).map(([key, value]) => {
            const valueFiltered = value.filter((item) => {
              return (
                item.title.toLowerCase().includes(search.toLowerCase()) ||
                item?.author?.toLowerCase().includes(search.toLowerCase())
              );
            });
            return [key, valueFiltered];
          }),
        );
      }

      if (!newData) {
        return null;
      }

      return Object.fromEntries(
        Object.entries(newData).filter(([, value]) => value.length > 0),
      );
    }
  }, [status, search, statuses, groupBy]);

  if (filteredData?.length === 0 || filteredData === null) {
    return (
      <main className="w-full mt-6 items-center">
        <EmptyState />
      </main>
    );
  }

  if (!groupBy) {
    return (
      <main className={cn("w-full mt-6 items-center", classNames[view])}>
        {(filteredData as Items).map((item) => (
          <SingleCard key={item.id} item={item} />
        ))}
      </main>
    );
  }

  return (
    <main className={"flex flex-col gap-12 w-full mt-6 items-center"}>
      {Object.entries((filteredData as Record<string, Items>) ?? {}).map(
        ([key, value]) => {
          return (
            <CardGroup key={key} title={key}>
              {value.map((item) => (
                <SingleCard key={item.id} item={item} />
              ))}
            </CardGroup>
          );
        },
      )}
    </main>
  );
}
