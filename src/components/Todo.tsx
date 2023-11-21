import { faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Checkbox } from 'flowbite-react';

interface TodoProps {
    id: number;
    text: string;
    completed: boolean;
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
}

const Todo: React.FC<TodoProps> = ({ id, text, completed, onToggle, onRemove }) => {
    return (
        <li
            className={`list-group-item d-flex align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2 ${completed ? 'text-muted' : ''
                }`}
        >
            <div className="d-flex align-items-center">

                <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <Checkbox
                        checked={completed}
                        onChange={() => onToggle(id)}
                    />
                    <span className="flex-1 ms-3 whitespace-nowrap">{completed ? <s>{text}</s> : text}</span>
                    <FontAwesomeIcon icon={faTimes} className="ms-2" onClick={() => onRemove(id)} />
                </a>

            </div>
        </li>
    );
};

export default Todo;
