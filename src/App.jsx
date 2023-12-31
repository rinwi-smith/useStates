// eslint-disable-next-line no-unused-vars
import React from "react";
import './App.css'
import Counter from './Components/Counter'
import Input from "./Components/Input";
import Toggle from "./Components/Toggle";
import TodoList from "./Components/TodoList";
import WeatherApp from "./Components/Weather";

function App() {
  
  return (
    <>
    <h1>Learning React (with the help of TailwindCSS) </h1>
    <Counter />
    <Input />
    <Toggle />
    <TodoList />
    <WeatherApp />
  </>
  )
}

export default App;
