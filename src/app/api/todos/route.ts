import { todoController } from "@/app/controllers/todo";

export async function GET() {
  try {
    const todos = todoController.getTodos();

    return Response.json({
      todos: todos,
    });
  } catch {
    return Response.json({ error: "Erro seach database" }, { status: 400 });
  }
}
