import { createFileRoute } from "@tanstack/react-router";
import InfoBar from "@/components/info-bar.tsx";
import QuestionCards from "@/components/cards/question-cards.tsx";
import { useDataStore } from "@/store/useDataStore.ts";
import { useEffect } from "react";

export const Route = createFileRoute("/questions")({
  component: Questions,
});

function Questions() {
  const { loadQuestionStatuses } = useDataStore();

  useEffect(() => {
    loadQuestionStatuses();
  }, []);

  return (
    <div
      className={
        "flex flex-col flex-1 bg-background items-center w-full px-4 md:px-0 md:w-3/4 xl:2/3 2xl:w-1/2 mx-auto mb-12"
      }
    >
      <InfoBar mode={"questions"} showButtonFilters={false} />
      <QuestionCards />
    </div>
  );
}
