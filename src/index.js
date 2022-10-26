import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import './i18next';
import App from "./App";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Suspense fallback={(<div>Loading</div>)}>
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);

