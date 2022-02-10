import React, {ChangeEvent} from "react";
import {FilterValuesType} from "./App";
import { TaskType } from "./Todolist";

type MapTaskType = {
    todolistID : string
    tasks: Array<TaskType>
    removeTask: (todolistID : string, id : string) => void
    changeTaskStatus: (todolistID : string, taskId: string, isDone: boolean) => void
}


export const MapTasks = ({tasks, removeTask, changeTaskStatus, ...props} : MapTaskType) => {
     return (
        <div>
            <ul>
                {
                    tasks.map(t => {
                        const onClickHandler = () => removeTask(props.todolistID, t.id)
                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            changeTaskStatus(props.todolistID, t.id, e.currentTarget.checked);
                        }

                        return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                            <input type="checkbox"
                                   onChange={onChangeHandler}
                                   checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={onClickHandler}>x</button>
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default MapTasks;