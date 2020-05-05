import gql from "graphql-tag";

const GET_TODO = gql`
  query Todo($id: ID!) {
    todo(input: { id: $id }) {
      id
      title
    }
  }
`;

export default GET_TODO;
