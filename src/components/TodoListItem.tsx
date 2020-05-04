import React from "react"; // we need this to make JSX compile

import Todo from "../models/Todo";

export const TodoListItem = ({ id, title }: Todo) => (
  <aside>
    <h2>{id}</h2>
    <p>{title}</p>
  </aside>
);

export default TodoListItem;
