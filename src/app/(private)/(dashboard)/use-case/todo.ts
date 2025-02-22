async function getTodos() {
  return fetch("/api/todos").then(async (response) => {
    const todoString = await response.text();
    const todos = JSON.parse(todoString).todos;

    return todos;
  });
}

export const useCaseTodo = {
  getTodos,
};
