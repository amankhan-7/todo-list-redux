import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, updateTodo, setTodos } from '../features/todo/todoSlice';

function Todos() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const [isTodoEditable, setIsTodoEditable] = useState(null); // Store the editable todo's ID
    const [todoMsg, setTodoMsg] = useState(''); // Store the current text of the editable todo

    const editTodo = () => {
        if (isTodoEditable !== null) {
            dispatch(updateTodo({ id: isTodoEditable, text: todoMsg }));
            setIsTodoEditable(null); // Exit edit mode
        }
    };

    // Fetching todos from API
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch('');
                const data = await response.json();
                dispatch(setTodos(data)); // Assuming setTodos action stores fetched todos in the Redux state
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };

        fetchTodos();
    }, [dispatch]);

    // Log the todos state to see if it's updating correctly
    console.log('Todos state:', todos);

    return (
        <>
            <div className="text-lg font-black mt-10 ml-6">All Todos</div>
            <ul className="list-none ml-4 mr-4">
                {todos.map((todo) => (
                    <li className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded" key={todo.id}>
                        {isTodoEditable === todo.id ? (
                            // Editable input field
                            <input
                                type="text"
                                value={todoMsg}
                                onChange={(e) => setTodoMsg(e.target.value)}
                                className="bg-gray-800 text-white rounded border border-gray-700 focus:outline-none py-2 px-3"
                            />
                        ) : (
                            // Display todo text
                            <div className="text-white">{todo.text}</div>
                        )}
                    <div>
                             {/* Edit/Save Button */}
                        <button
                            className="text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none mr-3 hover:bg-indigo-600 rounded text-md"
                            onClick={() => {
                                if (isTodoEditable === todo.id) {
                                    editTodo();
                                } else {
                                    setIsTodoEditable(todo.id);
                                    setTodoMsg(todo.text); // Initialize with current text
                                }
                            }}
                        >
                            {isTodoEditable === todo.id ? "📁 Save" : "✏️ Edit"}
                        </button>
                       

                        {/* Delete Button */}
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                        >
                            Delete
                        </button>
                    </div>
                       
                        
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todos;
