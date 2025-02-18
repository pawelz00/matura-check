import { Button } from "@/components/ui/button.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Item } from "@/data/data.ts";
import { useDataStore } from "@/store/useDataStore.ts";
import { useEffect } from "react";
import { cn } from "@/lib/utils.ts";
import { statusesObj } from "@/constants/statusesObject.ts";

export default function CardHeader({ item }: { item: Item }) {
  const { groupBy, loadStatuses, setStatus, statuses } = useDataStore();

  useEffect(() => {
    loadStatuses();
  }, [loadStatuses]);

  return (
    <div
      className={
        "px-4 py-1.5 bg-gray-600 rounded-t-md flex justify-between items-center gap-x-3"
      }
    >
      <div className={"flex gap-x-3 items-center"}>
        <span
          className={
            "font-semibold text-lg tracking-wide text-accent-foreground"
          }
        >
          {item.title}
        </span>
        {groupBy !== "author" && (
          <span className={"text-md tracking-tight text-accent-foreground"}>
            {item.author}
          </span>
        )}
      </div>
      <div className={"flex gap-x-2 items-center"}>
        {Object.entries(statusesObj).map(([key, value]) => {
          return (
            <Button
              key={key}
              variant={"outline"}
              size={"icon"}
              className={cn(
                "size-6 rounded-xl cursor-pointer",
                value.hoverColor,
                statuses[item.id] === value.status &&
                  "bg-accent text-accent-foreground",
              )}
              onClick={() => {
                setStatus(item.id, value.status);
              }}
            >
              <value.icon className={"size-5"} />
            </Button>
          );
        })}
        {groupBy !== "period" && (
          <Badge variant={"outline"} className={"ml-2 text-card font-medium"}>
            {item.period}
          </Badge>
        )}
      </div>
    </div>
  );
}
