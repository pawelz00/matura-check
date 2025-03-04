import { Button } from "@/components/ui/button.tsx";
import { Link, useLocation } from "@tanstack/react-router";
import { cn } from "@/lib/utils.ts";

export default function Navbar() {
  const location = useLocation();

  return (
    <div className={"w-full bg-background mx-auto py-6 sticky top-0 z-[49]"}>
      <nav
        className={
          "px-2 md:px-0 md:w-3/4 xl:2/3 2xl:w-1/2 relative mx-auto flex items-center justify-between"
        }
      >
        <div className={"flex items-center gap-3 absolute md:left-0 left-4"}>
          <img
            alt={"Logo"}
            src={"/logo.svg"}
            width={45}
            height={45}
            className={"border rounded-full"}
          />
          <h1 className={"text-xl lg:text-2xl tracking-wide hidden lg:block"}>
            Matura 2025
          </h1>
        </div>
        <ul
          className={
            "flex justify-between mx-auto items-center bg-card px-1.5 h-12 rounded-full gap-x-1.5 border border-dotted"
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
