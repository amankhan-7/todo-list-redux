import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTodos } from '../features/todo/todoSlice';

function Editable() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const [isTodoEditable, setIsTodoEditable] = useState(null); // Store the editable todo's ID
    const [todoMsg, setTodoMsg] = useState(''); // Store the current text of the editable todo

    
    // Fetching todos from API
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos');
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
                       
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Editable;