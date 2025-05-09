import { useSelector } from "react-redux"
import AddForm from "./AddForm"
import { useDispatch } from "react-redux"
import { deleteTodo, markAsDone } from "../features/todo/todoSlice"

export default function Todo() {
    const todos = useSelector((state) => state.todos)
    console.log(todos)

    const dispatch = useDispatch();
    const clickHandler = (id) => {
        console.log("delete", id)
        dispatch(deleteTodo(id))
    }

    const doneHandler = (id) => {
        dispatch(markAsDone(id))
    }
    return (
        <>
            <AddForm />
            <h2>Todo List</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={todo.markAsDone ? { textDecorationLine: "line-through" } : {}}>{todo.task}
                        <button onClick={() => clickHandler(todo.id)}>Delete</button>
                        <button onClick={() => doneHandler(todo.id)}>Mark As Done</button>
                    </li>
                ))}
            </ul>
        </>
    )
}