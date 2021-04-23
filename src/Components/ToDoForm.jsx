 import React, {useEffect} from "react";
 import "./ToDoForm.css";


const ToDoForm = ({input, setInput, todos, setTodos, editTodo, setEditTodo }) => {

    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) => 
           todo.id === id ? {title, id, completed} :  todo
        )
        setTodos(newTodo) ;
        setEditTodo("") ;

    }




     useEffect(() => {
         if(editTodo){
             setInput(editTodo.title);
         }else {
            setInput(""); 
         }
     }, [setInput, editTodo]);

    const taskInputHandler = (event) => {
         setInput(event.target.value) ;
        
    }

    const addTaskHandler = (event) => {
        event.preventDefault();
        
            if(input !== "") {
                if(!editTodo) {
                setTodos([...todos, 
                    {id: Date.now() , 
                     title: input, 
                     completed: false 
                }]);


        } else{
            updateTodo(input, editTodo.id, editTodo.completed )
        }
        
    }
        setInput("") ;
   
    };




   return (
       <div>
           
        <form className="formDiv" onSubmit={addTaskHandler}>
             
             <input type="text" 
             placeholder="Enter task"
             className="formTask"
             onChange = {taskInputHandler}
             value = {input}
             />
             <button type="submit" className="formButton">
             +
             </button>
         </form>   
      
       </div>
   ) 
}

export default ToDoForm ;