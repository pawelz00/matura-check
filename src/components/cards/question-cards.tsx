import { QuestionsData, useDataStore } from "@/store/useDataStore";
import { useFiltersStore } from "@/store/useFiltersStore";
import { cn } from "@/lib/utils.ts";
import SingleCard from "@/components/cards/question-card/single-card.tsx";
import { useMemo } from "react";
import { classNames } from "@/constants/classes.ts";
import {
  getQuestionsCardsSearchFilterData,
  getQuestionsCardsStatusFilterData,
} from "@/lib/filters.ts";
import EmptyState from "@/components/cards/empty-state.tsx";

export default function QuestionCards() {
  const { questionsData, questionsStatuses } = useDataStore();
  const { view, status, search } = useFiltersStore();

  const filteredQuestions = useMemo(() => {
    let newData: QuestionsData[] = [...questionsData];
    if (status) {
      newData = getQuestionsCardsStatusFilterData(
        newData,
        status,
        questionsStatuses,
      );
    }
    if (search.length > 0) {
      newData = getQuestionsCardsSearchFilterData(newData, search);
    }
    return newData;
  }, [status, search, questionsStatuses]);

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
        <SingleCard key={JSON.stringify(item)} item={item} />
      ))}
    </main>
  );
}
