import { useDataStore } from "@/store/useDataStore";
import { useFiltersStore } from "@/store/useFiltersStore";
import { cn } from "@/lib/utils.ts";
import { useMemo } from "react";
import { Items } from "@/data/data.ts";
import { classNames } from "@/constants/classes.ts";
import {
  getCardsSearchFilterData,
  getCardsStatusFilterData,
} from "@/lib/filters.ts";
import EmptyState from "@/components/cards/empty-state.tsx";
import SingleCard from "@/components/cards/card/single-card.tsx";
import { CardGroup } from "@/components/cards/card/card-group.tsx";

export default function Cards() {
  const { data, groupedData, groupBy, statuses } = useDataStore();
  const { view, status, search } = useFiltersStore();

  const filteredData = useMemo(() => {
    if (!groupBy) {
      let newData: Items = [...data];

      if (status) newData = getCardsStatusFilterData(newData, statuses, status);
      if (search) newData = getCardsSearchFilterData(newData, search);

      return newData;
    } else {
      let newData = { ...groupedData };

      if (status) {
        newData = Object.fromEntries(
          Object.entries(newData ?? {}).map(([key, value]) => {
            return [key, getCardsStatusFilterData(value, statuses, status)];
          }),
        );
      }

      if (search) {
        newData = Object.fromEntries(
          Object.entries(newData ?? {}).map(([key, value]) => {
            const valueFiltered = getCardsSearchFilterData(value, search);
            return [key, valueFiltered];
          }),
        );
      }

      if (!newData) return null;

      return Object.fromEntries(
        Object.entries(newData).filter(([, value]) => value.length > 0),
      );
    }
  }, [status, search, statuses, groupBy]);

  // If there are no items to display, show an empty state
  if (
    filteredData?.length === 0 ||
    filteredData === null ||
    Object.keys(filteredData).length === 0
  ) {
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
