"use client";

import { useEffect, useState } from "react";
import { useCaseTodo } from "./use-case/todo";

interface todosProps {
  id: string;
  date: string;
  content: string;
  done: boolean;
}

export default function Dashboard() {
  const [todoList, setTodoList] = useState<todosProps[]>([]);

  useEffect(() => {
    useCaseTodo.getTodos().then((todos) => {
      setTodoList(todos);
    });
  }, []);

  return (
    <main className="w-full max-w-[1440px] mx-auto">
      <div className="bg-green-400 p-2">
        <h1>Digite sua Todo</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <input
            placeholder="Eu preciso fazer..."
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={function newTodoHandler(event) {
              console.log(event.target.value);
            }}
          />
        </form>
      </div>

      <div className="flex justify-center bg-blue-400 p-4">
        <div>
          <form>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              type="search"
              placeholder="Filtrar lista..."
              onChange={() => {}}
            />
          </form>

          <div>
            <table>
              <thead>
                <tr>
                  <th align="left">ID</th>
                  <th align="left" className="px6 py-3">
                    Conteúdo
                  </th>
                  <th className="px6 py-3">Concluido</th>
                </tr>
              </thead>

              <tbody>
                {todoList.map((todo) => {
                  return (
                    <tr key={todo.id}>
                      <th scope="how">{todo.id.substring(0, 4)}</th>
                      <th scope="how">{todo.content}</th>
                      <td align="center" className="px-6 py-4">
                        <input type="checkbox" />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
