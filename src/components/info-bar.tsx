import Filters, { FiltersProps } from "@/components/filters.tsx";
import Stats, { StatsProps } from "@/components/stats.tsx";

type InfoBarProps = {
  mode?: StatsProps["mode"];
  showButtonFilters?: FiltersProps["showButtonFilters"];
};

export default function InfoBar({ mode, showButtonFilters }: InfoBarProps) {
  return (
    <div
      className={
        "border rounded-lg w-full flex flex-col bg-white sticky top-20"
      }
    >
      <Filters showButtonFilters={showButtonFilters} />
      <Stats mode={mode} />
    </div>
  );
}
