import type React from "react";
import { useFiltersStore } from "@/store/useFiltersStore.ts";

interface CardGroupProps {
  title: string;
  description: string;
  bgColor?: string;
  children: React.ReactNode;
}

function GroupHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <h2 className="text-xl font-bold tracking-wide ">{title}</h2>
      <p className="text-sm text-primary/70">{description}</p>
    </>
  );
}

export function CardGroup({
  title,
  description,
  bgColor = "bg-secondary/20",
  children,
}: CardGroupProps) {
  const { view } = useFiltersStore();

  const classNames = {
    grid: "grid grid-cols-2 gap-8",
    list: "flex flex-col gap-8",
  };

  return (
    <div
      className={`rounded-lg ${bgColor} py-8 px-12 space-y-6 transition-all hover:shadow-md w-full`}
    >
      <GroupHeader title={title} description={description} />
      <div className={classNames[view]}>{children}</div>
    </div>
  );
}
