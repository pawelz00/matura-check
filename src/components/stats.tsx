import { useDataStore } from "@/store/useDataStore.ts";
import { useMemo } from "react";
import { Badge } from "@/components/ui/badge.tsx";
import Counter from "@/components/counter.tsx";
import { statusesObj } from "@/constants/statusesObject.ts";

type Stats = {
  learned: number;
  inProgress: number;
  review: number;
  notStarted: number;
};

export type StatsProps = {
  mode?: "questions" | "default";
};

export default function Stats({ mode = "default" }: StatsProps) {
  const { statuses, questionsStatuses } = useDataStore();

  const stats: Stats = useMemo(() => {
    return Object.values(
      mode === "default" ? statuses : questionsStatuses,
    ).reduce(
      (acc, status) => {
        if (status === "learned") {
          acc.learned += 1;
        } else if (status === "review") {
          acc.review += 1;
        } else if (status === "notStarted") {
          acc.notStarted += 1;
        } else if (status === "inProgress") {
          acc.inProgress += 1;
        }
        return acc;
      },
      {
        learned: 0,
        review: 0,
        notStarted: 0,
        inProgress: 0,
      },
    );
  }, [statuses, questionsStatuses]);

  return (
    <section
      className={"w-full flex flex-wrap gap-3 items-center justify-between p-3"}
    >
      <div className={"flex text-sm gap-x-3"}>
        {Object.values(statusesObj).map((status) => (
          <Badge variant={"outline"} key={status.text}>
            <status.icon className={status.textColor} />
            <span>
              {status.text}: {stats?.[status.status] ?? 0}
            </span>
          </Badge>
        ))}
      </div>
      <Counter />
    </section>
  );
}
