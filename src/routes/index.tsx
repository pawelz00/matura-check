import { createFileRoute } from "@tanstack/react-router";
import InfoBar from "@/components/info-bar.tsx";
import Cards from "@/components/cards/cards.tsx";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div
      className={
        "flex flex-col flex-1 bg-background items-center max-w-full md:max-w-3/4 xl:max-w-1/2 mx-auto mb-12"
      }
    >
      <InfoBar />
      <Cards />
    </div>
  );
}
