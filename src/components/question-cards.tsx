import { QuestionsData, useDataStore } from "@/store/useDataStore";
import { useFiltersStore } from "@/store/useFiltersStore";
import { cn } from "@/lib/utils.ts";
import SingleCard from "@/components/question-card/single-card.tsx";
import { useMemo } from "react";
import EmptyState from "@/components/empty-state.tsx";

export default function QuestionCards() {
  const { questionsData, questionsStatuses } = useDataStore();
  const { view, status, search } = useFiltersStore();

  const filteredQuestions = useMemo(() => {
    let newData: QuestionsData[] = [...questionsData];
    if (status) {
      newData = questionsData
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
    if (search.length > 0) {
      newData = newData.map((i) => {
        return {
          ...i,
          questions: i.questions.filter((q) => {
            return (
              q.question.toLowerCase().includes(search.toLowerCase()) ||
              q.motive.toLowerCase().includes(search.toLowerCase())
            );
          }),
        };
      });
    }
    return newData.filter((i) => i.questions.length);
  }, [status, search]);

  const classNames = {
    grid: "grid grid-cols-2 gap-6",
    list: "flex flex-col gap-6",
  };

  if (filteredQuestions.length === 0) {
    return (
      <main className="w-full mt-6 items-center">
        <EmptyState />
      </main>
    );
  }

  return (
    <main className={cn("w-full mt-6 items-center", classNames[view])}>
      {filteredQuestions.map((item) => (
        <SingleCard key={item.id} item={item} />
      ))}
    </main>
  );
}
