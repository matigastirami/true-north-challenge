import type { NextPage } from "next";
import { SetStateAction, useEffect, useState } from "react";

import { Container, Row } from "react-bootstrap";
import NavBar from "../components/navbar";
import SearchForm from "../components/search/search";
import TaskList from "../components/tasks/task-list";
import TaskService from "../services/task.service";

const Home: NextPage = () => {
  const [tasks, setTasks] = useState([]);
  // TODO: Implement text field to enter the quantity manually
  const [quantity, setQuantity] = useState(3);

  useEffect(() => {
    TaskService.fetchTasks(quantity)
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => alert(err.message));
  }, [quantity]);

  const handleSetQuantity = (qty: SetStateAction<number>) => {
    setQuantity(qty);
  }

  return (
    <Container>
      <NavBar />
      <Row>
        <SearchForm 
          helpText={'Type a number between 1 and 100'}
          defaultValue={3}
          label={'Tasks quantity'}
          onChangeCallback={handleSetQuantity}
        />
      </Row>
      <Row>
        <TaskList tasks={tasks} />
      </Row>
    </Container>
  );
};

export default Home;
