import React from "react";
import './TodoItem.css';
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { BsXSquareFill } from "react-icons/bs";


function TodoItem(props) {
    
    return (
        <li className="TodoItem">
            <span 
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete}
            >
            <BsFillBookmarkCheckFill/>
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
            {props.text}
            </p>
            <span
            className="Icon Icon-delete"
            onClick={props.onDelete}
            >
            <BsXSquareFill/>
            </span>
        </li>
    )
}

export { TodoItem };