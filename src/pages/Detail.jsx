import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Detail() {
  const { selectedTodo } = useSelector((state) => state.todo);
  const navigate = useNavigate();

  if (!selectedTodo)
    return (
      <p style={{ padding: 20 }}>
        Tidak ada todo dipilih.{" "}
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
