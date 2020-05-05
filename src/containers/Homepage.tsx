import React from "react";

import { useMutation } from "@apollo/react-hooks";

import CREATE_TODO from "../mutations/createTodo";
import Todos from "./Todo";

function Homepage() {
  const [createTodo] = useMutation(CREATE_TODO);
  let input: HTMLInputElement | null;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createTodo({ variables: { title: input!.value } });

          input!.value = "";
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">Create Todo</button>
      </form>
      <Todos />
    </div>
  );
}

export default Homepage;
