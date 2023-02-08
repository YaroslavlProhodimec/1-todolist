import React from "react";
import {PropsFilterType} from "./App";

type PropsTodolist = {
    title : string
    tasks : Array<TasksType>
    removeTask:(id:number)=>void
    changeFilter:(value:PropsFilterType) => void
}
export type TasksType = {
    id:number,
    title : string,
    isDone: boolean

}

export function Todolist(props:PropsTodolist) {

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            {props.tasks.map((t:any)=>
            <ul>
                <li key={t.id}><input type="checkbox" checked={t.isDone}/> <span>{t.title}</span>
                <button onClick={ ( ) => { props.removeTask(t.id)} }>x</button>
                </li>

            </ul>
                )
        }
            <div>
                <button onClick={ ( ) => { props.changeFilter('all')} }>All</button>
                <button onClick={ ( ) => { props.changeFilter('active')} }>Active</button>
                <button onClick={ ( ) => { props.changeFilter('completed')} }>Completed</button>
            </div>
        </div>

    )
}