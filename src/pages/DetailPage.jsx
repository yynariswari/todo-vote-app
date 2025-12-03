import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

export default function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const todos = useSelector((state) => state.todo.todos);

  // Cari todo berdasarkan ID dari URL
  const todo = todos.find((item) => item.id.toString() === id.toString());

  if (!todo)
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
        <b>ID:</b> {todo.id}
      </p>
      <p>
        <b>Title:</b> {todo.title}
      </p>
      <p>
        <b>Votes:</b> {todo.votes}
      </p>

      <button onClick={() => navigate("/")}>Kembali</button>
    </div>
  );
}
