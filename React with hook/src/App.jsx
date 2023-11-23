import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import NavBar from "./component/navBar/nav.jsx";
import MyComponent from "./component/Example/myComponent.jsx";
import ListTodo from "./Todo/Component/ListTodo";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <ListTodo />
      {/* <MyComponent /> */}
    </>
  );
}

export default App;
