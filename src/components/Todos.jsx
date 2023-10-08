import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-4">Todos</h2>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="bg-gray-700 text-white rounded-md p-4 mb-2 flex justify-between items-center"
        >
          <p className="text-sm">{todo.text}</p>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
