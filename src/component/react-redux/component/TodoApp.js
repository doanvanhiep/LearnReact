import { useState } from "react"

const TodoApp = ({ todos,todos1,addTodo,addTodo1}) => {
  const [text, setText] = useState("");
  const [text1, setText1] = useState(false);
  if(text1){
    todos=todos1;
    setText1(false)
    
  }
  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
      />
      <button onClick={()=>addTodo(text)}>Add</button>
      <button onClick={()=>{addTodo1(text);setText1(true)}}>Clear</button>
      <ul>
        { todos.map((todo) => (
            <li>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoApp