import React, { useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';

const ListCom = (props) => {

    const [line, setLine] = useState(false);

    // cutIt function
    const cutIt = () => {
        setLine(true);
    }

    return (
        <>
            <div className="todo_style">
                <Tooltip title="Delete">
                    <span onClick={cutIt}>
                        <DeleteIcon className="deleteIcon" />
                    </span>
                </Tooltip>
                <li style={{ textDecoration: line ? "line-through" : "none" }} > {props.text} </li>
            </div>
        </>
    );
}

export default ListCom;