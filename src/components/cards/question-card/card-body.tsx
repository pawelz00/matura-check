import { CardContent } from "@/components/ui/card.tsx";
import { QuestionsData, useDataStore } from "@/store/useDataStore.ts";
import { statusesObj } from "@/constants/statusesObject.ts";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip.tsx";
import { Button } from "@/components/ui/button.tsx";
import { cn } from "@/lib/utils.ts";
import { useFiltersStore } from "@/store/useFiltersStore.ts";
import { Separator } from "@/components/ui/separator.tsx";

export default function CardBody({ item }: { item: QuestionsData }) {
  const { questionsStatuses, setQuestionsStatus } = useDataStore();
  const { view } = useFiltersStore();

  function questionStatus(questionId: number) {
    return questionsStatuses[`${item.id}-${questionId}`];
  }

  return item?.questions?.map((q, index) => (
    <CardContent
      key={q.question + q.id}
      className={cn(
        "mt-6 space-y-6 flex gap-2 w-full items-center justify-between",
        view === "grid" && "flex-col items-start",
      )}
    >
      <div>
        <h3 className="text-md font-medium text-card-foreground">
          {q.url ? (
            <a
              href={q.url}
              target="_blank"
              className="hover:underline"
              rel="noreferrer"
            >
              {q.motive}
            </a>
          ) : (
            q.motive
          )}
        </h3>
        <p className="text-sm text-card-foreground/65">{q.question}</p>
      </div>
      <div className="flex gap-3">
        {Object.entries(statusesObj).map(([key, value]) => {
          return (
            <Tooltip key={key}>
              <TooltipTrigger asChild>
                <Button
                  variant={"ghost"}
                  size={"icon"}
                  className={cn(
                    questionStatus(q.id) === value.status && "bg-card-header",
                    "hover:cursor-pointer hover:bg-card-header hover:text-card-foreground",
                  )}
                  onClick={() => {
                    setQuestionsStatus(item.id, q.id, value.status);
                  }}
                >
                  <value.icon className={"size-4"} />
                </Button>
              </TooltipTrigger>
              <TooltipContent
                className={
                  "bg-card-header text-card-foreground fill-card-header"
                }
              >
                <p>{value.text}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
      {view === "grid" && index !== (item?.questions?.length ?? 0) - 1 && (
        <Separator />
      )}
    </CardContent>
  ));
}
