import gql from "graphql-tag";

const GET_TODOS = gql`
  {
    todos {
      id
      title
    }
  }
`;

export default GET_TODOS;
