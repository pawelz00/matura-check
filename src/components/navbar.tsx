import { Button } from "@/components/ui/button.tsx";
import { Link, useLocation } from "@tanstack/react-router";
import { cn } from "@/lib/utils.ts";

export default function Navbar() {
  const location = useLocation();

  return (
    <div className={"w-fit mx-auto py-6 sticky top-0 z-[99999]"}>
      <nav>
        <ul
          className={
            "flex justify-between items-center bg-card px-1.5 h-12 rounded-full gap-x-1.5 border border-dotted"
          }
        >
          <ButtonNav
            title={"Podstawa"}
            href={"/"}
            active={location.pathname === "/"}
          />
          <ButtonNav
            title={"Ustna"}
            href={"/questions"}
            active={location.pathname === "/questions"}
          />
          <ButtonNav title={"Rozszerzenie"} href={"/"} disabled />
        </ul>
      </nav>
    </div>
  );
}

function ButtonNav({
  title,
  href,
  disabled = false,
  active = false,
}: {
  title: string;
  href: string;
  disabled?: boolean;
  active?: boolean;
}) {
  return (
    <Link to={href}>
      <Button
        disabled={disabled}
        className={cn(
          "hover:cursor-pointer rounded-full",
          active && "bg-primary text-primary-foreground",
        )}
        variant={"ghost"}
      >
        {title}
      </Button>
    </Link>
  );
}
