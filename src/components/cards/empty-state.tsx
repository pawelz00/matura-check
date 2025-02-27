import { FileQuestion, Filter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useFiltersStore } from "@/store/useFiltersStore.ts";

interface EmptyStateProps {
  title?: string;
  description?: string;
  showResetButton?: boolean;
}

export default function EmptyState({
  title = "Nie znaleziono",
  description = "Spróbuj zmienić kryteria wyszukiwania lub filtry, aby zobaczyć więcej wyników.",
  showResetButton = true,
}: EmptyStateProps) {
  const { setSearch, setStatus } = useFiltersStore();

  return (
    <Card className="w-full  mx-auto border-dashed bg-background/50">
      <CardContent className="flex flex-col items-center justify-center py-12 text-center space-y-5">
        <div className="rounded-full bg-muted p-4 w-16 h-16 flex items-center justify-center">
          <FileQuestion className="h-8 w-8 text-muted-foreground" />
        </div>

        <div className="space-y-2 max-w-md">
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>

        {showResetButton && (
          <Button
            variant="outline"
            className="mt-4 flex items-center gap-2"
            onClick={() => {
              setSearch("");
              setStatus(null);
            }}
          >
            <Filter className="size-4" />
            <span>Resetuj filtry</span>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
