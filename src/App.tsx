import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

// import logo from "./logo.svg";
import "./App.css";
import Todos from "./containers/Todo";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <div>
          <h2>Todo app</h2>
          <Todos />
        </div>
      </ApolloProvider>
    </div>
  );
}

export default App;
