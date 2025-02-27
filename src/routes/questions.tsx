import { createFileRoute } from "@tanstack/react-router";
import InfoBar from "@/components/info-bar.tsx";
import QuestionCards from "@/components/question-cards.tsx";

export const Route = createFileRoute("/questions")({
  component: Questions,
});

function Questions() {
  return (
    <div
      className={
        "flex flex-col flex-1 bg-background items-center max-w-full md:max-w-3/4 xl:max-w-1/2 mx-auto mb-12"
      }
    >
      <InfoBar mode={"questions"} showButtonFilters={false} />
      <QuestionCards />
    </div>
  );
}
