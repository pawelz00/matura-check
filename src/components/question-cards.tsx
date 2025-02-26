import { useDataStore } from "@/store/useDataStore";
import { useFiltersStore } from "@/store/useFiltersStore";
import { cn } from "@/lib/utils.ts";
import SingleCard from "@/components/question-card/single-card.tsx";
import { useMemo } from "react";

export default function QuestionCards() {
  const { questionsData, questionsStatuses } = useDataStore();
  const { view, status } = useFiltersStore();

  const filteredQuestions = useMemo(() => {
    if (status) {
      return questionsData
        .map((i) => {
          return {
            ...i,
            questions: i.questions.filter((q) => {
              return status
                ? questionsStatuses[`${i.id}-${q.id}`] === status
                : false;
            }),
          };
        })
        .filter((i) => i.questions.length);
    }
    return questionsData;
  }, [status]);

  const classNames = {
    grid: "grid grid-cols-2 gap-6",
    list: "flex flex-col gap-6",
  };

  return (
    <main className={cn("w-full mt-6 items-center", classNames[view])}>
      {filteredQuestions.map((item) => (
        <SingleCard key={item.id} item={item} />
      ))}
    </main>
  );
}
