import { createFileRoute } from "@tanstack/react-router";
import InfoBar from "@/components/info-bar.tsx";
import Cards from "@/components/cards/cards.tsx";
import { useEffect } from "react";
import { useDataStore } from "@/store/useDataStore.ts";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { loadStatuses } = useDataStore();

  useEffect(() => {
    loadStatuses();
  }, []);

  return (
    <div
      className={
        "flex flex-col flex-1 bg-background items-center w-full px-4 md:px-0 md:w-3/4 xl:2/3 2xl:w-1/2 mx-auto mb-12"
      }
    >
      <InfoBar />
      <Cards />
    </div>
  );
}
