import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, deleteTask } from '../features/task/taskSlice';
const Task = () => {

  const [todo,setTodo] = useState("");

  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.taskReducer.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(todo));
    setTodo("");
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">Enter Todo</label>
      <input type="text" name="todo" id="todo" value={todo} onChange={(e) => setTodo(e.target.value)}/>
      <button type='submit'>Add Todo</button>
    </form>

    {
      tasks.map((todo,ind) => {
        return <h2 key={ind}>{todo} <button type="button" onClick={() => dispatch(deleteTask(ind)) }>Remove</button></h2>
      })
    }
    </>
  )
}

export default Task;