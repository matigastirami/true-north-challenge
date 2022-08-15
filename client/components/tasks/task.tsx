import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import TaskView from "./task-view";

interface ITaskProps {
  taskInfo: {
    uuid: string;
    title: string;
    status: string;
  };
}

function Task(props: ITaskProps) {
  const {
    taskInfo: { uuid, title, status },
  } = props;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const shortenTitle = (title: string) => {
    if (title.length > 22) {
      return `${title.substring(0, 22)}...`;
    }

    return title;
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title title={title}>{shortenTitle(title)}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{`UUID - ${uuid}`}</Card.Subtitle>
          <Card.Text>{`Status: ${status}`}</Card.Text>
          <Button variant="primary" onClick={handleShow}>
            Open
          </Button>
        </Card.Body>
      </Card>
      <TaskView 
        show={show}
        task={{ uuid, title, status }}
        onClose={handleClose}
      />
    </>
  );
}

export default Task;
