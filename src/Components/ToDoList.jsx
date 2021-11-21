// To do List Components 
import React, { useState } from "react";
import Button from '@material-ui/core/Button';  // material UI Button
import AddIcon from '@material-ui/icons/Add';   // material UI AddIcon
import Tooltip from '@material-ui/core/Tooltip';    // material UI Tooltip
import ListCom from './ListCom';
const ToDoList = () => {

    const [item, setItem] = useState("");       // Hooks
    const [newItem, setnewItem] = useState([]); // Hooks

    // { itemEvent } is input fild's onChange ateribute's function
    const itemEvent = (event) => {
        setItem(event.target.value);
    }

    // { listOfItems } is Button tag's onClick ateribute's function
    const listOfItems = () => {
        setnewItem((preValue) => {
            return [...preValue, item]          // {...} = spered operater is use for return all value of Array
        });
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1 > To-Do List </h1>
                    <br />
                    <input type="text" placeholder="Enter an Items" onChange={itemEvent} value={item}/>
                    <Tooltip title="Add Item">
                        <Button onClick={listOfItems} variant="text" className="newBtn">
                            <AddIcon />
                        </Button>
                    </Tooltip>
                    <br /> 
                    <ol>
                        {newItem.map((val) => { return <ListCom text={val}/> ; })}
                    </ol>
                    <br />
                </div>
            </div>
        </>
    );
}

export default ToDoList;