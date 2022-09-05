import { render, screen } from "@testing-library/react";
import TaskList from "../task-list";

test("should render 2 tasks", () => {
  const inputTasks = [
    {
      uuid: "task-1",
      title: "title-1",
      status: "status-1",
    },
    {
      uuid: "task-2",
      title: "title-2",
      status: "status-2",
    },
  ];
  const { container } = render(<TaskList tasks={inputTasks} />);

  const cards = container.querySelectorAll(".card");

  expect(cards).toBeDefined();
  expect(cards).toHaveLength(2);
});
