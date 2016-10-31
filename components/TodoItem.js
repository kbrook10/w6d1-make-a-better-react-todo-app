import React, { Component } from 'react'

const TodoItem = (props) =>
(
    <div>
        <div className="checkbox">
          <label className="input-group" onClick={props.markDone}>
            <input type="checkbox" checked={props.item.done}/>
            <span id="newTask" style={{textDecoration:props.item.done?'line-through':''}}>{props.item.text}</span>
          </label>
        </div>
    </div>
)
export default TodoItem
