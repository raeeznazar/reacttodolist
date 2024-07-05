import React from 'react';
import Input from './components/Input.jsx';
import ToDoListtable from './components/ToDoListtable.jsx';
function App() {
  return (
    <>
      <div className="min-h-screen bg-custom-gradient"
        style={{ backgroundColor: '#6190E8' }}>

        <div className="container">

          <div className='pt-2 pb-2'>
            <h3 className='h3-custom-font text-6xl mt-2 text-center text-slate-50'>Simple todo list</h3>
          </div>
          <ToDoListtable />
        </div>


      </div>

    </>
  );
}


export default App;
