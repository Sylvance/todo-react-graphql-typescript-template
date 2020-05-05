import gql from "graphql-tag";

const REMOVE_TODO = gql`
  mutation removeTodo($id: ID!) {
    removeTodo(input: { id: $id }) {
      todo {
        id
        title
      }
    }
  }
`;

export default REMOVE_TODO;
