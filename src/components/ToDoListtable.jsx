import React, { useState } from 'react'
import 'boxicons/css/boxicons.min.css';

function ToDoListtable() {

    const [todo, setTodo] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
    }
    return (
        <>

            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
                <div className="px-4 py-2">
                    {/* <h1 className="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1> */}
                </div>
                <form className="w-full max-w-sm mx-auto px-4 py-2" onSubmit={handleSubmit}>
                    <div className="flex items-center border-b-2 border-teal-500 py-2">
                        <input
                            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            onChange={(e) => setTodo(e.target.value)} value={todo} type="text" placeholder="Add a task" />
                        <button
                            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                            type="submit">
                            Add
                        </button>
                    </div>
                </form>
                <ul className="divide-y divide-gray-200 px-4 pb-4">
                    <li classNameName="py-4">
                        <div className="flex justify-between items-center">
                            {/* <label for="todo1" className="ml-3 flex justify-between text-gray-900"> */}
                            <div className="text-lg font-medium">Time sheet pdate</div>
                            <div><i className='bx bxs-x-circle text-xl text-end'></i></div>
                            {/* </label> */}
                        </div>
                    </li>


                </ul>
                <div className="px-4 py-2 flex justify-between items-center">
                    <div> <h4>Total todo</h4></div>
                    <div><h4 className='text-emerald-900'>Completed</h4></div>
                </div>
            </div>



        </>
    )
}

export default ToDoListtable