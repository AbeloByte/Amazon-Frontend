// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import "./App.css";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Routering from "./Router";
import { DataProvider } from "./components/DataProvider/DataProvider";
import  reducer,  {initialState } from "./Utility/reducer";
function App() {
  return (
    <>
      <BrowserRouter>
        <DataProvider  reducer={reducer} initialState={initialState} >
          <Routering />
        </DataProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
