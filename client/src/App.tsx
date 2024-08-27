import { Container, Stack } from "@chakra-ui/react";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";

export const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:3000/api" : "/api";
function App() {
  return (
    <Stack h="100vh">
      <Navbar />
      <Container>
        <TodoForm />
        <TodoList />
      </Container>
    </Stack>
  );
}

export default App;
