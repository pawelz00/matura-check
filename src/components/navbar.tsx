import { Button } from "@/components/ui/button.tsx";
import { Link } from "@tanstack/react-router";

export default function Navbar() {
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
          <ButtonNav href={"/"}>Podstawa</ButtonNav>
          <ButtonNav href={"/questions"}>Ustna</ButtonNav>
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
}: {
  children: string;
  href: string;
  disabled?: boolean;
}) {
  return (
    <Link to={href}>
      <Button
        disabled={disabled}
        className={"hover:cursor-pointer rounded-xl"}
        variant={"ghost"}
      >
        {children}
      </Button>
    </Link>
  );
}
