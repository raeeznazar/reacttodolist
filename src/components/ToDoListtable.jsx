import React, { useState } from 'react'
import 'boxicons/css/boxicons.min.css';

function ToDoListtable() {

    const [todo, setTodo] = useState({ name: "", done: false })
    const [todos, setTodos] = useState([])
    const completedtodos = todos.filter((todo) => todo.done).length
    const totalTodos = todos.length

    function handleSubmit(e) {
        e.preventDefault()
        console.log(todo)
        if (todo.name != '') {
            setTodos([...todos, todo])
            setTodo({ name: "", done: false })


        }
    }

    function handleDelete(item) {
        console.log('delete Btn clcik', item)
        setTodos(todos.filter((todo) => todo != item))
    }

    function handleStrike(name) {
        setTodos(todos.map((todo) => todo.name === name ? { ...todo, done: !todo.done } : todo))
        console.log(todos)

    }

    const sortedTodos = todos.slice().sort((a, b) => Number(a.done) - Number(b.done))



    return (
        <>
            <div className='container'>

                <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">

                    <form className="w-full max-w-sm mx-auto px-4 py-2" onSubmit={handleSubmit}>
                        <div className="flex items-center border-b-2 border-teal-500 py-2">
                            <input
                                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                onChange={(e) => setTodo({ ...todo, name: e.target.value, done: false })} value={todo.name} type="text" placeholder="Add a task" />
                            <button
                                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                                type="submit">
                                Add
                            </button>
                        </div>
                    </form>

                    <ul className="divide-y divide-gray-200 px-4 ">
                        {sortedTodos.map((item) => (
                            <li className="py-4">
                                <div className="flex justify-between items-center">
                                    {/* <label for="todo1" className="ml-3 flex justify-between text-gray-900"> */}

                                    <div onClick={() => handleStrike(item.name)} ><span className={item.done ? "completed text-lg font-medium" : "text-lg font-medium"}>{item.name}</span></div>
                                    <div><i className='bx bxs-x-circle text-xl text-end' onClick={() => handleDelete(item)}></i></div>

                                </div>
                            </li>
                        ))}

                    </ul>

                    <div className="px-4 py-2 flex justify-between items-center">
                        <div> <h4>Total todo - {totalTodos}</h4></div>
                        <div><h4 className='text-emerald-900'>Completed - {completedtodos}</h4></div>
                    </div>
                </div>



            </div>
        </>
    )
}

export default ToDoListtable