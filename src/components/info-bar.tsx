import Filters from "@/components/filters.tsx";
import Stats, { StatsProps } from "@/components/stats.tsx";

type InfoBarProps = {
  statsMode?: StatsProps["mode"];
};

export default function InfoBar({ statsMode = "default" }: InfoBarProps) {
  return (
    <div className={"border rounded-lg w-full flex flex-col bg-white"}>
      <Filters />
      <Stats mode={statsMode} />
    </div>
  );
}
