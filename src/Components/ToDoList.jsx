import React from "react";
import "./ToDoList.css"
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


const ToDoList = ({todos, setTodos , setEditTodo}) => {


   const handleDelete = ({id}) =>
   {
      setTodos(todos.filter((todo) => todo.id !== id  ));
   };

   const handleComplete = (todo) =>{
    setTodos(
        todos.map((item) => {
           if(item.id===todo.id){
               return {...item, completed: !item.completed}
           }
           return item;
        }))
        
    
   };


   const handleEdit = ({id}) => {
       const findTodo = todos.find((todo) => todo.id === id);
       setEditTodo(findTodo);
   }

    return(
        <div> 
        {todos.map((todo) => {
             return(
            
           <li className="item" 
               key={todo.id}>
             <input 
              className= {todo.completed ? "inputItemcompleted" : "inputItem"}
              type="text" 
              value={todo.title} 
              onChange={(event)=> event.preventDefault()}
            />
           
            <input checked={todos.completed} 
             type="checkbox" 
             className="checkBox"
             onChange={() => handleComplete (todo)}
             />
            
            
           <EditIcon onClick = {() => handleEdit(todo)} className="editButton"/>
           <DeleteIcon onClick={()=> handleDelete(todo)} className="deleteButton" />
  
           </li>
             )
        })}
       
        </div>
    );
}

export default ToDoList ;