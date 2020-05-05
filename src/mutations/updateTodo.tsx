import gql from "graphql-tag";

const UPDATE_TODO = gql`
  mutation updateTodo($id: ID!, $title: String!) {
    updateTodo(input: { id: $id, title: $title }) {
      todo {
        id
        title
      }
    }
  }
`;

export default UPDATE_TODO;
