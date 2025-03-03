import { Input } from "@/components/ui/input.tsx";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip.tsx";
import { Info } from "lucide-react";
import { useFiltersStore } from "@/store/useFiltersStore.ts";

export default function SearchInputWithTooltip() {
  const { search, setSearch } = useFiltersStore();

  return (
    <div className="relative w-full max-w-48">
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Szukaj..."
        className="pr-10"
      />
      <Tooltip>
        <TooltipTrigger asChild>
          <Info className="absolute right-2 top-1/2 -translate-y-1/2 size-4.5 text-muted-foreground cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Wyszukaj po tytule, autorze, epoce lub motywie.</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
