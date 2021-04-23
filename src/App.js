

import React , {useState} from "react";
import ToDoForm from "./Components/ToDoForm"; 
import Header from "./Components/Header";
import ToDoList from "./Components/ToDoList";
import "./App.css"

function App() {

  const [input, setInput] = useState("") ;
  const [todos, setTodos] = useState([]) ;
  const [editTodo, setEditTodo] = useState(null) ;

  return (
    <div>
    
    <div className="mainDiv">
    <Header/>
      <ToDoForm 
       input={input}
       setInput={setInput}
       todos={todos}
       setTodos={setTodos}
       editTodo={editTodo}
       setEditTodo={setEditTodo}
     />
     <ToDoList 
       todos={todos}
       setTodos={setTodos}
       setEditTodo={setEditTodo}
     />
    </div>
    </div>
  );
}

export default App;
