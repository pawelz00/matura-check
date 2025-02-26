import { Button } from "@/components/ui/button.tsx";
import { Link, useLocation } from "@tanstack/react-router";
import { cn } from "@/lib/utils.ts";

export default function Navbar() {
  const location = useLocation();

  return (
    <div
      className={
        "flex flex-col gap-y-6 w-fit items-center mx-auto rounded-xl py-6 sticky top-0"
      }
    >
      <nav>
        <ul
          className={
            "flex justify-between items-center bg-white px-2 h-12 rounded-2xl gap-x-1 border border-muted"
          }
        >
          <ButtonNav href={"/"} active={location.pathname === "/"}>
            Podstawa
          </ButtonNav>
          <ButtonNav
            href={"/questions"}
            active={location.pathname === "/questions"}
          >
            Ustna
          </ButtonNav>
          <ButtonNav href={"/"} disabled>
            Rozszerzenie
          </ButtonNav>
        </ul>
      </nav>
    </div>
  );
}

function ButtonNav({
  children,
  href,
  disabled = false,
  active = false,
}: {
  children: string;
  href: string;
  disabled?: boolean;
  active?: boolean;
}) {
  return (
    <Link to={href}>
      <Button
        disabled={disabled}
        className={cn(
          "hover:cursor-pointer rounded-xl",
          active && "bg-accent text-accent-foreground",
        )}
        variant={"ghost"}
      >
        {children}
      </Button>
    </Link>
  );
}
