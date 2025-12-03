import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateVotes, selectTodo } from "../redux/todoSlice";
import { selectUser } from "../redux/voteSlice";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { todos } = useSelector((state) => state.todo);
  const { users, currentUser } = useSelector((state) => state.vote);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openDetail = (id) => {
    dispatch(selectTodo(id));
    navigate(`/detail/${id}`);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Todo List</h2>

      <label>Pilih User: </label>
      <select
        value={currentUser || ""}
        onChange={(e) => dispatch(selectUser(e.target.value))}
      >
        <option value="">-- pilih user --</option>
        {users.map((u, i) => (
          <option key={i} value={u}>
            {u}
          </option>
        ))}
      </select>

      <ul style={{ marginTop: 20 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              marginBottom: 10,
              cursor: "pointer",
            }}
            onClick={() => openDetail(todo.id)}
          >
            <b>{todo.title}</b> — Votes: {todo.votes}
            <button
              style={{ marginLeft: 10 }}
              onClick={(e) => {
                e.stopPropagation();
                dispatch(updateVotes(todo.id));
              }}
            >
              Vote
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
