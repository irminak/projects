import React, { useRef } from 'react';
import Input from './Input';
import Modal from './Modal';

function NewProject({ onAdd, onCancel }) {
    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDate = dueDate.current.value;

        if (
            enteredTitle.trim() === '' ||
            enteredDescription === '' ||
            enteredDate === ''
        ) {
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDate,
        });
    }

    return (
        <>
            <Modal
                ref={modal}
                buttonCaption='Close'
            >
                <h2 className='text-xl font-bold text-stone-700 my-4 text-left'>
                    Invalid Input
                </h2>
                <p className='text-stone-600 mb-4'>
                    Ooops... Looks like you forgot to enter a value.
                </p>
            </Modal>
            <div className='w-[35rem] md-16'>
                <menu className='flex items-center justify-end gap-4 my-4'>
                    <li>
                        <button
                            className='text-stone-800 hover:text-stone-950'
                            onClick={onCancel}
                        >
                            Cancel
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={handleSave}
                            className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'
                        >
                            Save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input
                        ref={title}
                        label='Title'
                        type='text'
                    />
                    <Input
                        ref={description}
                        label='Description'
                        textarea
                    />
                    <Input
                        ref={dueDate}
                        label='Due Date'
                        type='date'
                    />
                </div>
            </div>
        </>
    );
}

export default NewProject;
