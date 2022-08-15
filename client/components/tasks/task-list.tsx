import { useState } from "react";
import { Col } from "react-bootstrap";
import Task from "./task";

const styles = {
  container: {
    paddingTop: 10
  }
}

function TaskList(props) {
  const { tasks } = props;

  const [taskViewOpen, setTaskViewOpen] = useState(false);

  return (
    <>
      {(tasks ?? []).map((task: any) => (
        <Col 
          style={styles.container}
          key={`task-${task.uuid}`} 
          sm={12}
          md={3}
          lg={4}
          xl={4}
          xxl={4}
        >
          <Task taskInfo={task}/>
        </Col>
      ))}
    </>
  );
}

export default TaskList;
