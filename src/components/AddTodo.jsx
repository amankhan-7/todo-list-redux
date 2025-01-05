import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();

        // Ensure valid input
        if (input.trim()) {
            dispatch(addTodo({ text: input.trim() })); // Dispatch the action to add a new todo
            console.log('Todo added:', input.trim()); // Log the added todo

            setInput(''); // Clear the input field after adding
        } else {
            alert('Please enter a valid todo!');
        }
    };

    return (
        <div className="mt-12 bg-[#37B7C3] w-11/12 h-48 ml-14 rounded-md pt-4">
            <form onSubmit={addTodoHandler} className="flex flex-col items-center space-y-4">
                <h1 className="text-black text-lg">Enter the tasks you want to manage in your daily life</h1>
                <input
                    type="text"
                    className="bg-gray-800 rounded border w-1/3 border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 transition-colors duration-200 ease-in-out"
                    placeholder="Enter a todo..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Add Todo
                </button>
            </form>
        </div>
    );
}

export default AddTodo;
