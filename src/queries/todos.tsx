import gql from "graphql-tag";

const GET_TODOS = gql`
  query Todos {
    todos {
      id
      title
    }
  }
`;

export default GET_TODOS;
