import React from "react";

import { useQuery, useMutation } from "@apollo/react-hooks";

import Todo from "../models/Todo";
import GET_TODOS from "../queries/todos";
import UPDATE_TODO from "../mutations/updateTodo";
import REMOVE_TODO from "../mutations/removeTodo";
import { TodoListItem } from "../components/TodoListItem";

function Todos() {
  const { loading, error, data } = useQuery(GET_TODOS);
  const [updateTodo] = useMutation(UPDATE_TODO);
  const [removeTodo] = useMutation(REMOVE_TODO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.todos.map(({ id, title }: Todo) => {
    let input: HTMLInputElement | null;

    return (
      <div key={id}>
        <TodoListItem id={id} title={title} />
        <span
          onClick={(e) => {
            removeTodo({ variables: { id } });
          }}
        >
          Remove
        </span>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateTodo({ variables: { id, title: input!.value } });

            input!.value = "";
          }}
        >
          <input
            ref={(node) => {
              input = node;
            }}
          />
          <button type="submit">Update Todo</button>
        </form>
      </div>
    );
  });
}

export default Todos;
