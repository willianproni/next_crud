import { read } from "@db-crud/crud";

function getTodos() {
  const todosList = read();

  return todosList;
}

export const todoController = {
  getTodos,
};
