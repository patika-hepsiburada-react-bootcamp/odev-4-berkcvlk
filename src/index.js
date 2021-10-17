import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";

import { apolloClient } from "client";
import App from "./App";
import "./global.css";

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
