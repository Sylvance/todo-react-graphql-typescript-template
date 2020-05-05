import gql from "graphql-tag";

const CREATE_TODO = gql`
  mutation createTodo($title: String!) {
    createTodo(input: { title: $title }) {
      todo {
        id
        title
      }
    }
  }
`;

export default CREATE_TODO;
