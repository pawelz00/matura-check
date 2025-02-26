import { Button } from "@/components/ui/button.tsx";

export default function Navbar() {
  return (
    <div
      className={"flex flex-col gap-y-6 w-full items-center rounded-xl py-6"}
    >
      <nav>
        <ul
          className={
            "flex justify-between items-center bg-white px-2 h-12 w-fit rounded-2xl gap-x-1 border border-muted"
          }
        >
          <ButtonNav>Podstawa</ButtonNav>
          <ButtonNav>Ustna</ButtonNav>
          <ButtonNav disabled>Rozszerzenie</ButtonNav>
        </ul>
      </nav>
    </div>
  );
}

function ButtonNav({
  children,
  disabled = false,
}: {
  children: string;
  disabled?: boolean;
}) {
  return (
    <Button
      disabled={disabled}
      className={"hover:cursor-pointer rounded-xl"}
      variant={"ghost"}
    >
      {children}
    </Button>
  );
}
