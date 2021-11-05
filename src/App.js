import { useStore, actions } from './store'
import './App.css';
import { useRef } from 'react';
function App() {

  const [state, dispatch] = useStore()

  const { todos, todoInput } = state 
  const inputElement = useRef()

  const handleSubmit = () => {
    if(todoInput.trim()) {
      dispatch(actions.addTodo(todoInput))
      dispatch(actions.setTodoInput(''))

      inputElement.current.focus()
    } 
  }

  return (
    <div className="App">
      <input 
        value={todoInput}
        placeholder="Enter todos..."
        ref={inputElement}
        onChange={e => {
          dispatch(actions.setTodoInput(e.target.value))
        }}
      />
      <button onClick={handleSubmit}>Add todo</button>

      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </div>
  );
}

export default App;
