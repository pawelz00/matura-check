import type React from "react";
import { useFiltersStore } from "@/store/useFiltersStore.ts";
import { classNames } from "@/constants/classes.ts";

interface CardGroupProps {
  title: string;
  bgColor?: string;
  children: React.ReactNode;
}

function GroupHeader({ title }: { title: string }) {
  return (
    <>
      <h2 className="text-2xl font-bold tracking-normal text-card-foreground/80 border-b">
        {title}
      </h2>
    </>
  );
}

export function CardGroup({
  title,
  bgColor = "bg-card",
  children,
}: CardGroupProps) {
  const { view } = useFiltersStore();

  return (
    <div className={`rounded-lg ${bgColor} p-6 space-y-6 shadow-lg w-full`}>
      <GroupHeader title={title} />
      <div className={classNames[view]}>{children}</div>
    </div>
  );
}
