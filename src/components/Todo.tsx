import { faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

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
      className={`list-group-item d-flex align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2 ${
        completed ? 'text-muted' : ''
      }`}
    >
      <div className="d-flex align-items-center">
        <input
          className="form-check me-2"
          type="checkbox"
          value=""
          aria-label="..."
          checked={completed}
          onChange={() => onToggle(id)}
        />
        {completed ? <s>{text}</s> : text}
        <FontAwesomeIcon icon={faTimes} className="ms-2" onClick={() => onRemove(id)} />
      </div>
    </li>
  );
};

export default Todo;
