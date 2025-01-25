// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [input, setInput] = useState('');

//   const addTask = () => {
//     if (input.trim()) {
//       setTasks([...tasks, { text: input, completed: false }]);
//       setInput('');
//     }
//   };

//   const toggleTask = (index) => {
//     const newTasks = tasks.map((task, i) => 
//       i === index ? { ...task, completed: !task.completed } : task
//     );
//     setTasks(newTasks);
//   };

//   const deleteTask = (index) => {
//     const newTasks = tasks.filter((_, i) => i !== index);
//     setTasks(newTasks);
//   };

//   return (
//     <div className="app">
//       <header className="header">
//         <h1>To-Do List</h1>
//       </header>
//       <div className="input-container">
//         <input 
//           type="text" 
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Add a new task"
//         />
//         <button onClick={addTask}>Add</button>
//       </div>
//       <ul className="task-list">
//         {tasks.map((task, index) => (
//           <li key={index} className={task.completed ? 'task completed' : 'task'}>
//             <span onClick={() => toggleTask(index)}>{task.text}</span>
//             <button onClick={() => deleteTask(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;





import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editInput, setEditInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTask = (index) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditInput(tasks[index].text);
  };

  const saveEdit = () => {
    const newTasks = tasks.map((task, i) => 
      i === editingIndex ? { ...task, text: editInput } : task
    );
    setTasks(newTasks);
    setEditingIndex(null);
    setEditInput('');
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setEditInput('');
  };

  return (
    <div className="app">
      <header className="header">
        <h1>To-Do List</h1>
      </header>
      <div className="input-container">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'task completed' : 'task'}>
            {editingIndex === index ? (
              <div className="edit-container">
                <input 
                  type="text" 
                  value={editInput}
                  onChange={(e) => setEditInput(e.target.value)}
                />
                <button onClick={saveEdit}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </div>
            ) : (
              <>
                <span onClick={() => toggleTask(index)}>{task.text}</span>
                <button onClick={() => startEditing(index)}>Edit</button>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;



