import { useDataStore } from "@/store/useDataStore.ts";
import { useMemo } from "react";
import { Badge } from "@/components/ui/badge.tsx";
import Counter from "@/components/counter.tsx";

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
    <section className={"w-full flex items-center justify-between p-3"}>
      <div className={"flex text-sm gap-x-3"}>
        <Badge variant={"outline"}>
          Lektury przyswojone: {stats.numberOfCompletedItems}
        </Badge>
        <Badge variant={"outline"}>Do powtórki: {stats.review}</Badge>
        <Badge variant={"outline"}>Do nauczenia: {stats.notStarted}</Badge>
      </div>
      <Counter />
    </section>
  );
}
