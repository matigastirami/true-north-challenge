import React, { useContext, useEffect, useState } from "react";
import { Alert, ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import TaskService from "../../services/task.service";

interface ITaskViewProps {
  show: boolean;
  task: any;
  onClose: any;
}

function TaskView(props: ITaskViewProps) {
  const { task, show, onClose } = props;

  const [success, setSuccess] = useState(false);

  const handleCompleteTask = async () => {
    try {
      const res = await TaskService.completeTask(task.uuid);
      const data = await res.json();

      if (!data.msg) {
        throw new Error("There was an error trying to update the task");
      }

      setSuccess(true);
      task.status = 'done';
      
    } catch (err) {
      alert(err.message);
    }
  };

  const showSuccessMessage = () => {
    return (
      success && <Alert variant={"success"}>Task successfully updated</Alert>
    );
  };

  const handleModalClose = () => {
    setSuccess(false);
    onClose();
  }

  return (
    <>
      <Modal show={show} size="lg" onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Task detail - #{task.uuid}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>Title: {task.title}</ListGroup.Item>
            <ListGroup.Item>Status: {task.status}</ListGroup.Item>
          </ListGroup>
          {showSuccessMessage()}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button disabled={success} variant="primary" onClick={handleCompleteTask}>
            Complete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TaskView;
