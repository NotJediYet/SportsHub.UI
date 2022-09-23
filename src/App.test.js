import { render } from '@testing-library/react';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {ContextProvider} from "./components/ContextProvider/ContextProvider";
import React from "react";

test('Renders App Component', () => {

  render(
      <BrowserRouter>
          <ContextProvider>
              <App />
          </ContextProvider>
      </BrowserRouter>
  );
});
