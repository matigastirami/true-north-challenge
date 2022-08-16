import { render, screen } from "@testing-library/react";
import Task from "../task";



test("should render task card", () => {
  const inputTask = {
    uuid: "test",
    title: "test",
    status: "pending",
  };

  const { container } = render(<Task taskInfo={inputTask}/>);

  const card = container.getElementsByClassName('card');

  expect(card).toBeDefined();
});

test("should have the correct info", async () => {
  const inputTask = {
    uuid: "test-uuid",
    title: "test-title",
    status: "test-status",
  };

  render(<Task taskInfo={inputTask}/>)

  const uuid = await screen.findByText(`UUID - ${inputTask.uuid}`);
  expect(uuid).toHaveClass('card-subtitle');

  const title = await screen.findByText(inputTask.title);
  expect(title).toHaveClass('card-title');

  const status = await screen.findByText(`Status: ${inputTask.status}`);
  expect(status).toHaveClass('card-text');
});
