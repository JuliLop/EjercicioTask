import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";


/* const defaultTodos = [
   { text: 'Preparar desayuno', completed: true},
   { text: 'Preparar almuerzo', completed: true},
   { text: 'Preparar cena', completed: false},
   { text: 'Preparar Merienda', completed: false}

]; */


function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
