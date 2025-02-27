import { CardContent } from "@/components/ui/card.tsx";
import { QuestionsData, useDataStore } from "@/store/useDataStore.ts";
import { statusesObj } from "@/constants/statusesObject.ts";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip.tsx";
import { Button } from "@/components/ui/button.tsx";
import { cn } from "@/lib/utils.ts";

export default function CardBody({ item }: { item: QuestionsData }) {
  const { questionsStatuses, setQuestionsStatus } = useDataStore();

  function questionStatus(questionId: number) {
    return questionsStatuses[`${item.id}-${questionId}`];
  }

  return item.questions.map((q) => (
    <CardContent
      key={q.question + q.id}
      className="mt-6 space-y-6 flex w-full items-center justify-between"
    >
      <div>
        <h3 className="text-md font-medium text-card-foreground">{q.motive}</h3>
        <p className="text-sm text-card-foreground/65">{q.question}</p>
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
                      questionStatus(q.id) === value.status &&
                        "bg-primary text-primary-foreground",
                      "hover:bg-primary hover:text-primary-foreground hover:cursor-pointer",
                    )}
                    onClick={() => {
                      setQuestionsStatus(item.id, q.id, value.status);
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
    </CardContent>
  ));
}
