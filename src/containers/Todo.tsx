import React from "react";

import { useQuery } from "@apollo/react-hooks";

import Todo from "../models/Todo";
import GET_TODOS from "../queries/todos";
import { TodoListItem } from "../components/TodoListItem";

function Todos() {
  const { loading, error, data } = useQuery(GET_TODOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.todos.map(({ id, title }: Todo) => (
    <div key={id}>
      <TodoListItem id={id} title={title} />
    </div>
  ));
}

export default Todos;
