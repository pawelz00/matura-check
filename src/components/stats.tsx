import { useDataStore } from "@/store/useDataStore.ts";
import { useMemo } from "react";
import { Badge } from "@/components/ui/badge.tsx";

type Stats = {
  numberOfCompletedItems: number;
  review: number;
  notStarted: number;
};

export default function Stats() {
  const { statuses } = useDataStore();

  const stats: Stats = useMemo(() => {
    return Object.values(statuses).reduce(
      (acc, status) => {
        if (status === "learned") {
          acc.numberOfCompletedItems += 1;
        } else if (status === "review") {
          acc.review += 1;
        } else if (status === "notStarted") {
          acc.notStarted += 1;
        }
        return acc;
      },
      {
        numberOfCompletedItems: 0,
        review: 0,
        notStarted: 0,
      },
    );
  }, [statuses]);

  return (
    <section
      className={
        "w-full text-sm flex divide-x items-center border rounded-full bg-white"
      }
    >
      <div className={"flex gap-x-2 items-center px-4 py-1.5"}>
        <span>Lektury przyswojone:</span>
        <Badge variant={"outline"}>{stats.numberOfCompletedItems}</Badge>
      </div>
      <div className={"flex gap-x-2 items-center px-4 py-1.5"}>
        <span>Do powtórki:</span>
        <Badge variant={"outline"}>{stats.review}</Badge>
      </div>
      <div className={"flex gap-x-2 items-center px-4 py-1.5"}>
        <span>Do nauczenia:</span>
        <Badge variant={"outline"}>{stats.notStarted}</Badge>
      </div>
    </section>
  );
}
