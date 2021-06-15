import * as React from 'react';
import './todolist.css';
interface TodoListProp {
  title: string;
  description: string;
  id?: string;
}

export const TodoList: React.FC<TodoListProp> = ({ title, description, id, ...props }) => {
  return (
    <div className="box" {...props}>
      <div style={{ display: 'none' }}>{id}</div>
      <div className="display-text" style={{ borderBottom: '1px solid #000' }}>
        <label>Title : </label>
        <h3>{title}</h3>
      </div>
      <div className="display-text">
        <label>Description : </label>
        <p>{description}</p>
      </div>
    </div>
  );
};
