


import Addtodo from "./components/Addtodo";
import Appname from "./components/Appname";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() { 
  const todoItems = [
    {
    name : "buy milk",
    dueDate: "04/08/2024"
   },
    {
    name : "goto Collgae",
    dueDate: "08/12/2124"
   },
    {
    name : "I am loving it",
    dueDate: "03/09/2022"
   }
]
  return (
    <>
      
   



    <center className="todo-container">
      <Appname />
      <Addtodo />
      <TodoItems todoItem={todoItems}/>
      
    </center>
       

       
  
 
  
    </>
  );
}

export default App;
