import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

export default function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todo.todos);

  const selectedTodo = todos.find((item) => String(item.id) === String(id));

  if (!selectedTodo)
    return (
      <p style={{ padding: 20 }}>
        Todo tidak ditemukan.{" "}
        <button onClick={() => navigate("/")}>Back</button>
      </p>
    );

  return (
    <div style={{ padding: 20 }}>
      <h2>Detail Todo</h2>
      <p>
        <b>ID:</b> {selectedTodo.id}
      </p>
      <p>
        <b>Title:</b> {selectedTodo.title}
      </p>
      <p>
        <b>Votes:</b> {selectedTodo.votes}
      </p>

      <button onClick={() => navigate("/")}>Kembali</button>
    </div>
  );
}
