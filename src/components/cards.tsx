import { useDataStore } from "@/store/useDataStore";
import SingleCard from "@/components/card/single-card.tsx";
import { useFiltersStore } from "@/store/useFiltersStore";
import { cn } from "@/lib/utils.ts";
import { CardGroup } from "@/components/card/card-group.tsx";

export default function Cards() {
  const { data, groupedData, groupBy, statuses } = useDataStore();
  const { view, status } = useFiltersStore();

  const classNames = {
    grid: "grid grid-cols-2 gap-6",
    list: "flex flex-col gap-6",
  };

  if (!groupBy) {
    return (
      <main className={cn("w-1/2 mt-12 items-center", classNames[view])}>
        {data
          .filter((item) => {
            if (status) {
              return statuses[item.id] === status;
            }
            return true;
          })
          .map((item) => (
            <SingleCard key={item.id} item={item} />
          ))}
      </main>
    );
  }

  return (
    <main className={"flex flex-col gap-12 w-1/2 mt-12 items-center"}>
      {Object.entries(groupedData ?? {}).map(([key, value]) => {
        return (
          <CardGroup title={key} description={""}>
            {value
              .filter((item) => {
                if (status) {
                  return statuses[item.id] === status;
                }
                return true;
              })
              .map((item) => (
                <SingleCard key={item.id} item={item} />
              ))}
          </CardGroup>
        );
      })}
    </main>
  );
}
