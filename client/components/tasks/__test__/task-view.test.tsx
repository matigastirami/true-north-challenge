import { fireEvent, getByText, render, screen } from "@testing-library/react";
import TaskView from "../task-view";

test("should be visible", () => {
  const onClose = () => {
    return "test-on-close";
  };
  const taskInput = {
    uuid: "test",
    title: "test",
    status: "pending",
  };

  const { getByText } = render(
    <TaskView show={true} onClose={onClose} task={taskInput} />
  );

  expect(getByText("Task detail - #test")).toBeTruthy();
  expect(getByText("Title: test")).toBeTruthy();
  expect(getByText("Status: pending")).toBeTruthy();
});

test("should not be visible", () => {
  const onClose = () => {
    return "test-on-close";
  };
  const taskInput = {
    uuid: "test",
    title: "test",
    status: "pending",
  };

  const { queryByText } = render(
    <TaskView show={false} onClose={onClose} task={taskInput} />
  );

  const found = queryByText('Task detail - #test');

  expect(found).toBeNull();
});

test("should close the modal", () => {
    const onClose = jest.fn();
    const taskInput = {
      uuid: "test",
      title: "test",
      status: "pending",
    };
  
    const { getByText } = render(
      <TaskView show={true} onClose={onClose} task={taskInput} />
    );
  
    expect(getByText("Task detail - #test")).toBeTruthy();

    fireEvent.click(getByText(/close/i))

    expect(onClose).toHaveBeenCalledTimes(1)
  });
