import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/questions")({
  component: Questions,
});

function Questions() {
  return <div>Hello "/questions"!</div>;
}
