import { Button } from "@/components/ui/button.tsx";
import { Item } from "@/data/data.ts";
import { useDataStore } from "@/store/useDataStore.ts";
import { useEffect } from "react";
import { cn } from "@/lib/utils.ts";
import { statusesObj } from "@/constants/statusesObject.ts";
import { CardHeader, CardTitle } from "@/components/ui/card.tsx";

export default function CardHead({ item }: { item: Item }) {
  const { loadStatuses, setStatus, statuses } = useDataStore();

  useEffect(() => {
    loadStatuses();
  }, [loadStatuses]);

  return (
    <CardHeader className="rounded-t-lg bg-gradient-to-r from-primary to-secondary">
      <div className="flex items-center justify-between">
        <div className="space-y-0.1">
          <CardTitle className="text-2xl font-serif">{item.title}</CardTitle>
          <p className="text-sm text-secondary-foreground/70">{item.author}</p>
        </div>
        <div className="flex gap-3">
          {Object.entries(statusesObj).map(([key, value]) => {
            return (
              <Button
                key={key}
                variant={"ghost"}
                size={"icon"}
                className={cn(
                  statuses[item.id] === value.status &&
                    "bg-primary text-primary-foreground",
                  "hover:bg-primary hover:text-primary-foreground",
                )}
                onClick={() => {
                  setStatus(item.id, value.status);
                }}
              >
                <value.icon className={"size-4"} />
              </Button>
            );
          })}
        </div>
      </div>
    </CardHeader>
  );
}
