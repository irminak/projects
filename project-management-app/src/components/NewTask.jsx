import React, { useState } from 'react';

function NewTask({ onAdd }) {
    const [enteredTask, setEnteredTask] = useState('');

    function handleChange({ target }) {
        setEnteredTask(target.value);
    }
    function handleClick() {
        onAdd(enteredTask);
        setEnteredTask('');
    }

    return (
        <div className='flex items-center gap-4'>
            <input
                onChange={handleChange}
                type='text'
                className='w-64 px-2 py-1 rounded-sm bg-stone-200'
                value={enteredTask}
            />
            <button
                onClick={handleClick}
                className='text-stone-700 hover:text-stone-950'
            >
                Add Task
            </button>
        </div>
    );
}

export default NewTask;
