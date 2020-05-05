import React from "react"; // we need this to make JSX compile

import Todo from "../models/Todo";

export const TodoListItem = ({ id, title }: Todo) => (
  <aside>
    <h4>{id}</h4>
    <p>{title}</p>
  </aside>
);

export default TodoListItem;
