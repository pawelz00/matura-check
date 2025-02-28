import { Button } from "@/components/ui/button.tsx";
import { Item } from "@/data/data.ts";
import { useDataStore } from "@/store/useDataStore.ts";
import { cn } from "@/lib/utils.ts";
import { statusesObj } from "@/constants/statusesObject.ts";
import { CardHeader, CardTitle } from "@/components/ui/card.tsx";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip.tsx";

export default function CardHead({ item }: { item: Item }) {
  const { setStatus, statuses } = useDataStore();

  return (
    <CardHeader className="rounded-t-lg bg-card-header">
      <div className="flex items-center justify-between">
        <div className="space-y-0.1">
          <CardTitle className="text-2xl font-serif">{item.title}</CardTitle>
          <p className="text-sm text-secondary-foreground/70">{item.author}</p>
        </div>
        <div className="flex gap-3">
          {Object.entries(statusesObj).map(([key, value]) => {
            return (
              <TooltipProvider key={key}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={"ghost"}
                      size={"icon"}
                      className={cn(
                        statuses[item.id] === value.status &&
                          "bg-primary/20 text-card-foreground",
                        "hover:bg-primary/20 hover:text-card-foreground cursor-pointer",
                      )}
                      onClick={() => {
                        setStatus(item.id, value.status);
                      }}
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
        </div>
      </div>
    </CardHeader>
  );
}
